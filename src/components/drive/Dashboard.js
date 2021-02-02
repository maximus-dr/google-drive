import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderBtn from './AddFolderBtn'
import TopNavbar from './TopNavbar'

export default function Dashboard() {
  return (
    <>
      <TopNavbar />
      <Container fluid>
        <AddFolderBtn />
      </Container>
    </>  
  )
}
