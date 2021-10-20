import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>    
                <CTA>
                    <img src="images/cta-logo-one.svg" alt="" />
                    <a >GET ALL THERE</a>
                    <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Description>
                    <img className="logoTwo" src="images/cta-logo-two.png" alt="" />
                </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div `
min-height: calc(100vh - 70px);
display: flex;
align-items: top;
justify-content: center;
position: relative;

&:before{
content: "";
background: url("images/login-background.jpg");
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
opacity: 0.7;
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
}


`

const CTA = styled.div `
position: relative;
margin-top: 100px;
max-width: 640px;
padding: 80px 40px;
width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
a{
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color:#f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;
    }

}

img.logoTwo{
    width: 90%;
}

`

const Description = styled.p `
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`