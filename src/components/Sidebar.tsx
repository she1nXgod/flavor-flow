import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav variant='pills' className='flex-column gap-3'>
      <Nav.Item className='d-flex justify-content-center align-items-center text-center glass-card sidebar-card fw-bold'>
        <img src='/all-recipes.svg' alt='All recipes' className='icon mx-2' />
        All Recipes
      </Nav.Item>

      <Nav.Item className='d-flex justify-content-center align-items-center text-center glass-card sidebar-card fw-bold'>
        ☀ Breakfast
      </Nav.Item>

      <Nav.Item className='d-flex justify-content-center align-items-center text-center glass-card sidebar-card fw-bold'>
        🍔 Lunch
      </Nav.Item>

      <Nav.Item className='d-flex justify-content-center align-items-center text-center glass-card sidebar-card fw-bold'>
        🍗 Dinner
      </Nav.Item>

      <Nav.Item className='d-flex justify-content-center align-items-center text-center glass-card sidebar-card fw-bold'>
        🍕 Pizza
      </Nav.Item>

      <Nav.Item className='d-flex justify-content-center align-items-center text-center glass-card sidebar-card fw-bold'>
        🍰 Desserts
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
