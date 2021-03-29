import React, {Component}from 'react'
import Button from '@material-ui/core/Button'
import styles from './ButonnModal.module.css'

function ButtonModal(){ //acá inicia la función

    //acá irían todas las states y effects

    return(

        <div  >
    
            <Button className={styles.boton}>
                PushMe!
            </Button>
        </div>
    )

}



export default ButtonModal;