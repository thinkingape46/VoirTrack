class RenderGraph {

    constructor() {
        this.ctx = document.getElementById('graph');
        this.graphCtx = this.ctx.getContext('2d');
        this.graph()
    }

    graph() {                
        
        this.graphCtx.fillStyle = 'rgba(200, 50, 50, 0)';
        this.graphCtx.fillRect(0, 0, 500, 150);
    }

    plotSpeedGraph(speedArray, maxSpeed) {
        
        let width = this.ctx.width;
        let height = this.ctx.height;

        let length = speedArray.length;
        let xUnit = width / length;
        let yUnit = (height / maxSpeed);
        this.graphCtx.fillStyle = 'rgba(200, 50, 50, 0.75)';

        console.log(xUnit, yUnit);

        let i;

        this.graphCtx.beginPath();
        this.graphCtx.moveTo(0, 150);

        for (i = 0; i < speedArray.length; i++) {
            this.graphCtx.lineTo(i * xUnit, speedArray[i] * yUnit);
        }
        this.graphCtx.lineTo(500, 150);
        this.graphCtx.fill();
        console.log('speed graph plotted');

    }
}

export default RenderGraph;

