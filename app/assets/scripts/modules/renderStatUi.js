import RenderGraph from './renderGraph';
let renderGraph = new RenderGraph();

class RenderStatsUi {
    
    constructor() {
        this.activities = document.getElementById("activities");
    }

    renderUi(track) {
        
        let formattedDate = this.getDate(track.date);
        let speedStats = this.sanitizeSpeed(track);
        let elevationStats = this.sanitizeElevation(track);
        let heartData = this.sanitizeHeartRate(track);
        let i;
        
        let activity = `
            <div class="activity ${track.date}" style="background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), ${track.color});">
                <div class="activity__head">
                    <p class="activity__head__stat title">${track.title}</p>
                    <p class="activity__head__stat date">${formattedDate}</p>
                </div>
                <div class="activity__row">
                    <p class="activity__stat distance">Distance: ${track.distance.toFixed(2)} km</p>
                </div>
                ${elevationStats}
                ${speedStats}

                ${heartData}
            </div>
        `;
        this.activities.insertAdjacentHTML('beforeend', activity);

        if (track.avgHr != 'NA' && track.maxHr != 'NA') {
            let color = 'rgba(255, 0, 0, .45)'
            renderGraph.plotGraph(track.hrDataArray, track.maxHr, color, 1);
        }
        if (track.elevationStart != 'NA' && track.elevationMax != 'NA') {
            let color = 'rgba(0, 255, 0, .45)'
            renderGraph.plotGraph(track.elevationArray, track.elevationMax, color, 2);
        }
        if (track.avgSpeed != 'NA' && track.maxSpeed != 'NA') {
            let color = 'rgba(0, 0, 255, .45)'
            renderGraph.plotGraph(track.speedArray, track.maxSpeed, color, 3);
        }
    }

    getDate(date) {
        let months = {0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "June", 6: "July", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"};
        let i = new Date(date);
        let formattedDate;

        if (date != "NA") {
            formattedDate = `${i.getDate()} ${months[i.getMonth()]} ${i.getFullYear()} ${i.getHours()}:${i.getMinutes()}`;
        }
        else {
            formattedDate = "Time not available";
        }        
        return formattedDate;
    }

    sanitizeSpeed(track) {
        let speedStats;

        if (track.avgSpeed != 'NA' && track.maxSpeed != 'NA') {
            speedStats = `
            <div class="activity__row">
                <p class="activity__stat avgspeed">Avg Speed: ${track.avgSpeed.toFixed(2)} km/h</p>
                <p class="activity__stat maxspeed">Max Speed: ${track.maxSpeed.toFixed(2)} km/h</p>
            </div>`
        }
        else {
            speedStats = `
            <div class="activity__row">
                <p class="activity__stat avgspeed">Avg Speed: ${track.avgSpeed}</p>
                <p class="activity__stat maxspeed">Max Speed: ${track.maxSpeed}</p>
            </div>`
        }
        return speedStats;
    }

    sanitizeElevation(track) {
        let elevationStats;

        if (track.elevationStart != 'NA' && track.elevationMax != 'NA') {
            elevationStats = `
            <div class="activity__row">
                <p class="activity__stat elevationstart">Elevation Start: ${track.elevationStart.toFixed(2)} m</p>
                <p class="activity__stat elevationmax">Elevation Max: ${track.elevationMax.toFixed(2)} m</p>
            </div>
            `
        }
        else {
            elevationStats = `
            <div class="activity__row">
                <p class="activity__stat elevationstart">Elevation Start: ${track.elevationStart}</p>
                <p class="activity__stat elevationmax">Elevation Max: ${track.elevationMax}</p>
            </div>            
            `
        }
        return elevationStats;
    }

    sanitizeHeartRate(track) {
        let heartData;
        
        if (track.avgHr != 'NA' && track.maxHr != 'NA') {
            heartData = `
                <div class="activity__row">
                    <p class="activity__stat avghr">HR Avg: ${track.avgHr.toFixed(0)} bpm</p>
                    <p class="activity__stat maxhr">HR Max: ${track.maxHr.toFixed(0)} bpm</p>
                </div>
            `
        }
        else {
            heartData = `
            <div class="activity__row">
                <p class="activity__stat avghr">HR Avg: NA</p>
                <p class="activity__stat maxhr">HR Max: NA</p>
            </div>
        `
        }
        return heartData;
    }
}

export default RenderStatsUi;