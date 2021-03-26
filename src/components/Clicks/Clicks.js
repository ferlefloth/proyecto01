import React, {Component} from 'react';

class Clicks extends Component {

    state = { 
        video:{
            titulo: 'Sexto video en react',
            clicks: 0 ,
        },
        
        clicks: 0}

    add =()=>{
        //setState
        //state -> estado previo del elemento

        this.setState((state)=>({
            video:{
                ...state.video, //OPEREADOR SPREAD ES6: HACE UNA COPIA DEL ELEMENTO y las propiedades que se repiten . se queda con el últi elemento que aparece. es SINCRONICO
                titulo: state.video.titulo, 
                clicks: state.video.clicks +1 // lo que se hace acá es: ingresamos al objeto state y lo vamos modificando con el setState que tenemos acá
            }

        }));
    }


    render(){
        return(
            
            <>
                <h4>{this.state.video.titulo}</h4>
                <button onClick={this.add}>Clicks : {this.state.video.clicks}</button> {/* No hace falta poner el binding porque las arrow functions heredan del padre*/}
            
            </>

        )

    }
}

export default Clicks;