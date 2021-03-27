import logo from './logo.svg';
import './App.css';
//import { Component } from 'react';
import Fruta from './components/Frutas'
import {AppBar, Tabs, Tab} from '@material-ui/core/'
//import Clicks from './components/Clicks' //el hecho de solo nombrar la carpeta Clicks, lo que hace , es buscar el index dentro de la carpeta por defecto
import Clicks from './components/Clicks'
import ButtonModal from './components/Buttons/ButonnModal'
import Grid from '@material-ui/core/Grid'

function App2(){



    return( //Siempre se debe de retornar un JSX aquí adentro
        <div>
            <Grid>
              <AppBar  >
                <Tabs>
                  <Tab label="Mona" position="fixed"/>
                  <Tab label="Ahorros" position="fixed"/>
                  <Tab label="Gastos" position="fixed"/>
                </Tabs>
              </AppBar>
            </Grid>
         
         
          {/* <h2>{prueba(this.nombre,this.apellido)}</h2>  {/*tambien podría usarse el this.nombre en ese caso  */}
          {/* <Saludos name="Victor" apellido="Melhouza"/>Tambien se pueden hacer con PROPS */} 
         
         
          <Grid container spacing={3} direction='column'>
            
            <Grid md={12} align= 'center' >
              <Fruta />
            </Grid>
            
            <Grid md={12} align='center'>
              <Fruta name = "PROBANDO CON APP2" price='5'/>
            </Grid>
            
            <Grid md={12} align='center'>
              <Clicks/>
            </Grid> 
            
            <Grid item md={12} align='center'>
              <ButtonModal />
            </Grid>
          </Grid>
        </div>
      )


}



export default App2;
