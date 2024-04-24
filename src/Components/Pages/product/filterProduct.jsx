import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const FilterProduct = ({ onCategorySelect }) => {
  const [open, setOpen] = useState(false);
  
  const handleButtonClick = (category) => {
    if (category === 'Todos') {
      onCategorySelect(null);
    } else {
      onCategorySelect(category);
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Toggle
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {['Hamburguesas', 'Ensaladas', 'Bebidas', 'Postres', 'Todos'].map((category, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(category)}
              className='m-2 flex-column d-flex w-75 mx-auto'
            >
              {category}
            </Button>
          ))}
        </div>
      </Collapse>
    </>
  );
};

export default FilterProduct;
