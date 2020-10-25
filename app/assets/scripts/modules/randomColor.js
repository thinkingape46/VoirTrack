class RandomColor {
    constructor() {}

    randomColorgenerator() {
        let hue = Math.floor(Math.random() * 360);
        let hslColor = `hsl(${hue}, 100%, 30%)`;
        return hslColor;
    }
}

export default RandomColor;