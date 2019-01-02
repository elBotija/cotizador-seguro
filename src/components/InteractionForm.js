import React, {Component} from 'react'

class InteractionForm extends Component {

    marcaRef = React.createRef()
    yearRef = React.createRef()
    planBaseRef = React.createRef()
    planFullRef = React.createRef()

    cotizarSeguro = (e) => {
        e.preventDefault()

        const plan = this.planBaseRef.current.checked ? 'basico' : 'completo'

        const infoAuto = {
            marca: this.marcaRef.current.value,
            year: this.yearRef.current.value,
            plan: plan
        }

        this.props.cotizarSeguro(infoAuto)

        // reset
        // e.currentTarget.reset()

    }

    render(){
        return(
            <form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
               <div className="campo">
                    <label className="mb-3 d-block">Marca</label>
                    <select name="marca" ref={this.marcaRef} className='browser-default mb-4'>
                        <option defaultValue="" disabled="">Seleccione una Marca</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
               </div>
               <div className="campo">
                   <label className="mb-3 d-block">Año</label>
                   <select name="year" ref={this.yearRef} className='browser-default mb-4'>
                        <option defaultValue="" disabled="">Seleccione una Año</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                   </select>
               </div>
               <div className="campo">
                   <label>Plan:</label>
                   <div className='clear-line'>
                       <p>
                           <label>
                               <input name="group1" ref={this.planBaseRef} type="radio" />
                               <span>Basico</span>
                           </label>
                       </p>
                       <p>
                           <label>
                               <input name="group1" ref={this.planFullRef} type="radio" />
                               <span>Completo</span>
                           </label>
                       </p>
                   </div>
               </div>
               <button type="submit" className="waves-effect waves-light btn orange">Cotizar</button>
           </form>
        )
    }
}

export default InteractionForm
