import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: red;
`

function Button ({ children, onClick }) {
  return (
    <Container className='myButton' onClick={onClick}>
      {children}
    </Container>
  )
}

export default Button

