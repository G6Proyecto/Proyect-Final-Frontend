import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

const FilterProduct = () => {
    const [open, setOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
  
    const handleButtonClick = (buttonId) => {
      setSelectedButton(buttonId);
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
            {['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'].map((categoria, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(index)}
                variant={selectedButton === index ? 'primary' : 'secondary'}
              >
                {categoria}
              </Button>
            ))}
          </div>
        </Collapse>
      </>
    );
  };
  
  export default FilterProduct;