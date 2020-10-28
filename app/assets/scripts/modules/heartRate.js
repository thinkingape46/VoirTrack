class HeartRate {
    constructor() {}

    hrCalculations(hrDataInput) {
        
        let i;
        let hrDataArray = [];
        let hrSum = 0;

        for (i = 0; i < hrDataInput.length - 1; i++) {
            let hr = parseInt(hrDataInput[i].textContent);
            hrDataArray.push(hr);
            hrSum += hr;
        }
        
        let minHr = Math.min.apply(null, hrDataArray);
        let avgHr = parseInt(hrSum / (hrDataArray.length));
        let maxHr = Math.max.apply(null, hrDataArray);

        let hrDataOutput = {hrDataArray: hrDataArray, minHr: minHr, avgHr: avgHr, maxHr: maxHr};
        return hrDataOutput;
    }
}

export default HeartRate;