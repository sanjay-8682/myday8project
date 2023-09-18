import React, { useState } from 'react';
import Navbar from './Componenets/Navbar';
import AddNote from './Componenets/AddNote';
import Notes from './Componenets/Notes';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './App.css'





const App = () => {
    const [title, settitle] = useState("")
    const [Note, setNote] = useState("")
    const [word, setWord] = useState(getNotesFrom)
    localStorage.setItem("word",JSON.stringify(word));

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
    return (
        <>

            <Navbar />
            <AddNote title={title} settitle={settitle} Note={Note} setNote={setNote} word={word} setWord={setWord} />
            <div className="contaner">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h4 className='mb-3' id='youN'><i class="bi bi-file-earmark-text"></i>  My Notes</h4>
                        {word.length === 0?< div >
                                                    <Card id='cart'>
                                                        
                                                        <Card.Body>
                                                            <Card.Title>Message:</Card.Title>
                                                            <Card.Text>
                                                                No Notes For Available
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                      </div>:word.map((element)=>{
                                                        return(
                                                            <Notes element={element} key={element.id} word={word} setWord={setWord}/>
                                                        )
                                                      }
                                                    
                                                      )
                        
                         }



                </div>
            </div>
        </div >
        </>
    );
    function getNotesFrom() {
        const note=JSON.parse(localStorage.getItem("word"));
        if(note){
            return note
        }else{
            return[];
        }
    }
};

export default App;