function Car(make, model, year, color, state, previousOwners, currentOwner, passengers){
  this.year = year;   
  this.state = 'off';
  this.previousOwners = "";
  this.currentOwner = 'Manufacturer';
  this.passengers = "";
  this.color = "";
}

Car.prototype.sale = function(newOwner){
  this.previousOwners =  ['Manufacturer'];
  this.currentOwner = "Charlie";

};

Car.prototype.paint = function(newColor){
this.color = "Blue";

};

Car.prototype.start = function(state){
this.state = "on";

};



module.exports=Car; 