// Persona 1 information 
var fName1 = "Maria";
var mName1 = "Delos Santos";
var lName1 = "Las Marias";
var age1 = 25;
var address1 = "Upper Session Road, Baguio City, Benguet";

// Persona 2 information 
var fName2 = "Juan";
var mName2 = "Gamoso";
var lName2 = "Dela Cruz";
var age2 =  age2 = 28;
var address2 = "San Nicolas, Candon City, Ilocosur";

// using split ()Formatting and displaying names with age and address
var formattedName1 = formatName(lName1, fName1, mName1);
var formattedName2 = formatName(lName2, fName2, mName2);

console.log("Name: " + formattedName1 + ", Age: " + age1 + ", Address: " + address1);
console.log("Name: " + formattedName2 + ", Age: " + age2 + ", Address: " + address2);

// arFunction to format the name as "Last Name, First Name, Middle Name"
function formatName(lastName, firstName, middleName) {
  return lastName + ", " + firstName + ", " + middleName;
  }