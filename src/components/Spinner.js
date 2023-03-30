import React, { Component } from "react";
import '../component_css/Spinner.css'
export default class Spinner extends Component{

    render(){
        return(
            <div className="spinner">
                <img className="loading_gif" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading" />
            </div>
        );
    }
}