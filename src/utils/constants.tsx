export interface Package {
  package: "basic" | "standard" | "premium";
  level: number;
  amount: number;
}


export const Packakges: Package[] = [
  {
    package: "basic",
    level: 1,
    amount: 20
  },
  {
    package: "basic",
    level: 2,
    amount: 40
  },
  {
    package: "basic",
    level: 3,
    amount: 80
  },
  {
    package: "standard",
    level: 4,
    amount: 160
  },
  {
    package: "standard",
    level: 5,
    amount: 320
  },
  {
    package: "standard",
    level: 6,
    amount: 640
  },
  {
    package: "standard",
    level: 7,
    amount: 1280
  },
  {
    package: "premium",
    level: 8,
    amount: 2560
  },
  {
    package: "premium",
    level: 9,
    amount: 5120
  },
  {
    package: "premium",
    level: 10,
    amount: 10240
  },
  {
    package: "premium",
    level: 11,
    amount: 20480
  },
  {
    package: "premium",
    level: 12,
    amount: 40960
  }
]