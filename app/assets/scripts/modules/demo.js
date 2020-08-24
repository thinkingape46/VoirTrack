class Demo {
    
    constructor() {
        this.demoButton = document.getElementById("demo");
        this.events();
    }

    events() {
        this.demoButton.addEventListener("click", () => alert("You clicked on demo"));
    }
}

export default Demo;