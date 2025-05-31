import { useState } from 'react'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'

function App() {
  const [isOpen,setIsOpen] = useState(false)
  const [modalMode,setModalMode] = useState('add')

  const handleOpen = (mode) => {
    setIsOpen(true)
    setModalMode(mode)
    console.log(isOpen)
    console.log(mode)
  }

    const handleSubmit = () =>{
    if(modalMode === 'add'){
      console.log('Modal Mode Add');
    } else {
      console.log('Modal Mode Edit');
    }
  }
  return (
    <>
      <Navbar onOpen={() => handleOpen('add')}/>
      <TableList isEdit={() => handleOpen('edit')} isDelete={() => handleOpen('delete')} />
      <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} mode={modalMode} />
    </>
  )
}

export default App
 