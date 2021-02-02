import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderBtn from './AddFolderBtn'
import TopNavbar from './TopNavbar'
import { useFolder } from './../../hooks/useFolder';

export default function Dashboard() {

  const { folder } = useFolder('nJKhSIU1XKg0nmSt3wRl');
  console.log(folder);

  return (
    <>
      <TopNavbar />
      <Container fluid>
        <AddFolderBtn currentFolder={folder} />
      </Container>
    </>  
  )
}
