import React, { Component } from "react";

export default class ModalSuccess extends Component {



    render() {
      let { onClose, successMessage } = this.props;

      let top = '50%';
      let left = '50%';
      let transform = "translate(-50%,-50%)";

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
          <div style={{width: "300px", height: "auto", padding: "20px", backgroundColor: "#fff", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div style={{float: "left", width: "100%", height: "auto"}}>
              <p>{successMessage}</p>
            </div>
            <button style={{height: "30px", width: "100px", float: "right", marginTop: "10px"}}>Ok</button>
          </div>
        </div>
      );
    }
}