import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
   display:flex;
   flex-direction:column;
   
`;
const LogoSection=styled.div``

const Home = () => {
  return (
    <Container>
        {/* <h1>Home</h1> */}
        <LogoSection>
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt='google-logo'/>
        </LogoSection>
    </Container>
  )
}

export default Home