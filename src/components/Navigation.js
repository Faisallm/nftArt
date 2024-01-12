import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button';


const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body};
` 

const Navbar = styled.nav`
// default flex direction is horizontal
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
// gotten from ThemeProvider
height: ${props => props.theme.navHeight};
// center horizontally
margin: 0 auto;
`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
`

const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after{
    content: ' ';
    // creates a block-level element
    // like a div
    // that occupies a single line
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
}

&:hover::after {
    width: 100%;
}
`


const Navigation = () => {
  return (
    <Section>
        <Navbar>
            <Logo/>
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Roadmap</MenuItem>
                <MenuItem>Showcase</MenuItem>
                <MenuItem>Team</MenuItem>
                <MenuItem>Faq</MenuItem>
            </Menu>
            
            <Button text="Connect Wallet" 
            link="http://www.kakaki.cc"/>
            
        </Navbar>
    </Section>
  )
}


export default Navigation;