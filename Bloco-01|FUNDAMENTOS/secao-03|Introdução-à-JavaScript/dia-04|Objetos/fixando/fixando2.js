const customer = {
  email: 'thaumaram@gmail.com',
  fone: '(92)99119-5713',
}

function addProperty(object, key, value){
  if(typeof object[key] === "undefined"){
    object[key] = value;
  }
};

addProperty(customer, 'userGithub', 'Mayrathr');
addProperty(customer, 'linkedIn', 'Mayrathr');

console.log(Object.keys(customer));