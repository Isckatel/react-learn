import * as Yup from 'yup';

export const Validation = Yup.object().shape({
  newPost: Yup.string()
  .min(2,'Слишком коротко!')
  .max(50,'Слишком длинное!')
  .required('Введите тексе!')
});
