import * as Yup from 'yup';

export const loginSchema = () =>
  Yup.object().shape({
    username: Yup.string().required('Required field'),
    password: Yup.string().required('Required field'),
    error: Yup.string().notRequired(),
  });

export const registerSchema = () =>
  Yup.object().shape({
    username: Yup.string()
      .min(3, 'Username must be between 3 and 20 characters')
      .max(20, 'Username must be between 3 and 20 characters')
      .required('Username is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Please confirm your password'),
  });
