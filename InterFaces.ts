interface User {
  readonly dbId: number;
  Email: string;
  UserId: number;
  googleId?: string;
}

const user: User = {
  dbId: 1,
  Email: "rushi@gmail.com",
  UserId: 1,
  googleId: "1234",
  githubToken: "1234",
};

interface User1 {
  readonly dbId: number;
  Email: string;
  UserId: number;
  googleId?: string;
  isActive: boolean;
  // startTrial: () => string;
  startTrial(): string; // method signature or another way to define a method in an interface
}

const User1: User1 = {
  dbId: 1,
  Email: "rushi@gmail.com",
  UserId: 1,
  googleId: "1234",
  isActive: true,
  startTrial: () => {
    return "Trial started";
  },
};

interface GetCoponcard {
  name: string;
  id: number;
  isActive: boolean;
  getCardInfo(coupeName: string): number;
}

const getCoponcard: GetCoponcard = {
  name: "Rushi",
  id: 1,
  isActive: true,
  getCardInfo: (coupeName: "name") => {
    return 10;
  },
};

interface User {
  githubToken: string;
}

interface Admin extends User, User1 {
  role: "admin" | "ta" | "learner";
}

const RA: Admin = {
  dbId: 1,
  Email: "rushi@gmail.com",
  UserId: 1,
  googleId: "1234",
  githubToken: "1234",
  role: "admin",
  isActive: true,
  startTrial: () => {
    return "Trial started";
  },
};
