import React, { Component } from "react";

export default class ModalAddAddress extends Component {

    render() {
      let { onClose } = this.props;

      return (
        <div
          onClick={onClose}
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            top: "0",
            left: "0"
          }}
        >
          <div style={{width: "300px", height: "auto", padding: "20px", backgroundColor: "#fff", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div style={{float: "left", width: "100%", height: "auto"}}>
              <p>Endereço: </p>
              <input />
              <p>Número: </p>
              <input />
              <p>Bairro: </p>
              <input />
            </div>
            <button style={{height: "30px", width: "100px", float: "right", marginTop: "10px"}}>Adicionar</button>
          </div>
        </div>
      );
    }
}