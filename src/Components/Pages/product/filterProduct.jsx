import { useState } from 'react';
import "../product/productStyle.css"
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
        className='btnCategory w-100'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{backgroundColor:'var(--fourth)', border:0, fontSize:'1.5rem', borderBottomLeftRadius: '30px', color:'#111', fontWeight:'700'}}
      >
        CATEGORIAS
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {['Hamburguesas', 'Ensaladas', 'Bebidas', 'Postres', 'Todos'].map((category, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(category)}
              className='flex-column d-flex w-75 mx-auto my-2'
              style={{backgroundColor:'var(--fourth)', border:'0', fontSize:'1.5rem', fontWeight:'500', color:'#111'}}
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
