import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/Modal.css'
function Game3(props) {
//   const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(true);
  const handleClose = () =>{
    if(props.game == "1" || props.game == "3")
    {
      props.close()
    }
    setLgShow(false)
  }

  return (
    <div>
      
      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
      
      <Modal 
        className='my-modal'
        size="lg"
        show={lgShow}
        onHide={() => {
          if(props.game == "1" || props.game == "3")
          {
            props.close()
          }
          setLgShow(false)
        }
        }
        aria-labelledby="example-modal-sizes-title-lg"
        style={{"background-color":"#3333"}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {props.head}
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
            <div className='modal-content-inner'>
                <div className="modal-outer-img">
                    <img className=" modal-img" src={props.img} alt="" />   
                </div>
                <div className="modal-outer-info">
                {/* <p className="modal-info">{props.content}</p> */}
                {
                  props.content.map((e)=>(<p className='p-con'>{e}</p>))
                }
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Game3