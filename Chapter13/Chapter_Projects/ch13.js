
//CHAPTER PROJECT
//1. PASSWORD CHECKER

//Array of allowed passwords
let allowed = ["connect", "valid@90!", "bhabha121"];


//Checks if argument is value that is included in passwords array
function passwordChecker(inputPassword) {
  //Includes determines if array includes specfied element (returns true/false)
  return allowed.includes(inputPassword);
};

//Function indicates validity status of a password using a promise to resolve/reject
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
};


//Check password & sends to login function using then & catch to output results of rejected/resolved password
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
};
checker("connect");
checker("valid@90!");
checker("bhabha121");
checker("invalid");
