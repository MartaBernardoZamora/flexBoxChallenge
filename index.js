/*VERSIÓN CON HIDDEN y currentTarget encapsulando el div (para cuando tocas en otro elemento y quieres el de debajo)
const handleCardClick = (e) => {
    let styleClickedCard = e.currentTarget.firstElementChild.style;
    styleClickedCard.visibility = styleClickedCard.visibility === "hidden" ? "initial": "hidden";
};
const setCard = () => {
    const cards=document.querySelectorAll('.card');
    cards.forEach((card) =>{
        card.onclick=(e)=>handleCardClick(e);
    })
}*/
const handleCardClick = (e) => {
    let styleClickedCard = e.target.style;
    styleClickedCard.opacity = styleClickedCard.opacity === "0" ? "1" : "0";
};
const setCard = () => {
    const cards=document.querySelectorAll('.card');
    cards.forEach((card) =>{
        card.onclick=(e)=>handleCardClick(e);
    })
}
window.onload = () => {
    /*setCard()*/;
    setCard();
};