import React from 'react'

const Consigna = (props) => {
    return(
        <div className='consigna'>
            <h3 className='obj-title'>Calculo de cuota</h3>
            <ul>
                <li>Base del seguro $2000.</li>
                <li>Por cada año de antiguedad se le resta un 3% a la base.</li>
                <li>Dependiendo la prosedencia del auto se le suma a la base los respectivos porcentajes  Asiatico 5%, Americano 15% y Europeo 30%</li>
                <li>De acuerdo al plan elejido se suman los respectivos porcentajes a la base "Plan base" +20% y "Plan completo" +50%</li>
            </ul>
        </div>
    )
}

export default Consigna
