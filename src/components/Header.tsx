import { Navbar, Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleExit = (): void => {
    navigate('/login');
  };

  return (
    <Navbar className='w-100 glass-card align-items-center mb-3'>
      <Container fluid className='justify-content-between m-0 p-2 px-3 gap-5'>
        <Navbar.Brand href='/' className='m-0'>
          FlavorFlow
        </Navbar.Brand>

        <Navbar.Collapse className='justify-content-center w-100'>
          <Form className='d-flex w-50'>
            <Form.Control
              type='search'
              placeholder='Search for recipes...'
              className='m-0 glass-search-input'
              aria-label='Search'
            />
            <button
              type='submit'
              className='d-flex px-3 justify-content-center align-items-center glass-search-btn'
            >
              <img src='/search-btn.svg' alt='Search' className='icon' />
            </button>
          </Form>
        </Navbar.Collapse>

        <Button
          variant='outline-danger'
          className='d-flex justify-content-center align-items-center btn-exit'
          onClick={handleExit}
        >
          <img src='/exit-account.svg' alt='Exit account' className='icon' />
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
