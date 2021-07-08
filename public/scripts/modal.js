export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //Funcionalidade de fazer a classe active mostrar em tela
        modalWrapper.classList.add("active");
    }
    function close(){
        //Funcionalidade de fechar a classe active mostrada em tela
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}