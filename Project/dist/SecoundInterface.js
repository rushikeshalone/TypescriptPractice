"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, shortVideo) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shortVideo = shortVideo;
    }
    createStory() {
        return "Story created";
        console.log("Story created");
    }
    deleteStory() {
        console.log("Story deleted");
    }
    getStory() {
        console.log("Story fetched");
    }
    getStoryName() {
        return "My Story";
    }
}
class SocialMedia extends Instagram {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter, burst);
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
const socialMedia = new SocialMedia("portrait", "black and white", 3);
console.log(socialMedia.getCameraMode()); // portrait
