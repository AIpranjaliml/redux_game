export const lefttop =i=>({
type:"lefttop",
payload:{i:i}
});

export const leftbottom = i=>(
    
    {
    type:"leftbottom",
    payload:{i:i}
    });
export const righttop=(i)=>({
    type:"righttop",
    payload:{i:i}
});
export const rightbottom=(i)=>({
    type:"rightbottom",
    payload:{i:i}
    });
export const reset=()=>({
    type:"reset"
});