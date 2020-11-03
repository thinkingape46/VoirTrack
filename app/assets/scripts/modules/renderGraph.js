class RenderGraph {

    constructor() {
        
        this.hrGraph = document.getElementById('hrGraph');
        this.hrGraphCtx = this.hrGraph.getContext('2d');

        this.elevationGraph = document.getElementById('elevationGraph');
        this.elevationGraphCtx = this.elevationGraph.getContext('2d');
        
        this.speedGraph = document.getElementById('speedGraph');
        this.speedGraphCtx = this.speedGraph.getContext('2d');

        this.graphContainer = document.querySelectorAll(".graph-container")[0];

        this.hrContainer = document.getElementById("graph-container__hr");
        this.elevationContainer = document.getElementById("graph-container__elevation");
        this.speedContainer = document.getElementById("graph-container__speed");
        
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

    graphTitle(title, date, distance) {
        this.graphContainer.insertAdjacentHTML('beforeend', 
            `
                <p class="graph-container__title">${title},  ${date},  ${distance} km</p>
            `)
    }

    plotSpeedGraph(array, arrayMax, color, arrayAvg) {

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

/* Plot statistics on the graph */
        this.speedContainer.insertAdjacentHTML('beforeend', 
        `
            <p class="graph-container__stats">Avg Speed: ${arrayAvg.toFixed(2)} km/hr,  Max Speed: ${arrayMax.toFixed(2)} km/hr</p>
        `)
    }

    plotelevationGraph(array, arrayMax, color, arrayAvg) {

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

/* Plot statistics on the graph */
        this.elevationContainer.insertAdjacentHTML('beforeend', 
        `
            <p class="graph-container__stats">Start Elevation: ${arrayAvg},  Max Elevation: ${arrayMax}</p>
        `)

    }

    plotHrGraph(array, arrayMax, color, arrayAvg) {

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

/* Plot statistics on the graph */
        this.hrContainer.insertAdjacentHTML('beforeend', 
        `
            <p class="graph-container__stats">Avg HR: ${arrayAvg} bpm,  Max HR: ${arrayAvg} bpm</p>
        `)
    }
}

export default RenderGraph;

