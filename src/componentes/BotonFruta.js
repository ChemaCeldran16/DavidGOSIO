import React, { Component } from "react"
import Form from 'react-bootstrap/Form'



class BotonFruta extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Form className="form-group">
                <select className="form-select" id={this.props.id}>
                    <option>Almendro</option>
                    <option>Vid</option>
                    <option>Olivo</option>
                    <option>Albaricoquero</option>
                </select>
            </Form>
        )
    }

}

export default BotonFruta;