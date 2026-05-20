import Container from 'react-bootstrap/Container';

type LayoutProps = {
  children: React.ReactNode;
  background: string;
};

const Layout = ({ children, background }: LayoutProps) => {
  return (
    <Container
      fluid
      className={`vh-100 d-flex p-0 justify-content-center align-items-center flex-column page-bg ${background}`}
    >
      {children}
    </Container>
  );
};

export default Layout;
