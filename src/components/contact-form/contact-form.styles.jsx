import styled from 'styled-components'

export const FormWrapper = styled.form`
    font-weight: 700;
    letter-spacing: 1.4px;
    display: flex;
    min-height: 75vh;
    margin: 5vh 10vw;
`

export const FormBodyItem = styled.div`
    flex: 1;
    padding: 50px;


`

export const FormBodyItemLeft = styled.div`
    flex: 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
`

export const FormTitle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    color: rgb(12, 235, 179);
    font-size: 70px;
    cursor: default;
    font-family: 'Lora', serif;
  
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 110px;
    height: 4px;
    background: white;
  }
`

export const FormContactInfo = styled.div`
    margin-top: 5vh;
    font-size: 20px;
    color: white;
    cursor: default;
    opacity: 0.7;
    font-family: 'ABeeZee', sans-serif;
`

export const FormGroup = styled.div`
    margin-bottom: 30px;
  
  .message {
    margin-top: 40px;
  }
  
  .buttons {
    margin-bottom: 0;
    text-align: right;
  }
`

export const FormControl = styled.input`
    width: 100%;
    padding: 10px;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    color: #ddd;
    font-size: 20px;
    text-transform: uppercase;
    outline: none;
    transition: border-color .2s;

    &::placeholder {
        color: #666;
    }

    &:focus {
        border-bottom-color: rgb(12, 235, 179);
    }
`

export const FormMessage = styled.textarea`
    width: 100%;
    padding: 10px;
    height: 30vh;
    background: transparent;
    color: #ddd;
    font-size: 20px;
    outline: none;
    border: 1px solid white;
    transition: border-color .2s;
    border-radius: 10px;

    &::placeholder {
        color: #666;
    }

    &:focus {
        border-color: rgb(12, 235, 179);
    }
`

export const FormButton = styled.button`
margin: auto 0;
width: max-content;
cursor: pointer;
border-radius: 4px;
text-decoration: none;
padding: 12px 18px;
font-size: 12px;
line-height: 19px;
text-transform: uppercase;
font-family: 'Montserrat', sans-serif; font-weight:400;
letter-spacing: 3px;
border: 1px solid white;
background: transparent;
color: #fff !important;
-webkit-transition: all .4s ease-in-out;
   -moz-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
     -o-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;

&:hover{
    border-color: rgb(12, 235, 179);
    color: rgb(12, 235, 179); !important;
    -webkit-transition: all .4s ease-in-out;
   -moz-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
     -o-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
}
`

