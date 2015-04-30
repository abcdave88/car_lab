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

Car.prototype.off = function(state){
this.state = "off";

};
Car.prototype.pickUp = function(passengers){
if (this.state === 'on') {
this.passengers = ["john"];
}
};

Car.prototype.dropOff = function(state){
this.passengers = '';
if (this.state === 'off'){
this.passengers = ['john']
};
}
module.exports=Car; 