/*
1. The method randomColorGenerator() generates a random color.
2. hsl color is chosen to control the darkness and greyness in the color.
3. saturation and lightness is fixed, so as the reduce the range of unwanted colors.
4. For more information on hsl color model, please visit: https://en.wikipedia.org/wiki/HSL_and_HSV
*/

class RandomColor {
    constructor() {}
    
    randomColorGenerator() {
        let hue = Math.floor(Math.random() * 360);
        let hslColor = `hsl(${hue}, 100%, 55%)`;
        return hslColor;
    }
}

export default RandomColor;