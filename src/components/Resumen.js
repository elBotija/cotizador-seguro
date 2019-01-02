import React, {Component} from 'react'
import {primeraMayuscula} from '../helper'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

class Resumen extends Component{

    mostrarResumen = () => {
        const { marca, year, plan } = this.props.datos
        const resultado = this.props.resultado

        if(!marca || !year || !plan) return null

        return(
            <div className="row">
                <div className="col s12 m6 offset-m3">
                    <div className="card red lighten-1">
                        <div className="card-content white-text">
                            <span className="card-title">Resumen de Cotizacion</span>
                            <p><b>Marca:</b> { primeraMayuscula(marca) }</p>
                            <p><b>Plan:</b> { primeraMayuscula(plan) }</p>
                            <p><b>Año:</b> { year }</p>
                            <p>
                                <b>Valor Poliza:</b> $
                                <TransitionGroup component='span' className='resultado'>
                                    <CSSTransition
                                        classNames='resultado'
                                        key={resultado}
                                        timeout={{enter: 500, exit:500}}>
                                        <span>{resultado}</span>
                                    </CSSTransition>
                                </TransitionGroup>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.mostrarResumen()}
            </div>
        )
    }
}
export default Resumen
