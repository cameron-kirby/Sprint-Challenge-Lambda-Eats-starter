import React from "react";
import styled from 'styled-components'

const StyledForm = styled.div`
    form {
        .validation{
            color: #ec3944;
            font-weight: bold;
        }
        .form.title {
            text-align: center;
            font-weight: 900;
            font-size: 2rem;
        }

        .sauce-options {
            display: flex;
            flex-direction: column;
            label{
                padding: 10px 0;
            }
        }

        .topping-options {
            display: flex;
            flex-wrap: wrap;
            
            label {
                padding: 1%;
                width: 40%;
            }
        }

        .form-group.submit {
            text-align:center;
            padding: 3%;
            button {
                color: white;
                font-size: 1.3rem;
                padding: 2%;
                background: #ec3944;
                border: none;
                &:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
            }
            
        }

    }
`

export default function Form(props){
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange,
      } = props

    return(
        <StyledForm>
            <form className="form container" onSubmit={onSubmit}>
                <h3 className="form title">BYOP</h3>
                {/* Insert Pizza img */}
                <h2>Build your own pizza</h2>
                <div className="form-group size">
                    {/* Add sizing validation */}
                    <h3>Choice of size</h3>
                    <div className="validation">{errors.size}</div>
                    <label>Size:&nbsp;
                        <select
                            onChange={onInputChange}
                            value={values.size}
                            name='size'
                        >
                            <option value=''>- Select</option>
                            <option value='Personal'>Personal</option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                        </select>
                    </label>
                </div>
                <div className="form-group sauce">
                    <h3>Choice of Sauce</h3>
                    <div className="validation">{errors.sauce}</div>
                    <div className="sauce-options">
                        <label>Original Red&nbsp;
                            <input
                                type='radio'
                                name='sauce'
                                value='Original Red'
                                onChange={onInputChange}
                            />
                        </label>
                        <label>Garlic Ranch&nbsp;
                            <input
                                type='radio'
                                name='sauce'
                                value='Garlic Ranch'
                                onChange={onInputChange}
                            />
                        </label>
                        <label>BBQ Sauce&nbsp;
                            <input
                                type='radio'
                                name='sauce'
                                value='BBQ Sauce'
                                onChange={onInputChange}
                            />
                        </label>
                        <label>Spinach Alfredo&nbsp;
                            <input
                                type='radio'
                                name='sauce'
                                value='Spinach Alfredo'
                                onChange={onInputChange}
                            />
                        </label>

                    </div>
                    <div className="form-group toppings">
                        <h3>Add Toppings</h3>
                        <div className='topping-options'>
                            <label>Pepperoni
                                <input
                                    type='checkbox'
                                    name='pepperoni'
                                    checked={values.toppings.pepperoni}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Sausage
                                <input
                                    type='checkbox'
                                    name='sausage'
                                    checked={values.toppings.sausage}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Canadian Bacon
                                <input
                                    type='checkbox'
                                    name='canadian_bacon'
                                    checked={values.toppings.canadian_bacon}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Spicy Italian Sausage
                                <input
                                    type='checkbox'
                                    name='spicy_italian_sausage'
                                    checked={values.toppings.spicy_italian_sausage}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Grilled Chicken
                                <input
                                    type='checkbox'
                                    name='grilled_chicken'
                                    checked={values.toppings.grilled_chicken}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Onions
                                <input
                                    type='checkbox'
                                    name='onions'
                                    checked={values.toppings.onions}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Green Pepper
                                <input
                                    type='checkbox'
                                    name='green_pepper'
                                    checked={values.toppings.green_pepper}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Diced Tomatoes
                                <input
                                    type='checkbox'
                                    name='diced_tomatoes'
                                    checked={values.toppings.diced_tomatoes}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Black Olives
                                <input
                                    type='checkbox'
                                    name='black_olives'
                                    checked={values.toppings.black_olives}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Roasted Garlic
                                <input
                                    type='checkbox'
                                    name='roasted_garlic'
                                    checked={values.toppings.roasted_garlic}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Artichoke Hearts
                                <input
                                    type='checkbox'
                                    name='artichoke_hearts'
                                    checked={values.toppings.artichoke_hearts}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Three Cheese
                                <input
                                    type='checkbox'
                                    name='three_cheese'
                                    checked={values.toppings.three_cheese}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Pineapple
                                <input
                                    type='checkbox'
                                    name='pineapple'
                                    checked={values.toppings.pineapple}
                                    onChange={onCheckboxChange}
                                />
                            </label>

                            <label>Extra Cheese
                                <input
                                    type='checkbox'
                                    name='extra_cheese'
                                    checked={values.toppings.extra_cheese}
                                    onChange={onCheckboxChange}
                                />
                            </label>
                            </div>
                    </div>
                </div>
                <div className="form-group special-instructions">
                    <label>Special Instructions&nbsp;
                        <input
                            value={values.special_instructions}
                            onChange={onInputChange}
                            name='special_instructions'
                            type='text'
                        />
                    </label>
                </div>
                <div className="form-group submit">
                    <button disabled={disabled}>Add to Order</button>
                </div>
            </form>
        </StyledForm>
        
    )
}