import React, {Component}from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ //Se usa el make styles con esta función para poder determinar con código JS y CSS que es lo que podemos hacer para darle color 
    root: {
      backgroundColor: 'red',
    },
  });


function ButtonModal(props){  //debe de recibir props

    const classes = useStyles();// quizás tenga que pasarle con argumento el PROPS, pero al parecer, no hace falta
   
    return(

        <div>
            
            <Button className = {classes.root}>
                
                PushMe! Mi Reyshe
            </Button>
        </div>
    )

}

export default ButtonModal;