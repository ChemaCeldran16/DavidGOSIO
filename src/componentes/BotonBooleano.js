import React, { Component } from "react"
import Form from 'react-bootstrap/Form'

class BotonBooleano extends Component {
    render(){
        return(
            <div className="col">
            <Form className="form-group">
                <select className="form-select" id={this.props.id} >
                    <option>Si</option>
                    <option>No</option>
                </select>
            </Form>
            </div>
        )
    }

}

export default BotonBooleano;