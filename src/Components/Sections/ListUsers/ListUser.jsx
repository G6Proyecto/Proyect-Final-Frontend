import axios from 'axios';
import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState('');

  const API = import.meta.env.VITE_API;


  const getUsers = async ()=>{
    try {
        const response =await axios.get(`${API}/users/listuser`)
        setUsers(response.data);
    } catch (error) {
      console.log("Error en get axios---->", error);
    }
  };


  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${API}/users/deleteuser/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error en delete axios---->", error);
    }
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user._id !== id));
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setNewRole(user.role);
    setShow(true);
  };
const updateUserRole = async (id, newRole) => {
  try {
    const response = await axios.put(`${API}/users/updateuser/${id}`, { role: newRole });
    return response.data;
  } catch (error) {
    console.log("Error en update axios---->", error);
  }
};
  const handleClose = async () => {
    if (newRole !== selectedUser.role) {
      await updateUserRole(selectedUser._id, newRole);
      setUsers(users.map(user => user._id === selectedUser._id ? { ...user, role: newRole } : user));
    }
    setShow(false);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="primary" onClick={() => handleEdit(user)}>Editar</Button>
                <Button variant="danger" onClick={() => handleDelete(user._id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Rol</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="role">
              <Form.Label>Rol</Form.Label>
              <Form.Control as="select" value={newRole} onChange={e => setNewRole(e.target.value)}>
                <option value="Administrador">Administrador</option>
                <option value="cliente">Cliente</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary" onClick={handleClose}>Guardar Cambios</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserList;