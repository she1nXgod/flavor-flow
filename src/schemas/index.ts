import * as Yup from 'yup';

export const loginSchema = () =>
  Yup.object().shape({
    username: Yup.string().required('Required field'),
    password: Yup.string().required('Required field'),
    error: Yup.string().notRequired(),
  });
