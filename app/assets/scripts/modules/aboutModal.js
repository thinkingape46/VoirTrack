class AboutModal {

    constructor() {
        this.modalWindow = document.getElementById("modal-window");
        this.closeButton = document.getElementById("close-button");
        this.events();
    }

    events() {
        this.closeButton.addEventListener("click", (e) => this.closeModal(e));
    }

    closeModal(e) {
        this.modalWindow.classList.add("about__is-visible");
    }
}

export default AboutModal;