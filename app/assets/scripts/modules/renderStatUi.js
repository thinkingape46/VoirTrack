class RenderStatsUi {
    
    constructor() {
        this.activities = document.getElementById("activities");
    }

    renderUi(track) {

        let formattedDate = this.getDate(track.date);
        let heartData = this.sanitizeHeartRate([track.avgHr, track.maxHr]);

        let activity = `
            <div class="activity">
                <div class="activity__head">
                    <p class="activity__head__stat title">${track.title}</p>
                    <p class="activity__head__stat date">${formattedDate}</p>
                </div>
                <div class="activity__row">
                    <p class="activity__stat distance">Distance: ${track.distance.toFixed(2)} km</p>
                </div>
                <div class="activity__row">
                    <p class="activity__stat avgspeed">Avg Speed: ${track.avgSpeed.toFixed(2)} km/h</p>
                    <p class="activity__stat maxspeed">Max Speed: ${track.maxSpeed.toFixed(2)} km/h</p>
                </div>
                <div class="activity__row">
                    <p class="activity__stat elevationstart">Elevation Start: ${track.elevationStart.toFixed(2)} m</p>
                    <p class="activity__stat elevationmax">Elevation Max: ${track.elevationMax.toFixed(2)} m</p>
                </div>
                <div class="activity__row">
                    <p class="activity__stat avghr">HR Avg: ${heartData[0]} bpm</p>
                    <p class="activity__stat maxhr">HR Max: ${heartData[1]} bpm</p>
                </div>
            </div>
        `;
        this.activities.insertAdjacentHTML('beforeend', activity);
    }

    getDate(date) {
        let months = {0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "June", 6: "July", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"};
        let i = new Date(date);
        let formattedDate = `${i.getDate()} ${months[i.getMonth()]} ${i.getFullYear()} ${i.getHours()}:${i.getMinutes()}`;
        return formattedDate;
    }

    sanitizeHeartRate(hr) {
        let heartDate = [];
        let i;

        for (i = 0; i < hr.length; i++) {
            if (typeof(hr[i]) == "number") {
                heartDate.push(hr[i].toFixed(0));
            }
            else {
                heartDate.push("NA");
            }
        }
        return heartDate;
    }

    sanitizeSpeed(speed) {

    }
}

export default RenderStatsUi;