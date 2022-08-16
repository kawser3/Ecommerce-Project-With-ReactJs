import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    height: 30px;
    background-color: #1E1F29;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    ${mobile({ fontSize: "10px"})}
`

const Annoucement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over BDT-1000
    </Container>
  )
}

export default Annoucement