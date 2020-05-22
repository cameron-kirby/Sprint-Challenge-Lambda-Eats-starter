import * as yup from 'yup'

const formSchema = yup.object().shape({
    size: yup
        .string()
        .min(2, 'Size selection required')
        .required('Size selection required'),
    sauce: yup
        .string()
        .min(2, 'Size selection required')
        .required('Sauce selection required'),
    special_instructions: yup.string()
})

export default formSchema