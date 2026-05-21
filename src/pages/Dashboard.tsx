import Layout from '../components/Layout';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RecipesList from '../components/RecipesList';
import { Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Layout background='dashboard-bg'>
      <Header />
      <Row className='d-flex h-100 w-100'>
        <Col xs={12} md={2} className='glass-sidebar p-3'>
          <Sidebar />
        </Col>

        <Col xs={12} md={10}>
          <RecipesList />
        </Col>
      </Row>
    </Layout>
  );
};

export default Dashboard;
