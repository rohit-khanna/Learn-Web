export const booksCollection = [
  {
    id: 1,
    title: "Learn React With Me",
    author: "Rohit K",
    price: "$ 23.23",
    tags: ["REACT", "JS"]
  },
  {
    id: 2,
    title: "Lets Learn CSS ",
    author: "Andrw Someone",
    price: "$ 23.00",
    tags: ["CSS", "HTML"]
  },
  {
    id: 3,
    title: "HTML and Concepts",
    author: "John That",
    price: "$ 111.00",
    tags: ["CSS", "HTML"]
  },
  {
    id: 4,
    title: "C# Concepts",
    author: "Mr Turner",
    price: "$ 15.50",
    tags: ["C#", ".NET"]
  }
];

export const tagsCollection = [
  "HTML",
  "CSS",
  "JS",
  "C#",
  ".NET",
  "JAVA",
  "BEGINNER",
  "EXPERT",
  "INTERMEDIARY",
  "CONTENT",
  "ADVANCED",
  "CLOSURES",
  "SCRIPTING"
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
