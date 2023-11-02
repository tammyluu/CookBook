import classes from './ModalId.module.css'

export const ModalComponent = (props)=>{

    const closeModalHandler =(e)=>{
        if(e.target === e.currentTarget){
        props.closeModal()
        }
    }

    return(
        <div className={classes.modal} onClick={closeModalHandler}>
        <div className={classes.modalContent}>
            {props.children}
        </div>
        </div>
    )
    }