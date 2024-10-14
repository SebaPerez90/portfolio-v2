import * as yup from 'yup';

export const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'El nombre debe tener mas a 3 caracteres.')
    .max(50, 'El nombre no debe tener mas a 50 caracteres.')
    .required('El nombre es requerido.'),
  email: yup.string().email('Ingrese una dirección de email válida.').required('El correo es requerido.'),
});
