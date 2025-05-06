class User {
  email: string;
  name: string;
  readonly city?: string = "New York";
  private readonly city2?: string = "London";
  public readonly country?: string = "INDIA";
  age?: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

const RA = new User("RA", "RA@gmail.com", 25);

console.log(RA);

RA.country;

//RA.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property.

// RA.city2 = "Los Angeles"; // Error: Cannot assign to 'city2' because it is a read-only property.

// RA.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property.

//  Professional code

class User1 {
  readonly city?: string = "New York";

  constructor(public name: string, public email: string) {}
}

// getters and setters explaes in the below code

class User2 {
  private _CourseCount: number = 1;
  protected _courseName: string = "Angular";

  readonly city?: string = "New York";

  constructor(public name: string, public email: string) {
    this.name = name;
    this.email = email;
  }

  private deleteToken() {
    console.log("Token deleted");
  }

  get AppleEmail(): string {
    return `Apple ${this.email}`;
  }

  set AppleEmail(email: string) {
    this.email = email;
  }

  get AppleName(): string {
    return `Apple ${this.name}`;
  }
  set AppleName(name: string) {
    this.name = name;
  }

  get CourseCount(): number {
    return this._CourseCount;
  }
  set CourseCount(count: number) {
    if (count <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._CourseCount = count;
  }
  get courseName(): string {
    return this._courseName;
  }
  set courseName(name: string) {
    if (name.length < 3) {
      throw new Error("Course name should be more than 3 characters");
    }
    this._courseName = name;
  }
}

class subUser extends User2 {
  isFamily: boolean = true;
  changeCoursename() {
    this._courseName = "React"; // we can access the setter method of the parent class
  }
}

const RA1 = new User2("RA", "Rushi@gmail.com");

// RA1.deleteToken(); // Error: Property 'deleteToken' is private and only accessible within class 'User2'.
