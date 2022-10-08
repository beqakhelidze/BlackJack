import ReactDom from 'react-dom';
import React from 'react';

const MODAL_STYLE = {
    position: 'fixed',
    width: '60vw',
    left: '20vw',
    backgroundColor: "#FFF",
    zIndex: 1000,
    padding: '15px 10px 40px 10px',
    marginTop: '10vh',
    borderRadius: '3px'
}

const ICON_STYLE = {
    position: 'relative',
    float: 'right',
    cursor: 'pointer',
    color: "white"
}

const ICON_DIV_STYLE = {
    height: '40px',
    paddingRight: '8px',
}


interface Props {
    open: boolean,
    children: React.ReactNode | JSX.Element,
}

const Modal: React.FC<Props> = ({ open, children, }) => {

    if (!open) return null;

    return ReactDom.createPortal(
        <div className='modalOverlay'>
            {children}
        </div>,
        document.getElementById("portal")
    );

}

export default Modal;