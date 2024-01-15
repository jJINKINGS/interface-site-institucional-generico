function handleModalHeader() {
    const button = document.querySelector(".header__button--enter")
    const modalContainer = document.querySelector(".modalController")

    button.addEventListener("click", function() {
        modalContainer.showModal();
        closeModal();
    })
}

function closeModal() {
    const buttonClose = document.querySelector("#closeModal")
    const modalContainer = document.querySelector(".modalController")

    buttonClose.addEventListener("click", function() {
        modalContainer.close();
    })
}

function handleModalMain() {
    const button = document.querySelector(".main__button--enter")
    const modalContainer = document.querySelector(".modalController")

    button.addEventListener("click", function() {
        modalContainer.showModal();
        closeModal();
    })
}

handleModalHeader();
handleModalMain();