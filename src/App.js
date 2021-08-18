import React, { Component } from "react";
import "./App.css";
import LeftTopComponent from "./components/LeftTopComponent";
import LeftDownComponent from "./components/LeftDownComponent";
import RightTopComponent from "./components/RightTopComponent";
import RightDownComponent from "./components/RightDownComponent";
import {Button} from "@material-ui/core"
import {reset} from './actions'
import { connect } from "react-redux";
class App extends Component {
    render() {
        const {reset}=this.props
        return (<>
            <div
                style={{
                   display:"flex",
                   flexDirection:"column",
                   alignItems:"center",
                    background: "#435368",
                    width: "100vw",
                    height: "100vh"
                }}
            >
                <div style={{
                    display: "flex",
              
                    width: "100vw",
                    
                }}> <div style={{ width: "50%" }}>
                    <LeftTopComponent />
                    <LeftDownComponent />
                </div>
                <div style={{ width: "50%" }}>
                    <RightTopComponent />
                    <RightDownComponent />
                </div></div>
                

<Button variant="contained" onClick={reset}>Reset</Button>
               
               
            </div>
            
</>
        );
    }
}

export default connect(null, {reset})( App);
