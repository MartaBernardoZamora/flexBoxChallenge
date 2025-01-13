const handleCardClick = (e) => {
    console.log(e);
};
const setCard = () => {
    const cards=document.querySelectorAll('.card');
    cards.forEach((card) =>{
        card.onclick=(e)=>handleCardClick(e);
    })
}
window.onload = () => {
    setCard();
};