import Container from 'react-bootstrap/Container';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container
      fluid
      className='vh-100 d-flex p-0 justify-content-center align-items-center flex-column bg-light page-bg login-bg'
    >
      {children}
    </Container>
  );
};

export default Layout;
