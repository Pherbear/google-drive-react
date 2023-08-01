import React from 'react'
import NavBar from './NavBar'
import { Container } from 'react-bootstrap'
import { useFolder } from '../../hooks/useFolder'
import AddFolderButton from './AddFolderButton'

export default function Dashboard() {
  const { folder } = useFolder()
  console.log(folder)

  return (
    <>
        <NavBar/>
        <Container fluid>
            <AddFolderButton currentFolder={folder} />
        </Container>
    </>
  )
}
