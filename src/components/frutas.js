import React, {Component} from 'react';


/*los ESTADOS: Es un objeto que representa el estado actual de un componente */ 
class Fruta extends Component {

    constructor(){ // Es un patron creacional, solo se ejecuta una vez cuando se INSTANCIA en el DOM
      super();
    }
      state = {cantidad : 0 }
    
      sumar = ()=>this.setState({cantidad : this.state.cantidad +1 })
    
      restar =() =>this.setState({cantidad : this.state.cantidad -1 })
    
      reset = ()=>{this.setState({cantidad : this.state.cantidad ===0})} // Con el arrow function podemos jugar y hacer los bindings acá para meterlos dentro del JSX de abajo
    
    
    
    render(){
    return(
    
        <div>
    
          
          <h3>{this.props.name}</h3>
          <h4>Cantidad : {this.state.cantidad}</h4>     {/*//No es buena práctica tener eventos con flechas. el setState vuelve a renderizar SOLO lo que se modificó en el elemento dentro del DOM */}
            <button onClick={this.sumar}>  + </button>   {/*El this.agregar no podría referirse al botón , hay que ponerle el  .bind para que el this.agregar funcione. se fuerza a que el this. agregar lo busque dentro de la clase y no dentro de el método agregar()*/}
            <button onClick={this.restar}>  -  </button> 
          
    
            <button onClick={this.reset.bind(this)}>  Resetff  </button> {/*"""""""FORMA 1 DE LOS BINDS""""""": De esta forma es un poco mas Sucio , pero está bien. Lo ideal es hacerlo dentro del constructor como se muestra en los de arriba*/ }
            
            
          <p>${this.props.price}</p>
        </div>
    );
    }
    
}

export default Fruta;