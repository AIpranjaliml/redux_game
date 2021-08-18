import React, { Component } from "react";
import { connect } from "react-redux";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";
import { leftbottom } from "../actions";


class LeftDownComponent extends Component {
    
    render() {
        const {c,leftbottom}=this.props
    const counter=(choice)=>  {
        switch(choice)
        {
            case 1:
                leftbottom("button a")
                break;
            case 2: 
            leftbottom("button b")
                break;
            case 3:
               leftbottom("button c")
                break;
            default:
                leftbottom("left top")
    
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
                        <MyScreen key={1} tech={c} />
                    </div>
                    <div class="row" style={{ padding: "5% 0 10% 30%" }}>
                        <ButtonGroup
                            key={2}
                            side="leftDown"
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
        c:store.c
    }
}
export default connect(mapStateToProps,{leftbottom})(LeftDownComponent);
