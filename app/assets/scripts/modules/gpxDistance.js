/* 
1. This file is used to calculate distance between two coordinates on the surface of earth.
2. It works quite good for small distances, tested for tracks up to 210 kms.
3. It accepts an array of latitudes and longitudes in the the following format
latLongs = [[lat1, long1], [lat2, long2],..].
4. Haversine formula is used to calculate the distance between two coordinates. You can find the formula at the below wikipedia article:
    https://en.wikipedia.org/wiki/Haversine_formula
*/

class GpxDistance {
    constructor() {}

    distanceCalculator(latLongs, elevationData) {

        let i;
        let degToRadFactor = 0.0174533;
        let radiusEarth = 6371;
        let distance = 0;
        let distanceEle = 0;
        let angleArray = []
        var distanceArray = [];
        let distanceEleArray = [];
        let sl = [];
        for (i = 0; i < latLongs.length-1; i++) {
            let smallestDistanceEle;

            // Haversine formulae;
            let smallestDistance = (2 * radiusEarth) * Math.asin((Math.sqrt(Math.pow(Math.sin((latLongs[i+1][0] * degToRadFactor - latLongs[i][0] * degToRadFactor)/2), 2) + (Math.cos(latLongs[i][0] * degToRadFactor) * Math.cos(latLongs[i+1][0] * degToRadFactor) * Math.pow(Math.sin((latLongs[i+1][1] * degToRadFactor - latLongs[i][1] * degToRadFactor) / 2), 2)) )));

            
            distance += smallestDistance;
            distanceArray.push(distance);

            let eleDiff = (elevationData[i + 1] - elevationData[i]) / 1000;

            /*
            Calculation of slope between two coordinates using the formulae:
            tanθ = (increase in elevation) / (distance between coordinates);
            Math.atan returns angle in radians, it's need to be convered to degrees.
            */                
            let angle;
            let elevationCorrection;

            if (eleDiff > 0) {
                angle = Math.atan(Math.abs(eleDiff) / smallestDistance);
                /*
                Considering the extra distance while going up:
                slopeDistance = flatDistance * cos(angle);
                */
                elevationCorrection = smallestDistance / (Math.cos(angle));
            }
            else if (eleDiff < 0) {
                angle = Math.atan(smallestDistance / Math.abs(eleDiff));
                /*
                Considering the extra distance while going down:
                slopeDistance = flatDistance * sin(angle);
                */ 
                elevationCorrection = smallestDistance / (Math.sin(angle));
            }
            else {
                angle = 0;
                elevationCorrection = smallestDistance;
            }
            
            angleArray.push(angle);            
            smallestDistanceEle = elevationCorrection;            
            distanceEle += smallestDistanceEle;
            distanceEleArray.push(distanceEle);
        }
        
        return [distanceEle, distance, distanceArray, distanceEleArray];
    }

    /*
    Previous code used for distance
        1. Formula used for calculation is taken from the below wikipedia article.
        "https://en.wikipedia.org/wiki/Geographical_distance"
        2. Not accurate, abondoned for Haversine formula (https://en.wikipedia.org/wiki/Haversine_formula)

    distanceCalculator(latLongs, elevationData) {

        let i;
        let distance = 0;
        let degToRadFactor = 0.0174533;
        let radisEarth = 6371;
        for (i = 0; i < latLongs.length-1; i++) {    

            let smallestDistance = (radisEarth) * Math.sqrt(Math.pow((latLongs[i][0] * degToRadFactor - latLongs[i+1][0] * degToRadFactor), 2) + Math.pow(Math.cos((latLongs[i][0] + latLongs[i+1][0])/2) * ((latLongs[i][1] * degToRadFactor - latLongs[i+1][1] * degToRadFactor)), 2));
    
            distance += smallestDistance;
        }
        return distance;
    }
    */
}

export default GpxDistance;