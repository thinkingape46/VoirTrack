/* 
1. This file is used to calculate distance between two coordinates on the surface of earth.
2. It works quite good for small distances, not tested for longer distances.
3. It accepts an array of latitudes and longitudes in the the following format
latLongs = [[lat1, long1], [lat2, long2],..].
4. Formula used for calculation is taken from the below wikipedia article.
"https://en.wikipedia.org/wiki/Geographical_distance"
*/

class GpxDistance {
    constructor() {}

    distanceCalculator(latLongs) {

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
}

export default GpxDistance;