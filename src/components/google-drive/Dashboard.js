import React from 'react'
import NavBar from './NavBar'
import { Container } from 'react-bootstrap'
import { useFolder } from '../../hooks/useFolder'
import AddFolderButton from './AddFolderButton'
import Folder from './Folder'
import { useParams, useLocation } from 'react-router-dom'
import FolderBreadcrumbs from './FolderBreadcrumbs'

export default function Dashboard() {

  const { folderId } = useParams()
  const state = {} = useLocation()
  const { folder, childFolders } = useFolder(folderId, state.folder)

  return (
    <>
        <NavBar/>
        <Container fluid>
          <div className= "d-flex align-items-center">
            <FolderBreadcrumbs currentFolder={folder} />
          </div>
          <AddFolderButton currentFolder={folder} />
          {childFolders.length > 0 && (
            <div className="d-flex flex-wrap">
              {childFolders.map(childFolder => (
                <div 
                  key={childFolder.id} 
                  style={{ maxWidth: '250px' }} 
                  className='p-2'
                >
                  <Folder folder = {childFolder}/>
                </div>
              ))}
            </div>
          )}
        </Container>
    </>
  )
  
}
