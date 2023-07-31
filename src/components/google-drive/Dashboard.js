import React from 'react'
import NavBar from './NavBar'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'

export default function Dashboard() {
  return (
    <>
        <NavBar/>
        <Container fluid>
            <AddFolderButton/>
        </Container>
    </>
  )
}
