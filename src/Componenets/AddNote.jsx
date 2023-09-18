import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddNote.css'
import Form from 'react-bootstrap/Form';

function AddNote({title,settitle,Note,setNote,word,setWord}) {
    const inputHandler=(e)=>{
        if(e.target.id==="title"){
        settitle(e.target.value)
        }else{
        setNote(e.target.value)
        }
    
    }
    const addNotesHandler=(e)=>{
       e.preventDefault()
        if(title!=="" && Note!==""){
          setWord((word)=>{
            return(
              [...word,{
                title:title,
                Note:Note,
                id:new Date().getTime()
              }]
            )
          }
          )
        }
       settitle("");
       setNote("");
    }
    
  return (
    <>
     <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-10">
            <Form id='Headnot'>
      <Form.Group  controlId="exampleForm.ControlInput1">
        <Form.Label id='AddNote'>Add a Note</Form.Label>
        <Form.Control type="text" id='title' placeholder='Title' value={title} 
        onChange={inputHandler}></Form.Control>
      </Form.Group>
      <Form.Group  className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" id='notes' placeholder='Take a note...' rows={3}  value={Note}
         onChange={inputHandler}></Form.Control>
      </Form.Group>
      <button type='submit' className='btn btn-primary' id='addnote' onClick={addNotesHandler}>Add</button>
    </Form>
            </div>
        </div>
     </div>
    </>
  );
}

export default AddNote;

