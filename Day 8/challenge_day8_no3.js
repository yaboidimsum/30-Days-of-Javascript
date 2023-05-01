// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "Awan",
  lastName: "Biru",
  incomes: [
    {
      description: "salary",
      amount: 1000,
    },
    {
      description: "freelance",
      amount: 500,
    },
  ],
  expenses: [
    {
      description: "rent",
      amount: 200,
    },
    {
      description: "transport",
      amount: 100,
    },
  ],
  totalIncome: function () {
    let total = 0;
    for (elements of this.incomes) {
      total += elements.amount;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (elements of this.expenses) {
      total += elements.amount;
    }
    return total;
  },
  accountInfo: function () {
    return `Name: ${this.firstName} ${
      this.lastName
    }, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}`;
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
};

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
personAccount.addIncome("bonus", 200);
console.log(personAccount.totalIncome());
// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

const signUp = (username, email, password) => {
  for (elements of users) {
    if (elements.username === username) {
      return "user already exists";
    }
  }
  users.push({
    _id: Math.random().toString(36).substr(2, 5),
    username,
    email,
    password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false,
  });
  return "user added";
};

console.log(signUp("Awan", "awan@gmail.com", "123123"));
console.log(signUp("Asab", "asab@asab.com", "123456"));

// b. Create a function called signIn which allows user to sign in to the application

//      3. The products array has three elements and each of them has six properties.
//          a. Create a function called rateProduct which rates the product

const rateProduct = (userId, productId, rate) => {
  for (elements of products) {
    if (elements._id === productId) {
      elements.ratings.push({ userId, rate });
    }
  }
};

rateProduct("ab12ex", "eedfcf", 5);
rateProduct("ab12ex", "aegfal", 5);
rateProduct("ab12ex", "hedfcg", 5);
console.log(products);

//          b. Create a function called averageRating which calculate the average rating of a product

const averageRating = (productId) => {
  let total = 0;
  let count = 0;
  for (elements of products) {
    if (elements._id === productId) {
      for (rating of elements.ratings) {
        total += rating.rate;
        count++;
      }
    }
  }
  return total / count;
};

console.log(averageRating("eedfcf"));

//      4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const likeProduct = (userId, productId) => {
  for (elements of products) {
    if (elements._id === productId) {
      if (elements.likes.includes(userId)) {
        elements.likes.splice(elements.likes.indexOf(userId), 1);
      } else {
        elements.likes.push(userId);
      }
    }
  }
};

likeProduct("ab12ex", "eedfcf");
likeProduct("ab12ex", "aegfal");
likeProduct("ab12ex", "hedfcg");
console.log(products);
