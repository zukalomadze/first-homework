import styled from 'styled-components'

const theme = {
    blue: 'blue',
    red: 'red',
    yellow: 'yellow',
    green: 'green',
    purple: 'purple',
    orange: 'orange',
}
const CustomButton = styled.button`
    background-color: ${props => theme[props.theme]};
    color: black;
`
function Button({ text, onClick, theme}) {
    return (
      <CustomButton theme={theme}  onClick={onClick}>
        {text}
      </CustomButton>
    );
  }
  
  export default Button;