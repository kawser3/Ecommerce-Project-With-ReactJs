import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {mobile} from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const TopTexts = styled.div`
  ${mobile({ display: "none",})}
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column"})}
`

const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column"})}
`
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border: 50%;
  background-color: ${props => props.color};
`
const ProductSize = styled.span``
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px"})}
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
  ${mobile({ marginBottom: "20px",fontSize: "24px"})}
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`
const Summery = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummeryTitle = styled.h1`
  font-weight: 200;
`
const SummeryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`
const SummeryItemText = styled.span``
const SummeryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1E1F29;
  color: white;
  font-weight: 600;

`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Annoucement/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
              <TopButton>Continue Shopping</TopButton>
              <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist</TopText>
              </TopTexts>
              <TopButton type="filled">ChechOut Now</TopButton>
            </Top>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetails>
                  <Image src = "https://cdn.shopify.com/s/files/1/1965/6811/products/abjkt00416_billabong_l_mul_frt1_360x.jpg?v=1659015435"/>
                  <Details>
                    <ProductName><b>Product:</b> Abigail Knit Dress</ProductName>
                    <ProductId><b>Color:</b> 698745321</ProductId>
                    <ProductColor color="teal"/>
                    <ProductSize><b>Size:</b> 32</ProductSize>
                  </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Add/>
                      <ProductAmount>1</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>BDT 1850</ProductPrice>
                  </PriceDetails>
                </Product>
                <Hr/>
                <Product>
                  <ProductDetails>
                  <Image src = "https://cdn.shopify.com/s/files/1/1965/6811/products/83ec6cc6-ddfe-437d-817d-44b1a7e6ce61_360x.jpg?v=1659973755"/>
                  <Details>
                    <ProductName><b>Product:</b> SOUTHERN CHARM TUNIC</ProductName>
                    <ProductId><b>Color:</b> 698745322</ProductId>
                    <ProductColor color="red"/>
                    <ProductSize><b>Size:</b> 32</ProductSize>
                  </Details>
                  </ProductDetails>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Add/>
                      <ProductAmount>1</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>BDT 1850</ProductPrice>
                  </PriceDetails>
                </Product>
              </Info>
              <Summery>
                <SummeryTitle>Order Summery</SummeryTitle>
                <SummeryItem>
                  <SummeryItemText>Subtotal</SummeryItemText>
                  <SummeryItemText>Bdt 3700</SummeryItemText>
                </SummeryItem>
                <SummeryItem>
                  <SummeryItemText>Estimated Shipping</SummeryItemText>
                  <SummeryItemPrice>Bdt 60</SummeryItemPrice>
                </SummeryItem>
                <SummeryItem>
                  <SummeryItemText>Shipping Discount</SummeryItemText>
                  <SummeryItemPrice>Bdt 50</SummeryItemPrice>
                </SummeryItem>
                <SummeryItem type= "total">
                  <SummeryItemText>Total</SummeryItemText>
                  <SummeryItemPrice>Bdt 3710</SummeryItemPrice>
                </SummeryItem>
                <Button>Checkout Now</Button>
              </Summery>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart