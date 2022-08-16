import styled from "styled-components"
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import {mobile} from "../responsive"

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex" , flexDirection: "column" })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ margin: "0px", fontSize: "15px"})}

`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px"})}
`
const Option = styled.option`

`


const ProductList = () => {
  return (
    <Container>
        <Annoucement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter> <FilterText> Filter Products: </FilterText> 
                <Select>
                    <Option disabled selected> Color </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Red</Option>
                    <Option>Gray</Option>
                    <Option>Orange</Option>
                </Select>
                <Select>
                    <Option disabled selected> Size </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter> <FilterText> Sort Products: </FilterText>
                <Select>
                    <Option disabled selected> Newst </Option>
                    <Option>Price: Low to High</Option>
                    <Option>Price: High to Low</Option>
                </Select>
            </Filter>
        </FilterContainer>.
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList