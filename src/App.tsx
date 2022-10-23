import React from 'react'
import { ThemeProvider } from 'styled-components'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import content from './content'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
