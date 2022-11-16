import styled from 'styled-components'


export const StyledButton = styled.button `
border: 2px solid blue;
background-color: ${(props)=> (props.variant==='outline'? 'white': 'green')};
color: ${(props)=> (props.variant ==='outline' ? 'red' : 'pink')};
padding: 5px;
display: inline-block;
text-decoration: none;
text-align: center;
font-size: 22px;
font-weight: 700;
cursor: pointer;
transition: 0.5s all ease-out;
&:hover{  
background-color: ${(props)=> (props.variant!=='outline'? 'white': 'darkred')};
color: ${(props)=> (props.variant !=='outline' ? 'red' : 'pink')};
}
`