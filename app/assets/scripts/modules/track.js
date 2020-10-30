class Track {
    constructor(title, date, distance, duration, avgSpeed, maxSpeed, elevationStart, elevationMax, avgHr, maxHr, color) {
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
    }
}

export default Track;