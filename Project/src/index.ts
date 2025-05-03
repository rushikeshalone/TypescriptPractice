class User {
  email: string;
  name: string;
  readonly city?: string = "New York";
  age?: number;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

const RA = new User("RA", "RA@gmail.com", 25);

// RA.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property.
