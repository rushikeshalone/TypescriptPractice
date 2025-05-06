"use strict";
class takePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Instagram2 extends takePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getCameraMode() {
        return this.cameraMode;
    }
    getFilter() {
        return this.filter;
    }
    getBurst() {
        return this.burst;
    }
}
const RCF = new Instagram2("portrait", "black and white", 3);
console.log(RCF.getCameraMode()); // portrait
class takePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Instagram3 extends takePhoto2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getCameraMode() {
        return `camera${this.cameraMode}`;
    }
}
const Check = new Instagram3("portrait", "white", 3);
class TakeNewClass {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Instagram4 extends TakeNewClass {
    constructor(cameraMode, filter, reelTime) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.reelTime = reelTime;
    }
    getCameraMode() {
        return `camera ${this.cameraMode}`;
    }
    getFilter() {
        return this.filter;
    }
    getreelTime() {
        return 8;
    }
}
const RFG = new Instagram4("Rushi", "Alone", 3);
console.log(RFG.getCameraMode()); // camera portrait
console.log(RFG.getFilter()); // white
console.log(RFG.getreelTime()); // 8
