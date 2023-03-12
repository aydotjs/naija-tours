import  React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa' 
import { menuData } from "../MenuData"
import { Button } from "./Button"

const Header = ({toggle}) => {
return (
    <Nav>
        <NavLink to="/">NAIJEXPLORE</NavLink>
        <MobileIcon onClick={toggle}><Bars/></MobileIcon>
        <NavMenu>
            {menuData.map((item, index) => (
                <NavLink to={item.link} key={index}>
                    {item.title}
                </NavLink>
            ))}
        </NavMenu>
            <NavBtn>
            <Button primary="true" round="true" to="/trips">
            Book a Flight
            </Button>
            </NavBtn>
    </Nav>
)
}
export default Header


const Nav = styled.nav`
 background: linear-gradient(180deg,
         rgba(0,0,0,0.8) 0%,
         rgba(0,0,0,0.7) 100%
         ),
        linear-gradient(180deg, rgba(0,0,0,0.5) 0%,  transparent 100%);
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1300px) / 2);
z-index: 100;
position: relative;
`
const NavLink = styled(Link)`
color: #fff;
display: flex;
text-decoration: none;
cursor: pointer;
align-items: center;
padding: 0 1rem;
height: 100%;
font-weight: bold;

&.active{
    border-bottom: 3px solid #000;
    transition:all 0.2s ease-in-out;
}
`
const MobileIcon = styled.div`
display: none;

@media screen and (max-width:768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform : translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`
const Bars = styled(FaBars)`
display: none;
color: white;

@media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
const NavMenu = styled.div`
display: flex;
align-items: center;


@media screen and (max-width:768px){
    display: none;
}
`
const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none;
}
`