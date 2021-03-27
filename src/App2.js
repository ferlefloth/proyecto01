import logo from './logo.svg';
import './App.css';
//import { Component } from 'react';
import Fruta from './components/Frutas'
import {AppBar, Tabs, Tab} from '@material-ui/core/'
//import Clicks from './components/Clicks' //el hecho de solo nombrar la carpeta Clicks, lo que hace , es buscar el index dentro de la carpeta por defecto
import Clicks from './components/Clicks'
//import ButtonModal from './components/Buttons/ButtonModal'


function App2(){



    return( //Siempre se debe de retornar un JSX aquí adentro
        <div>
          <AppBar  >
            <Tabs>
              <Tab label="Mona" position="fixed"/>
              <Tab label="Ahorros" position="fixed"/>
              <Tab label="Gastos" position="fixed"/>
            </Tabs>
          </AppBar>
          
          {/* <h2>{prueba(this.nombre,this.apellido)}</h2>  {/*tambien podría usarse el this.nombre en ese caso  */}
          {/* <Saludos name="Victor" apellido="Melhouza"/>Tambien se pueden hacer con PROPS */} 

          <Fruta />
          <Fruta name = "PROBANDO CON APP2" price='5'/>

          <Clicks/>
         
          
          

        </div>
      )


}



export default App2;
