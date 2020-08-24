class SocialButtons {

    constructor() {
        this.contactButton = document.getElementById("show-social-buttons");
        this.socialButtons = document.getElementsByClassName("header__nav__social");
        this.events()
    }

    events() {
        this.contactButton.addEventListener("click", (e) => this.showSocialButtons(e));
    }

    showSocialButtons(e) {
        e.preventDefault();
        let socialIconsArray = Object.values(this.socialButtons);
        let delay = 0;

        socialIconsArray.map(function(el) {

            setTimeout(function() {
                el.classList.toggle("header__nav__social--is-visible");
            }, delay);
            delay = delay + 300;
        })        
    }
}

export default SocialButtons;