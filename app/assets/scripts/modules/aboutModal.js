class AboutModal {

    constructor() {
        this.injectHTML();
        this.modalWindow = document.getElementById("modal-window");
        this.openButton = document.getElementById("about");        
        this.closeButton = document.getElementById("close-button");
        this.events();
    }

    events() {
        this.openButton.addEventListener("click", (e) => this.openModal(e));
        this.closeButton.addEventListener("click", (e) => this.closeModal(e));
        document.addEventListener("keyup", e => this.keyPressHandler(e));
    }

    injectHTML() {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="about" id="modal-window">
            <div class="about__container">
                <div id="close-button">
                    <img class="close-button-image" src="/assets/images/close_button.svg" alt="button to close the modal window">
                </div>
                <h1 class="text-content about__title">What is this Trip Visualizer for?</h1>
                <main class="about__text">
                    <ul class="text-content about__text--item">
                        <li>Trip Visualizer is a simple web-app to visualize your GPX files on a map.</li>
                        <li>You can either drop your files over the <strong>Drop files here</strong> area or click on <strong>Add files</strong> to select from your file manager.</li>
                        <li>Please note that only GPX files are supported.</li>
                        <li>You can add select or drop multiple files at one or keep adding the files progressively.</li>
                        <li>This app will not store any of your files.</li>
                    </ul>
                </main>
            </div>        
        </div>
        `);
    }

    openModal(e) {
        e.preventDefault();
        this.modalWindow.classList.add("about--is-visible")
    }

    closeModal(e) {
        this.modalWindow.classList.remove("about--is-visible");
    }

    keyPressHandler(e) {
        if (e.keyCode === 27) {
            this.modalWindow.classList.remove("about--is-visible");
        }
    }
}

export default AboutModal;