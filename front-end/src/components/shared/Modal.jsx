import classes from "./Modal.module.css"

const Modal = (props) => {

    const handleBackgroundClick = () => {
        props.onClose()
    }

    return ( 
        <div className={classes.modal}>
            <div className={classes.modalContent}>
                <button className={classes.close} onClick={handleBackgroundClick}></button>
                {props.children}
            </div>
        </div>
     );
}
 
export default Modal;