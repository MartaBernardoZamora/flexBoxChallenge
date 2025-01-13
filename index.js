const handleCardClick = (e) => {
    let styleClickedCard = e.currentTarget.firstElementChild.style;
    styleClickedCard.visibility = styleClickedCard.visibility === "hidden" ? "initial": "hidden";
};
const setCard = () => {
    const cards=document.querySelectorAll('.card');
    cards.forEach((card) =>{
        card.onclick=(e)=>handleCardClick(e);
    })
}
window.onload = () => setCard();