class SocialButtons {

    constructor() {
        this.contactButton = document.getElementById("show-social-buttons");
        this.socialButtons = document.getElementsByClassName("header__nav__social")[0];
        this.events()
    }

    events() {
        this.contactButton.addEventListener("click", (e) => this.showSocialButtons(e));
    }

    showSocialButtons(e) {
        e.preventDefault();
        this.socialButtons.classList.toggle("header__nav__social--is-visible");
    }
}

export default SocialButtons;