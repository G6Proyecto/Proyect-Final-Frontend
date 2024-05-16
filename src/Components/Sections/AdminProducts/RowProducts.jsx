/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

import { useState } from "react";

const RowProducts = ({ product, handleShow, getProducts }) => {
  const API = import.meta.env.VITE_API;

  const [showFullDescription, setShowFullDescription] = useState(false);

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
          await fetch(`${API}/products/delete/` + product._id, {
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

  const toggleShowFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <>
      <tr>
        <td>{product.title}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>
          {showFullDescription ? (
            <>
              {product.description}
              <Button
                variant="link"
                onClick={toggleShowFullDescription}
                className="ms-2"
              >
                Mostrar menos
              </Button>
            </>
          ) : (
            <>
              {product.description.length > 200
                ? `${product.description.substring(0, 100)}...`
                : product.description}
              {product.description.length > 100 && (
                <Button
                  variant="link"
                  onClick={toggleShowFullDescription}
                  className="ms-2"
                >
                  Mostrar más
                </Button>
              )}
            </>
          )}
        </td>
        <td>{product.dateStock}</td>
        <td>
          <img src={product.url} alt={product.name} width={80} />
        </td>
        <td>
          <div className="d-flex justify-content-between align-item-center">
            <Button
              className="m-3"
              type="button"
              variant="success"
              onClick={() => {
                handleShow(product);
              }}
            >
              Editar   
            </Button>
            <Button
              className="m-3"
              type="button"
              variant="danger"
              onClick={deleteProduct}
            >
              Eliminar
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RowProducts;
