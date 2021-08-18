
const init={a:"left top",b:"right top",c:"left bottom ",d:"right bottom",}
export default  function (state=init,action){
switch(action.type){
    case "lefttop":{
        const {i}=action.payload
        return{
            ...state,a:i,c:"left Bottom",b:"right top",d:"right bottom"
        }
    }
    case "leftbottom":{
        const {i}=action.payload
        return{
            ...state,a:i,c:i,b:"right top",d:"right bottom"
        }
    }
    case "righttop":{
        const {i}=action.payload
        return{
            ...state,a:i,c:i,b:i,d:"right bottom"
        }

    }
    case "rightbottom":{
        const {i}=action.payload
        return{
            ...state,a:i,c:i,b:i,d:i
        }
    }
    default:{
        return init
    }

}
 }
 