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
const setDisplay =()=>{
    const cards=document.querySelectorAll('.container__card');
    cards.forEach((card) =>{
        card.classList.contains("container_card--flex") && card.classList.remove("container_card--flex");
    })
    const container=document.querySelector('.container');
    container.classList.toggle("container--flex");
    container.classList.toggle("container--grid");
    const isFlex = document.querySelector('.buttonContainer__p').textContent.includes("Flexbox")
    document.querySelector('.buttonContainer__p').textContent = `Actualmente, esta web utiliza ${isFlex ? "Grid" : "Flexbox"}`;
    document.querySelector('.buttonContainer__button').textContent = `Cambiar a ${isFlex ? "Flexbox" : "Grid"}`;
}
window.onload = () => {
    setCard();
    document.getElementById('displayButton').onclick=()=>setDisplay();
};