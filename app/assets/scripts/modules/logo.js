class RandomColorGenerator {

    constructor() {
        this.BikerPathOne = document.getElementById("path851");
        this.BikerPathTwo = document.getElementById("path885");
        setInterval(this.changeColor, 1000).bind(this);
    }

    changeColor() {

        let BikerPathOne = document.getElementById("path851");
        let BikerPathTwo = document.getElementById("path885");
        
        let rgbColor = this.randomColor();
        BikerPathOne.style.fill = rgbColor;
        BikerPathTwo.style.fill = rgbColor;
    }

    randomColor() {

        console.log('hello');

        let rgb = []
        let i;
    
        for (i=0; i<3; i++) {
            let randomNum = Math.floor(Math.random() * 256);
            rgb.push(randomNum);
        }
        rgbColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        return rgbColor;
    }

}

export default RandomColorGenerator;
