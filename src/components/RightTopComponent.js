import React, { Component } from "react";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";
import { connect } from "react-redux";
import { righttop } from "../actions";
class RightTopComponent extends Component {


    render() {
        const {b,righttop}=this.props
        const counter=(choice)=>  {
            switch(choice)
            {
                case 1:
                    righttop("button a")
                    break;
                case 2: 
                righttop("button b")
                    break;
                case 3:
                   righttop("button c")
                    break;
                default:
                    righttop("right top")
        
            }
        }
        return (
            <div class="container">
                <div
                    class="col"
                    style={{
                        background: "#5daae0",
                        borderRadius: "5px",
                        margin: "5% 0"
                    }}
                >
                    <div class="row" style={{ padding: "5% 0 0 40%" }}>
                        <MyScreen key={1} tech={b} />
                    </div>
                    <div class="row" style={{ padding: "5% 0 10% 30%" }}>
                        <ButtonGroup
                            key={2}
                            side="rightTop"
                            technologies={["Button A", "Button B", "Button C"]}
                            counter={counter}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
const mapS = store => {
    console.log(store)
    return {
        b:store.b
    }
}
export default connect(mapS,{righttop})(RightTopComponent);
