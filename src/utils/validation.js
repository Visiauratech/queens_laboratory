import * as Yup from 'yup'

const noLeadingOrMultiSpace = (label) =>
  Yup.string()
    .transform((value) => (typeof value === 'string' ? value : ''))
    .test('no-leading-space', `${label} cannot start with a space`, (value) => !value || !/^\s/.test(value))
    .test('no-multi-space', `${label} cannot contain multiple spaces`, (value) => !value || !/\s{2,}/.test(value))
    .test('not-only-spaces', `${label} cannot be empty spaces`, (value) => !value || value.trim().length > 0)

export const contactSchema = Yup.object({
  name: noLeadingOrMultiSpace('Name')
    .required('Name is required')
    .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/, 'Name allows alphabets only')
    .max(30, 'Name allows 30 characters only'),

  email: noLeadingOrMultiSpace('Email')
    .required('Email is required')
    .email('Enter a valid email format')
    .matches(/^[^\s]+@[^\s]+\.[^\s]+$/, 'Email format is invalid')
    .test('no-digits-in-local', 'Email format is invalid', (value) => {
      if (!value) return true
      return /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
    }),

  number: Yup.string()
    .required('Number is required')
    .test('no-leading-space', 'Number cannot start with a space', (value) => !value || !/^\s/.test(value))
    .test('no-spaces', 'Number cannot contain spaces', (value) => !value || !/\s/.test(value))
    .matches(/^[0-9]+$/, 'Number allows digits only')
    .max(10, 'Number cannot exceed 10 digits')
    .min(10, 'Number must be 10 digits'),

  address: noLeadingOrMultiSpace('Address')
    .required('Address is required')
    .min(5, 'Enter a valid address'),

  description: noLeadingOrMultiSpace('Description').notRequired(),
})
