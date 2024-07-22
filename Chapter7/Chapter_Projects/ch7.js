"use strict";

//**************************EMPLOYEE TRACKING APP********************/

// class Employee {
//     constructor(firstName, lastName, yearsWorked) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.yearsWorked = yearsWorked;
//     }

// }

// let emp1 = new Employee("Daniel", "Skye", 3);
// let emp2 = new Employee("Josh", "Mphele", 5);
// let emp3 = new Employee("Zakhele", "Grootboom", 10);

// let employees = [];
// employees[0] = emp1;
// employees[1] = emp2;
// employees[2] = emp3;
// console.log(employees);

// //defining method on prototype
// Employee.prototype.empDetails = function () {
//     console.log(`Employee ${this.firstName} ${this.lastName} has worked for ${this.yearsWorked} years at Transet.`);
// };

// console.log("\n\n");
// //Looping though each employee and calling empDetails
// for (let i = 0; i < employees.length; i++) {
//     employees[i].empDetails();
// };


//**************************MENU ITEMS PRICE CALCULATOR********************/

class Menu {
  #item1 = 29.99;
  #item2 = 79.90;
  constructor(qty1, qty2) {
    this.qty1 = qty1;
    this.qty2 = qty2;
  }

  totalCost() {
    return (this.#item1 * this.qty1) + (this.#item2 * this.qty2);
  }

//***********GETTER && SETTER METHOD*/
  get total() {
    return this.totalCost();
  }
}

const order1 =  new Menu(2, 0);
const order2 = new Menu(0, 2);
const order3 = new Menu(10, 20);

console.log("Order 1 = R", order1.total);
console.log("Order 2 = R", order2.total);
console.log("Order 3 = R", order3.total);


