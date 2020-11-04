class Track {
    constructor(id, title, date, distance, duration, avgSpeed, maxSpeed, elevationStart, elevationMax, avgHr, maxHr, color, speedArray, hrDataArray, elevationArray, zoomLevel, centerCoordinate) {
        this.id = id;
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
        this.elevationArray = elevationArray;
        this.zoomLevel = zoomLevel;
        this.centerCoordinate = centerCoordinate;
    }
}

export default Track;