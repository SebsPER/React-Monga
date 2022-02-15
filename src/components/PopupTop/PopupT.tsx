import { Button } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import React from 'react'
import './PopupT.css'

function PopupT(props:any) {
  return (props.trigger) ? (
    <div className="popupT">
        <div className="popupT-inner">
            <Button className="close-btnT" onClick={()=> props.setTrigger(false)} 
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

export default PopupT