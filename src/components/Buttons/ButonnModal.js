import React, {Component, useState}from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'



  function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({ //Se usa el make styles con esta función para poder determinar con código JS y CSS que es lo que podemos hacer para darle color  
    paper: { 
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5], //¿¿¿¿¿No se porque recibe un Theme??????
      padding: theme.spacing(2, 4, 3),
    },
  }));

function ButtonModal(){  //debe de recibir props

    const classes = useStyles();// quizás tenga que pasarle con argumento el PROPS, pero al parecer, no hace falta

    const [modalStyle] = useState(getModalStyle) // Se renderiza lo que esta en el getModalStyle
    const [open, setOpen] =useState(false);

    const handleOpen = ()=> {
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    const body = (
        <div style={modalStyle}  className={classes.paper}> {/*Se pone el Style (function de ModalStyle con el UseState) y se pone el MakeStyle en donde se utiliza el MakeStyles de materiailUI . En este caso podremos reenderizar lo que está dentro del modal*/}
          <h2 id="simple-modal-title">Texto en modal</h2>
          <p id="simple-modal-description">
            Esta es unae prueba para hacer un modal
          </p>
          
        </div>
      );

    return(

        <div>
            
            <Button className = {classes.root} onClick={handleOpen}>
                
                PushMe! Mi Reyshe
            </Button>
            <Modal open={open}
                onClose= {handleClose}
            >{/*No se porque tendría que pone el {body}*/}
                {body} 
            </Modal>
            
        </div>
    )

}

export default ButtonModal;