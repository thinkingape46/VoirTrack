function randomColor() {

    let rgb = []
    let i;

    for (i=0; i<3; i++) {
        let randomNum = Math.floor(Math.random() * 256);
        rgb.push(randomNum);
    }
    let rgbColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    return rgbColor;
}
function changeColor() {

    let BikerPathOne = document.getElementById("path851");
    let BikerPathTwo = document.getElementById("path885");

    let rgbColor = randomColor();
    BikerPathOne.style.fill = rgbColor;
    BikerPathTwo.style.fill = rgbColor;
}

export default changeColor;





// class RandomColorGenerator {

//     constructor() {
//         this.BikerPathOne = document.getElementById("path851");
//         this.BikerPathTwo = document.getElementById("path885");
//         this.changeColor();
//     }
//     changeColor() {

//         let BikerPathOne = document.getElementById("path851");
//         let BikerPathTwo = document.getElementById("path885");
        
//         let color = this.randomColor();
//         BikerPathOne.style.fill = color;
//         BikerPathTwo.style.fill = color;
//     }
//     randomColor() {

//         let rgb = []
//         let i;
    
//         for (i=0; i<3; i++) {
//             let randomNum = Math.floor(Math.random() * 256);
//             rgb.push(randomNum);
//         }
//         let rgbColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
//         return rgbColor;
//     }

//     hello() {
//         console.log('l')
//     }
// }

// export default RandomColorGenerator;
