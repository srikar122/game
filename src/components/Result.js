import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/Modal.css'
import { useNavigate } from 'react-router-dom'
function Result(props) {
//   const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(true);
  let navigator = useNavigate()
  let sum = parseInt(props.game)+1
  let ans = `/game${sum}`
  // const handleClose = () =>{
  //   if(props.game == "1" || props.game == "3")
  //   {
  //     props.close()
  //   }
  //   setLgShow(false)
  // }
  return (
    <div>
      
      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
      
      <Modal 
        className='my-modal'
        size="lg"
        show={lgShow}
        onHide={() => {
          // props.close()
          setLgShow(false)
          if(props.res == "true"){
            if(props.game == 3){
              navigator("/about")
            }
            else{
              navigator(ans)
            }
          }
          else{
            navigator("/about")
          }

        }
        }
        aria-labelledby="example-modal-sizes-title-lg"
        style={{"background-color":"#3333"}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {props.stat}
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
            <div className='modal-content-inner'>
                <div className="modal-outer-img">
                    <img className=" modal-img" src={props.img} alt="" />   
                </div>
                <div className="modal-outer-info">
                 { props.content.map((e)=>(
                    <p className="modal-info">{e}</p>
                  ))}
                </div>
            </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default Result