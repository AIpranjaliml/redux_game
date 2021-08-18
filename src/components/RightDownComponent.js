import React, { Component } from "react";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";
import { rightbottom } from "../actions";
import { connect } from "react-redux";

class RightDownComponent extends Component {

    render() {
        const {d,rightbottom}=this.props
        const counter=(choice)=>{
            switch(choice)
            {
                case 1:
                    rightbottom("button a")
                    break;
                case 2: 
                rightbottom("button b")
                    break;
                case 3:
                    rightbottom("button c")
                    break;
                default:
                    rightbottom("Right Bottom")
        
            }
        }
        return (
            <div class="container">
                <div
                    class="col"
                    style={{
                        background: "#fc7500",
                        borderRadius: "5px",
                        margin: "5% 0"
                    }}
                >
                    <div class="row" style={{ padding: "5% 0 0 40%" }}>
                        <MyScreen key={1} tech={d} />
                    </div>
                    <div class="row" style={{ padding: "5% 0 10% 30%" }}>
                        <ButtonGroup
                            key={2}
                            side="rightDown"
                            technologies={["Button A", "Button B", "Button C"]}
                            counter={counter}

                        />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = store => {
    console.log(store)
    return {
        d:store.d
    }
}
export default connect(mapStateToProps,{rightbottom})(RightDownComponent);
