import React from 'react'
import {Modal,ModalHeader,ModalBody,ModalFooter,Button} from 'reactstrap';

const myModal = ({modal,setModal,Text}) => {

    const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>A Kitalálandó szó {Text.word} volt.</ModalHeader>
        <ModalBody>
          {Text.msg}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
  )
}
export default myModal;
