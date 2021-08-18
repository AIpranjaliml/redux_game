import React, { Component } from "react";
import { connect } from "react-redux";
import { lefttop } from "../actions";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";

class LeftTopComponent extends Component {
  
    render() {
        const {a,lefttop}=this.props
        const counter=(choice)=>  {
            switch(choice)
            {
                case 1:
                    lefttop("button a")
                    break;
                case 2: 
                lefttop("button b")
                    break;
                case 3:
                   lefttop("button c")
                    break;
                default:
                    lefttop("left top")
        
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
                        <MyScreen key={1} tech={a} />
                    </div>
                    <div class="row" style={{ padding: "5% 0 10% 30%" }}>
                        <ButtonGroup
                            key={2}
                            side="leftTop"
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
        a:store.a
    }
}
export default connect(mapStateToProps,{lefttop})(LeftTopComponent);
