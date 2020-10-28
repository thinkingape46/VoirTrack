class GpxSpeed {
    constructor() {}

    speedCalculator(distanceData, timeData, distanceEle) {

        let timeArray = [];
        let speedArray = [];
        let i;

        for (i = 0; i < timeData.length - 1; i++) {
            let time = timeData[i].textContent;
            timeArray.push(new Date(time));
        }

        for (i = 0; i < distanceData.length - 1; i+=5) {

            if ((timeArray[i + 6] - timeArray[i + 1]) > 0) {

                let speed = (distanceData[i + 5] - distanceData[i]) / ((timeArray[i + 6] - timeArray[i + 1]) / 3600000);                
                speedArray.push(speed);

            }

        }
        
        let duration = (timeArray[timeArray.length - 1] - timeArray[1]) / 3600000;
        let minSpeed = Math.min.apply(null, speedArray);
        let maxSpeed = Math.max.apply(null, speedArray);
        let avgSpeed = distanceEle / duration;
        let data = {timeArray: timeArray, speedArray: speedArray, duration: duration, minSpeed: minSpeed, maxSpeed: maxSpeed, avgSpeed: avgSpeed};
        return data;
    }
}

export default GpxSpeed;