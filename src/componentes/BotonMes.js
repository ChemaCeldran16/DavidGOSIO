import React, { Component } from "react"
import Form from 'react-bootstrap/Form'

class BotonMes extends Component {
    render(){
        return(
            <Form className="form-group">
                <select className="form-select" id={this.props.id}>
                    <option>Enero</option>
                    <option>Febrero</option>
                    <option>Marzo</option>
                    <option>Abril</option>
                    <option>Mayo</option>
                    <option>Junio</option>
                    <option>Julio</option>
                    <option>Agosto</option>
                    <option>Septiembre</option>
                    <option>Octubre</option>
                    <option>Noviembre</option>
                    <option>Diciembre</option>
                </select>
            </Form>
        )
    }

}

export default BotonMes;