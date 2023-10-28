import React from "react";
import axios from "axios"
import Swal from "sweetalert2";
import "./App.css"

class App extends React.Component{

    state= {advice: ""}

    componentDidMount() {
        this.fetchAdvice()
    }

    fetchAdvice = () => {

        axios.get('https://api.adviceslip.com/adviceeee')
            .then((response)=>{
                const {advice} = response.data.slip
                this.setState({advice:advice})
            })
            .catch((error)=>{
                Swal.fire({
                    title: "ERROR",
                    text: "There is a problem please try again later",
                    icon: "error",
                    confirmButtonText: "Ok"
                })
            })

    }

    render(){
        const {advice} = this.state
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give me advice</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App