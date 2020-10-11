import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { LoadingSplashScreen } from './Components'
import { Expertise, FeaturedProjects } from './Pages'
import Cover from './Pages/Cover'
import Footer from './Pages/Footer'
import './styles.css'

const theme = {
  goldAccent: '#deb150',
  whiteText: 'white',
  blackText: 'black',
  dark: 'black',
  brightBg: '#e91e63',
  veryLightGray: '#e8e8e8',
}

const App = () => (
  <GlobalStyles>
    <ThemeProvider theme={theme}>
      <Wrapper id="containerElement">
        {/* <LoadingSplashScreen /> */}
        <Cover />
        <Expertise />
        <FeaturedProjects />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  </GlobalStyles>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 100%;
  width: 100%;
  overflow-x: hidden !important;
  margin: 0;
  min-height: 100vh;
  background: #0a192f;
`

const GlobalStyles = styled.div`
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-color: #0a192f;
  max-width: 100% !important;
  width: 100% !important;
  margin: 0;
  padding: 0;
`

export default App
