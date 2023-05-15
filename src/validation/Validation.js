import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  avatar: Yup.string().required('Avatar is required'),
  gender: Yup.string().oneOf(['men', 'women'],'Invalid gender').required('Gender is required'),
  status: Yup.string().oneOf(['Work', 'Family','Private', 'Friends'],'Status gender').required('Status is required'),
  favorite: Yup.boolean()
})