class RenderStatsUi {
    
    constructor() {
        this.activities = document.getElementById("activities");
    }

    renderUi(track) {
        let activity = `
            <div class="activity">
                <div class="activity__row">
                    <p class="activity__stat">${track.title}</p>
                    <p class="activity__stat">${track.date}</p>
                </div>
                <div class="activity__row>
                    <p class="activity__stat">${track.distance}</p>
                </div>
                <div class="activity__row>
                    <p class="activity__stat">${track.avgSpeed}</p>
                    <p class="activity__stat">${track.maxSpeed}</p>
                </div>
                <div class="activity__row>
                    <p class="activity__stat">${track.elevationStart}</p>
                    <p class="activity__stat">${track.elevationMax}</p>
                </div>
                <div class="activity__row>
                    <p class="activity__stat">${track.avgHr}</p>
                    <p class="activity__stat">${track.maxHr}</p>
                </div>
            </div>
        `
        this.activities.insertAdjacentHTML('beforeend', activity);
    }
}

export default RenderStatsUi;