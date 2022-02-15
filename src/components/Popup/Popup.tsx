import { Button } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import React from 'react'
import './Popup.css'

function Popup(props:any) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <Button className="close-btn" onClick={()=> props.setTrigger(false)} 
            startIcon = {
                <CloseOutlinedIcon/>
            }
            style={{ 'width': "125px",
                    'padding': 0 }}
            variant="outlined"
            > Regresar
            </Button>
            
            { props.children }
        </div>
    </div>
  ) : <p></p>;
}

export default Popup