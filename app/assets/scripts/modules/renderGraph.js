class RenderGraph {

    constructor() {
        this.ctx = document.getElementById('graph');
        this.graphCtx = this.ctx.getContext('2d');
        // this.graph()
        this.width = this.ctx.width;
        this.height = this.ctx.height;
    }

    plotGraph(array, arrayMax, color, graphNumber) {                
        let length = array.length;
        let xUnit = this.width / length;
        let yUnit = (this.height / arrayMax);
        this.graphCtx.fillStyle = color;

        let i;

        this.graphCtx.beginPath();
        this.graphCtx.moveTo(0, this.height);

        for (i = 0; i < array.length; i++) {
            this.graphCtx.lineTo(i * xUnit, (this.height - (array[i] * yUnit)));
        }
        this.graphCtx.lineTo(this.width, this.height);
        this.graphCtx.fill();
        console.log('plotted');
    }
}

export default RenderGraph;

