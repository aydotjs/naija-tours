import React from 'react';
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'gatsby';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}> 
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="/trips" onClick={toggle}>Trips</SidebarLink>
                    <SidebarLink to="/careers">Career</SidebarLink>
                    <SidebarLink to="/contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='trips'>Sign up to book a flight</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.aside`
position:fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
color: white;
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.2rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
const SidebarWrapper = styled.div`
color: white;
`
const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;
text-decoration: none;

&:hover{
    color: #01bf71;
    transition:all 0.2s ease-in-out;
}
`;
const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
 
@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 90px);
}
`

const SideBtnWrap= styled.div`
display: flex;
justify-content: center;
`
const SidebarRoute = styled(Link)`
border-radius: 50px;
background: #F26A2E;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration: none;

&:hover{
transition: all 0.2s ease-in-out;
color: #010606;
background: white;

}
`
