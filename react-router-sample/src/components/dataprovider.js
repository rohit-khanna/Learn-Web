export const booksCollection = [
  {
    id: 1,
    title: "Learn React With Me",
    Author: "Rohit K",
    price: "$ 23.23"
  },
  {
    id: 2,
    title: "Lets Learn CSS ",
    Author: "Andrw Someone",
    price: "$ 23.00"
  },
  {
    id: 3,
    title: "HTML and Concepts",
    Author: "John That",
    price: "$ 111.00"
  },
  { id: 4, title: "C# Concepts", Author: "Mr Turner", price: "$ 15.50" }
];

export const fakeAuthentication = {
  isAuthenticated: false,
  authenticate(cb) {
    console.log("fakeAUth");

    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    console.log("fakeAUth");

    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
