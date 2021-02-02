import React from 'react'
import { Container } from 'react-bootstrap'
import AddFolderBtn from './AddFolderBtn'
import TopNavbar from './TopNavbar'
import { useFolder } from './../../hooks/useFolder';
import Folder from './Folder';

export default function Dashboard() {

  const { folder, childFolders } = useFolder('nJKhSIU1XKg0nmSt3wRl');

  return (
    <>
      <TopNavbar />
      <Container fluid>
        <AddFolderBtn currentFolder={folder} />
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(folder => {
              return (
                <div key={folder.id} style={{ maxWidth: '250px' }} className="p-2">
                  <Folder folder={folder} />
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </>  
  )
}
