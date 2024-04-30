import axios from 'axios';
import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import "../users.css"
const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState('');

  const API = import.meta.env.VITE_API_BCK;

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

  const handleDelete = async (id, role) => {
    if (role === 'Administrador') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puede eliminar un usuario administrador!',
      })
    } else {
      Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteUser(id);
          setUsers(users.filter(user => user._id !== id));
          Swal.fire(
            'Eliminado!',
            'El usuario ha sido eliminado.',
            'success'
          )
        }
      })
    }
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
              <td className=''>
                {user.role !== 'Administrador' && (
                 <button variant=""  className="btn-custom-users mx-5" onClick={() => handleEdit(user)}>Editar</button>
                )}
                <button variant="" className="btn-delete mx-5 " onClick={() => handleDelete(user._id, user.role)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show}  onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edite el rol del usuario</Modal.Title>
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
          <button variant="" className="btn-delete mx2" onClick={handleClose}>Cerrar</button>
          <button variant="" className="btn-custom-users mx-2" onClick={handleClose}>Guardar</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UsersList;