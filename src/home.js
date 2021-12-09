import React, { Component } from "react";
import ModalAddPerson from "./ModalAddPerson.js";
import ModalSuccess from "./ModalSuccess";
import ModalAddAddress from "./ModalAddAddress";

export default class Home extends Component {
    state = {
        activeModalAddPerson: false
    }

    componentDidMount(){
        this.getPeopleList();
    }

    getPeopleList = async () => {
        let response;
        try {
            response = await fetch("http://localhost:3001/people");
        } catch(error){ console.log('error', error); }

        console.log('peopleList', response);
    }

    handleOpenModal = () => {
        this.setState({activeModalAddPerson: true});
    }

    handleClose = () => {
        this.setState({activeModalAddPerson: false});
    }

    render() {
        return (
            <div>
                <div style={{width: "100%", textAlign: "center"}}>
                  <p>Exercício Props / State</p>
                </div>

                <div style={{padding: "20px"}}>
                  <table>
                    <tr>
                      <th>Empresa</th>
                      <th>Contato</th> 
                      <th>País</th>
                    </tr>
                    <tr>
                      <td>Mobicity</td>
                      <td>Arthur</td> 
                      <td>Brasil</td>
                    </tr>
                  </table>
                  <button style={{height: "30px", width: "100px", float: "right", marginTop: "10px"}} onClick={this.handleOpenModal}>Inserir novo</button>
                </div>

                {this.state.activeModalAddPerson &&
                    <ModalAddPerson 
                        onClose={this.handleClose}
                    />
                }

                {this.state.successObj &&
                    <ModalSuccess 

                    />
                }

                {this.state.activeModalAddress &&
                    <ModalAddAddress 

                    />
                }
            </div>
        );
    }
}