import React, { useState, useEffect } from 'react'

import Form from './components/Form'
import formSchema from './validation/formSchema'
import * as yup from 'yup'

const initialFormValues = {
  size: '',
  sauce: '',
  toppings: {
    peperoni: false,
    sausage: false,
    canadian_bacon: false,
    spicy_italian_sausage: false,
    grilled_chicken: false,
    onions: false,
    green_pepper: false,
    diced_tomatoes: false,
    black_olives: false,
    roasted_garlic: false,
    artichoke_hearts: false,
    three_cheese: false,
    pineapple: false,
    extra_cheese: false,
  },
  special_instructions: '',
}

const initialFormErrors = {
  size: '',
  sauce: '',
}

const App = () => {
  const [pizzas, setPizzas] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    // Yup for validation
    yup
      .reach(formSchema, name)
      .validate(value)
      // if the validation is successful, then clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      // if not, then display error message
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    // a) pull the `name` of the checkbox from the event
    const { name } = evt.target
    // b) pull whether `checked` true or false, from the event
    const { checked } = evt.target

    // c) set a new state for the whole form
    setFormValues({
      // copy formvalues
      ...formValues,
      // override one thing inside formvalues
      toppings: {
        // copy the current hobbies
        ...formValues.toppings,
        // override one of the hobbies
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newPizza = {
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: formValues.toppings,
      special_instructions: formValues.special_instructions
    }

    console.log(newPizza)
    setPizzas([newPizza, ...pizzas])
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    // 🔥 STEP 11- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <>
      <h1>Lambda Eats</h1>
      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
        onCheckboxChange={onCheckboxChange} />
    </>
  );
};
export default App;
