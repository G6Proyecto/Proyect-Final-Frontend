/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const RowProducts = ({ product, handleShow, getProducts }) => {
  const API = import.meta.env.VITE_API;

  const deleteProduct = () => {
    Swal.fire({
      title: "Está seguro que quiere eliminar el producto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "No, no deseo eliminar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`${API}/products/delete/`+product._id, {
            method: "DELETE",
            headers: { "content-Type": "application/json" },
          });
          getProducts();
          Swal.fire({
            title: "Éxito",
            text: "Su producto se eliminó exitosamente",
            icon: "success",
          });
        } catch (error) {
          console.log("El error es", error.message);
        }
      }
    });
  };
  return (
    <>
      <tr>
        <td className="text-center align-content-center">{product._id}</td>
        <td className="text-center align-content-center">{product.title}</td>
        <td className="text-center align-content-center">{product.category}</td>
        <td className="text-center align-content-center">{product.price}</td>
        <td className="text-center align-content-center">{product.description}</td>
        <td className="text-center align-content-center">{product.dateStock}</td>
        <td className="text-center align-content-center"><img src={product.url} alt={product.name} width={80} /></td>
        <td className="d-flex justify-content-center gap-2 p-4">
          <Button
            type="button"
            variant="success"
            onClick={() => {
              handleShow(product);
            }}
          >
            Editar
          </Button>
          <Button type="button" variant="danger" onClick={deleteProduct}>
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default RowProducts;
