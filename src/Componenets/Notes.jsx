import React from 'react';
import { useState } from 'react';
import './Notes.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';

 
function Notes({element,word,setWord}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 console.log(element);
 const removeHandler=(id)=>{
     const newWord=word.filter((elm)=>{
      if(elm.id!==id){
        return elm;
      }
     })
     setWord(newWord)
 }

   const editHandler=(id)=>{
       word.filter((elem)=>{
        if(elem.id===id){
          document.getElementById("edittitle").value=elem.title;
          document.getElementById("editNote").value=elem.Note;

        }
       })
   }
  return (
    <div>
    <Card id='cards'>
      <Card.Body>
        <Card.Title>{element.title}</Card.Title>
        <Card.Text>
          {element.Note}
        </Card.Text>
        <Button id='edited' variant="primary" onClick={()=>{handleShow();
        editHandler(element.id)}}><i class="bi bi-pencil-square"></i>
        
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Form>
      <Form.Group className="mb-3"   controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control id='edittitle'  type="text" />
      </Form.Group>
      <Form.Group className="mb-3"   controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control id='editNote' as='textarea'  rows={3} />
      </Form.Group>
     </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Edit Notes
          </Button> 
        </Modal.Footer>
      </Modal>
       <button className='btn btn-danger mx-2' id='Delete' onClick={()=>{
           removeHandler(element.id)      
       }}><i class="bi bi-trash-fill"></i></button>

      </Card.Body>
      

    </Card>
    </div>
  );
}

export default Notes;