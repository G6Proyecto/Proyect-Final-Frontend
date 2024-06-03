import { useState } from 'react';
import "../product/productStyle.css"
import {Collapse } from 'react-bootstrap';

const FilterProduct = ({ onCategorySelect }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    if (category === 'Todos') {
      onCategorySelect(null);
    } else {
      onCategorySelect(category);
    }
  };

  return (
    <>
      <button
        className='btnCategory w-100 '
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
       
      >
        CATEGORIAS
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {['Hamburguesas', 'Ensaladas', 'Bebidas', 'Postres', 'Todos'].map((category, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(category)}
              className={`flex-column d-flex w-75 mx-auto my-2 selectCategory ${selectedCategory === category ? 'selected' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </Collapse>
    </>
  );
};

export default FilterProduct;