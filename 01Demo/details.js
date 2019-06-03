var person = {
    firstName : 'roky',
    lastName  : 'roy',
    id : 2001 ,
    fullName : function(){return this.firstName + " " + this.lastName;}
   
};
console.info(person.fullName())
//console.info(person.firstName + " " + person.lastName);