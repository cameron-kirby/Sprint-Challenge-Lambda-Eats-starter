import * as yup from 'yup'

const formSchema = yup.object().shape({
    size: yup
        .string()
        .required('Size selection required'),
    sauce: yup
        .string()
        .required('Sauce selection required'),
    special_instructions: yup.string()
})

export default formSchema