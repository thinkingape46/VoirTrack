class RenderGraph {

    constructor() {
        
        this.hrGraph = document.getElementById('hrGraph');
        this.hrGraphCtx = this.hrGraph.getContext('2d');

        this.elevationGraph = document.getElementById('elevationGraph');
        this.elevationGraphCtx = this.elevationGraph.getContext('2d');
        
        this.speedGraph = document.getElementById('speedGraph');
        this.speedGraphCtx = this.speedGraph.getContext('2d');
        
        // this.graph()
        this.width = this.hrGraph.width;
        this.height = this.hrGraph.height;
    }

    clearCanvas() {
/* Clearing the canvas before repainting */
        
    this.speedGraphCtx.clearRect(0, 0, this.width, this.height);
    this.elevationGraphCtx.clearRect(0, 0, this.width, this.height);
    this.hrGraphCtx.clearRect(0, 0, this.width, this.height);
    
    }

    plotSpeedGraph(array, arrayMax, color) {



        let length = array.length;
        let xUnit = this.width / length;
        let yUnit = this.height / arrayMax;
        this.speedGraphCtx.fillStyle = color;

        let i;

        this.speedGraphCtx.beginPath();
        this.speedGraphCtx.moveTo(0, this.height);

        for (i = 0; i < array.length; i++) {
            this.speedGraphCtx.lineTo(i * xUnit, this.height - array[i] * yUnit);
        }
        this.speedGraphCtx.lineTo(this.width, this.height);
        this.speedGraphCtx.fill();
    }

    plotelevationGraph(array, arrayMax, color) {

        let length = array.length;
        let xUnit = this.width / length;
        let yUnit = this.height / arrayMax;
        this.elevationGraphCtx.fillStyle = color;

        let i;

        this.elevationGraphCtx.beginPath();
        this.elevationGraphCtx.moveTo(0, this.height);

        for (i = 0; i < array.length; i++) {
            this.elevationGraphCtx.lineTo(i * xUnit, this.height - array[i] * yUnit);
        }
        this.elevationGraphCtx.lineTo(this.width, this.height);
        this.elevationGraphCtx.fill();
    }

    plotHrGraph(array, arrayMax, color) {

        let length = array.length;
        let xUnit = this.width / length;
        let yUnit = this.height / arrayMax;
        this.hrGraphCtx.fillStyle = color;

        let i;

        this.hrGraphCtx.beginPath();
        this.hrGraphCtx.moveTo(0, this.height);

        for (i = 0; i < array.length; i++) {
            this.hrGraphCtx.lineTo(i * xUnit, this.height - array[i] * yUnit);
        }
        this.hrGraphCtx.lineTo(this.width, this.height);
        this.hrGraphCtx.fill();
    }
}

export default RenderGraph;

