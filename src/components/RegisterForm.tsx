import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import type { FormikHelpers } from 'formik';
import { registerSchema } from '../schemas';
import { useNavigate } from 'react-router-dom';
import type { User } from '../types';
import { getUsersFromStorage } from '../mocks/data';

type RegisterFormValues = User & {
  confirmPassword: string;
  error?: string;
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const onSubmit = (
    newUser: User,
    { setErrors }: FormikHelpers<RegisterFormValues>,
  ): void => {
    const users = getUsersFromStorage();
    const foundUser = users.find((u) => u.username === newUser.username);

    if (foundUser) {
      setErrors({ error: 'This username already exists' });
    } else {
      const currentUser = { username: newUser.username, password: newUser.password };
      const usersData = JSON.parse(localStorage.getItem('users_db') ?? '[]');
      usersData.push(currentUser);

      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      localStorage.setItem('users_db', JSON.stringify(usersData));

      navigate('/');
    }
  };

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Row className='w-100 justify-content-center'>
        <Col xs={11} md={6} lg={5} className='p-5 glass-card'>
          <h2 className='text-center mb-4'>FlavorFlow Registragion</h2>
          <Formik<RegisterFormValues>
            initialValues={{
              username: '',
              password: '',
              confirmPassword: '',
              error: '',
            }}
            validationSchema={registerSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId='formUsername'>
                  <Form.Control
                    className='glass-card'
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.username && !!errors.username}
                    autoComplete='false'
                  />
                  {touched.username && errors.username ? (
                    <div className='text-danger small'>{errors.username}</div>
                  ) : null}
                </Form.Group>

                <Form.Group className='mb-3' controlId='formPassword'>
                  <Form.Control
                    className='glass-card'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.password && !!errors.password}
                    autoComplete='new-password'
                  />
                  {touched.password && errors.password ? (
                    <div className='text-danger small'>{errors.password}</div>
                  ) : null}
                </Form.Group>

                <Form.Group className='mb-3' controlId='formConfirmPassword'>
                  <Form.Control
                    className='glass-card'
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.confirmPassword && !!errors.confirmPassword}
                    autoComplete='new-password'
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <div className='text-danger small'>{errors.confirmPassword}</div>
                  ) : null}

                  {!!errors.error && (
                    <div className='mt-2 mb-3 text-danger'>{errors.error}</div>
                  )}
                </Form.Group>

                <Button type='submit' className='w-100 mb-3'>
                  Sign Up
                </Button>

                <div className='small'>
                  {'Already have an account? '}
                  <a className='fw-semibold' href='/login'>
                    {'Log In'}
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

export default RegisterForm;
