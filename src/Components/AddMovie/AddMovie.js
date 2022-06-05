
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddMovie = ({GetMovie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nMovie, setNMovie] = useState({
    title: "",
    description:
      "",
    posterURL:
      "",
    rating: 0,
  })
  const handleChange = (e) => {
    setNMovie({...nMovie,[e.target.name]:e.target.value})
  }
  const handleClick = (e)=> {
    e.preventDefault();
    GetMovie(nMovie)
  setNMovie({title: "",
  description:
    "",
  posterURL:
    "",
  rating: 0,})
  handleClose()}
  return (
    <div>
<>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body><input onChange={handleChange}  type="text" name="title" placeholder='title' />
        <input  onChange={handleChange} type="text" name="description" placeholder='description'/>
        <input onChange={handleChange} type="text" name="posterURL" placeholder='posterURL'/>
        <input onChange={handleChange} type="text" name="rating" placeholder='rating'/>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClick} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      
    </div>
  )
}

export default AddMovie