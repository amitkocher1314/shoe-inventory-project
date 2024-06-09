import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";

const BackDrop = (props)=>{       
                         //this is for backdrop i.e behind modal and above display form page it show black screen
    return(
        <div onClick={props.onClicked} className={style.backdrop}></div>
    )
}

const ModalOverlay = (props)=>{                        //this is for what we create our box which contain in our project all cart items
    return(
        <div className={style.modal}> {props.children}</div>
    )
}

const modalLoc = document.getElementById("overlays");

const Modal = (props)=>{
    return(
    <Fragment>    
   { ReactDOM.createPortal(<BackDrop onClicked={props.onClick} />,modalLoc)}
   { ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,modalLoc)
}    </Fragment>
)
}

export default Modal
