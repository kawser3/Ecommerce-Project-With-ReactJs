import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Description = styled.p`
    margin: 20px 0px;
    ${mobile({ fontSize: "15px"})}
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})}
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8"})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    ${mobile({ fontSize: "15px"})}
`

const Payments = styled.img`    
    width: 70%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Meoww.com</Logo>
            <Description>Meoww.com is online clothing and shoes store effectively reflects its values – simplicity and sustainability – from the headline and copy to the warm-toned editorial shots. It only takes a few scrolls on the homepage to read about the company’s sustainable practices and main product categories, like the newest collections and collaborations.</Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE"> 
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>259, Valencia, Khaleque city, Gabtoli, Dhaka, Bangladesh-1215</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+8801797237004</ContactItem>
            <ContactItem><Mail style={{marginRight:"10px"}}/>h_alkawser_yahoo.com</ContactItem>
            <Payments src="https://www.transparentpng.com/download/payment-method/KWM0Hm-payment-method-bitcoin-photo.png"/> 
        </Right>
    </Container>
  )
}

export default Footer