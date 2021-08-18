
// const init={a:"left top",b:"right top",c:"left bottom ",d:"right bottom",}
//  function createReducers(state=init,action){
// switch(action.type){
//     case "lefttop":{
//         const {i}=action.payload
//         return{
//             ...state,a:i,c:i,b:"right top",d:"right bottom"
//         }
//     }
//     case "leftbottom":{
//         const {i}=action.payload
//         return{
//             ...state,a:i,c:i,b:"right top",d:"right bottom"
//         } 
     

//     }
//     case "righttop":{
//         const {i}=action.payload
//         return{
//             ...state,a:"left top",c:"left bottom",b:i,d:i
//         }

//     }
//     case "rightbottom":{
//         const {i}=action.payload
//         return{
//             ...state,a:"left top",c:"left bottom",b:i,d:i
//         }
//     }
//     default:{
//         return init;
//     }

// }
//  }
//  export default createReducers