import React, { Component } from 'react';

import Header from './components/Header'
import InteractionForm from './components/InteractionForm'
import Resumen from './components/Resumen'
import Consigna from './components/Consigna'

import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from './helper'


import './css/App.css';

class App extends Component {

    state = {
        resultado: '',
        datos: {}
    }

    cotizarSeguro = (datos) => {
        console.log(datos)
        const { marca, plan, year } = datos

        //base de 2000
        let resultado = 2000

        //obtener diferencia de años
        const diferencia = obtenerDiferenciaAnio(year)
        console.log('la diferencia es de ' + diferencia)

        //cada año resta el 3%
        resultado -= ((diferencia * 3) * resultado ) / 100
        console.log(resultado)

        //americano 15% asiatico 5% europeo 30%
        resultado = calcularMarca(marca) * resultado
        console.log(resultado)

        // plan base +20% plan completo +50%
        let incrementoPlan = obtenerPlan(plan)

        //incrementar plan

        resultado = parseFloat(incrementoPlan * resultado).toFixed(2)
        console.log(`resultado plan ${resultado}`)

        const datosAuto = {
            marca: marca,
            year: year,
            plan: plan
        }

        this.setState({
            resultado: resultado,
            datos: datosAuto
        })
    }

  render() {
    return (
        <div className="App">
            <Header title='Cotizar Seguro' />
            <InteractionForm
                cotizarSeguro={this.cotizarSeguro}
            />
            <Resumen
                datos={this.state.datos}
                resultado={this.state.resultado}
            />
            <Consigna/>
        </div>
    );
  }
}

export default App;
