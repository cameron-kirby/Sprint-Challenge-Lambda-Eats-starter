import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHome = styled.div`
    margin-top: 7%;
    text-align:center;

    a {
        text-decoration:none;

        .orderbtn {
            background-color: #ec3944;
            color: white;
            font-weight: 900;
            padding: 2%;
            width: 20%;
            margin: auto;
        }
    }
    
`

export default function Home(props){

    return(
        <StyledHome>
            <div>
                <h2>Welcome to Lambda Eats!</h2>
                <Link to='/pizza'><div className="orderbtn">Click here to order</div></Link>
            </div>
        </StyledHome>
    )
}