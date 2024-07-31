
//CHAPTER PROJECT
//1. PASSWORD CHECKER
const allowed = ["1234", "pass", "apple"];

function passwordChecker(inputPassword) {
  return allowed.includes(inputPassword);
}

function login(password) {
  return new Promise((resolve, reject) => {
    if (passwordChecker(password)) {
      resolve({
        status: true,
      });
    } else {
      reject({
        status: false,
      });
    }
  });
}

function checker(inputPassword) {
  login(inputPassword)
    .then((token) => {
      console.log("Approved:");
      console.log(token);
    })
    .catch((value) => {
      console.log("Rejected:");
      console.log(value);
    });
}
checker("1234");
checker("wrong");
