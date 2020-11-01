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
                <div>
                    <img id="close-button" class="close-button-image" src="/assets/images/close_button.svg" alt="button to close the modal window">
                </div>

                <div class="about__container__content">
                    <h1 class="text-content about__container__content__title">What is this GPX Chemin for?</h1>
                    <main class="about__container__main">
                        <ul class="text-content about__container__ul">
                            <li class="about__container__content__text__item">GPX Chemin is a simple web-app to visualize GPX files on a map.</li>

                            <li class="about__container__content__text__item">Files can be added by dropping files over <strong>Drop files here</strong> area or by clicking on <strong>Add files</strong> to select from file manager.</li>

                            <li class="about__container__content__text__item">If files are added by using file browser, click on <strong>Plot</strong> to load the track on the map. No action is needed when files are dropped over drop area, tracks get loaded automatically.</li>

                            <li class="about__container__content__text__item">Single or multiple files can be added at once, or can be added progressively.</li>

                            <li class="about__container__content__text__item">On the right side, all the basic stats of each track such as title, date, distance, speed, elevation, and heart rate are displayed.</li>

                            <li class="about__container__content__text__item">The color of each stat box matches with the color of the respective line on the map.</li>
                            
                            <li class="about__container__content__text__item">Under the map are three graphs, one each for speed (blue), elevation (teal), and heart rate (red).</li>

                            <li class="about__container__content__text__item">Stats and graphs are displayed only when a track is loaded, if you don't have any gpx file with you, click on <strong>Test</strong> to load a demo track.</li>

                            <br>
                            <li class="about__container__content__text__item">Enter escape key or click on close button to exit this window.</li>
                        </ul>
                    </main>
                </div>
                
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