export const getStore=()=>{
    let readCard =[];
    const storedReadCard =localStorage.getItem('readCard')
    if(storedReadCard)
        {
            readCard=JSON.parse(storedReadCard)
        }
        return readCard;
}

export const getwish =()=>{
    let wishCard=[];
    const storedWishCard=localStorage.getItem('wishCard')
    if(storedWishCard)
        {
            wishCard=JSON.parse(storedWishCard)
        }
       
        return wishCard;
}