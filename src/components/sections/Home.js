import React from 'react';
import styled from 'styled-components';
import TypeWriterText from '../TypeWriterText';

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
// positioned relative to its original position
position: relative;
background-color: ${props => props.theme.text};
`

const Container = styled.div`
width: 75%;
min-height: 80vh;
// auto center
margin: 0 auto;
background-color: lightblue;

display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// border: 1px solid black;
`

const Home = () => {
  return (

    <Section>

      <Container>
        <Box><TypeWriterText/></Box>
        <Box><h1>video</h1></Box>
      </Container>

    </Section>

  )
}

export default Home