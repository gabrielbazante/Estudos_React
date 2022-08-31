import React from "react";

export default class Contador extends React.Component {
    state = {
        numero: this.props.numeroInicial
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + 1,
        })
    }
    
    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
}