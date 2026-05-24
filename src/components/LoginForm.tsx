import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import { loginSchema } from '../schemas';
import { useNavigate } from 'react-router-dom';
import type { User } from '../types';

type LoginFormValues = User & {
  error?: string;
};

const LoginForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (user: User, { setErrors }: FormikHelpers<LoginFormValues>) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user.username, password: user.password }),
      });

      if (!response.ok) {
        setErrors({ error: 'Invalid username or password' });
        return;
      }

      const userData = await response.json();
      localStorage.setItem('currentUser', JSON.stringify(userData));
      navigate('/');
    } catch {
      setErrors({ error: 'Server connection error' });
    }
  };

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Row className='w-100 justify-content-center'>
        <Col xs={11} md={6} lg={5} className='p-5 glass-card'>
          <h2 className='text-center mb-4'>FlavorFlow Login</h2>
          <Formik<LoginFormValues>
            initialValues={{ username: '', password: '', error: '' }}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit, handleChange, values, errors, submitCount }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-4' controlId='formUsername'>
                  <Form.Control
                    className='glass-card'
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={submitCount > 0 && !!errors.username}
                    autoComplete='username'
                  />
                  {submitCount > 0 && errors.username && (
                    <div className='text-danger small'>{errors.username}</div>
                  )}
                </Form.Group>

                <Form.Group className='mb-4' controlId='formPassword'>
                  <Form.Control
                    className='glass-card'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={submitCount > 0 && !!errors.password}
                    autoComplete='password'
                  />
                  {submitCount > 0 && errors.password && (
                    <div className='text-danger small'>{errors.password}</div>
                  )}
                  {!!errors.error && (
                    <div className='mt-2 mb-3 text-danger'>{errors.error}</div>
                  )}
                </Form.Group>

                <Button type='submit' className='w-100 mb-3'>
                  Login
                </Button>

                <div className='small'>
                  {"Don't have an account? "}
                  <a className='fw-semibold' href='/register'>
                    Sign Up
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
