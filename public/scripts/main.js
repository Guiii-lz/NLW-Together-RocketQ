import Modal from './modal.js'

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

//Pegar todos botões existentes com a class check - marcar como lido
const checkButtons = document.querySelectorAll(".action a.check");

function handleClick(event, check = true){ //abre modal
    event.preventDefault();
    const text = check ? "Marcar como lida" : "Excluir ";
    const slug = check ? "check" : "delete";
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id;

    const form = document.querySelector(".modal form");
    form.setAttribute("action",`/question/${roomId}/${questionId}/${slug}`);    

    modalTitle.innerHTML = `${text} esta pergunta`; //poderia ser criado uma variavel const = check ? " Marcar como lida" : "Excluir" concatenando a esta pergunta.
    modalDescription.innerHTML = `Tem certeza que seja ${text.toLowerCase()} esta pergunta ?`;
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
    check? modalButton.classList.remove("red") : modalButton.classList.add("red");
    

    
    modal.open();
}

checkButtons.forEach(button => {
    //Adicionar o click
    button.addEventListener("click", handleClick)
        //modalTitle.innerHTML = "Marcar como lida"; ---- maneira de colocar e mudar o atributo title do h2 do modal
})

//Quando o botão delete for clicado, ele abre a modal.
const deleteButton = document.querySelectorAll(".action a.delete ");

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

