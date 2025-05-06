interface takePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
  deleteStory(): void;
  getStory(): void;
  getStoryName(): string;
}

class Instagram implements takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}
class YouTube implements takePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public shortVideo: string
  ) {}
  createStory(): string {
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
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter, burst);
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
