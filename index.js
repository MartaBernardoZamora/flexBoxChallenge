const handleCardClick = (e) => {
    let styleClickedCard = e.target.style;
    styleClickedCard.opacity = styleClickedCard.opacity === "0" ? "1" : "0";
};
const setCard = () => {
    const cards=document.querySelectorAll('.container__card');
    cards.forEach((card) =>{
        card.onclick=(e)=>handleCardClick(e);
    })
}
window.onload = () => {
    setCard();
};