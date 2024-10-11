import * as yup from 'yup'

export const ContactSchema = yup.object().shape({
  topic: yup
    .string()
    .min(10, 'El asunto debe tener mas a 10 caracteres.')
    .max(50, 'El asunto no debe tener mas a 50 caracteres.')
    .required('El asunto es requerido.'),
  name: yup
    .string()
    .min(2, 'El nombre debe tener mas a 2 caracteres.')
    .max(50, 'El nombre no debe tener mas a 50 caracteres.')
    .required('El nombre es requerido.'),
  email: yup
    .string()
    .email('Ingrese una dirección de email válida.')
    .required('El correo es requerido.'),
})

