class Track {
    constructor(title, date, distance, duration, avgSpeed, maxSpeed, elevationStart, elevationMax, avgHr, maxHr, color, speedArray, hrDataArray) {
        this.title = title;
        this.date = date;
        this.distance = distance;
        this.duration = duration;
        this.avgSpeed = avgSpeed;
        this.maxSpeed = maxSpeed;
        this.elevationStart = elevationStart;
        this.elevationMax = elevationMax;
        this.avgHr = avgHr;
        this.maxHr = maxHr;
        this.color = color;
        this.speedArray = speedArray;
        this.hrDataArray = hrDataArray;
    }
}

export default Track;