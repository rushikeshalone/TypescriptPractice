class takePhoto {
  constructor(public cameraMode: string, public filter: string) {}
}

class Instagram2 extends takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
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

abstract class takePhoto2 {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getCameraMode(): string; // abstract method
}

class Instagram3 extends takePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getCameraMode() {
    return `camera${this.cameraMode}`;
  }
}

const Check = new Instagram3("portrait", "white", 3);

abstract class TakeNewClass {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getCameraMode(): string; // abstract method
  abstract getFilter(): string; // abstract method
  abstract getreelTime(): number; // abstract method
}

class Instagram4 extends TakeNewClass {
  constructor(
    public cameraMode: string,
    public filter: string,
    public reelTime: number
  ) {
    super(cameraMode, filter);
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
