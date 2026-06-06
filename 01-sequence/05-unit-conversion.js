// UC 5: Unit conversions

// a) 1 ft = 12 inch, so 42 inch = ? ft
const inches = 42;
const feet = inches / 12;
console.log(`${inches} inches = ${feet} feet`);

// b) Rectangular plot 60 feet x 40 feet in meters
const lengthFeet = 60;
const breadthFeet = 40;
const feetToMeter = 0.3048;
const lengthMeter = lengthFeet * feetToMeter;
const breadthMeter = breadthFeet * feetToMeter;
console.log(`Plot in meters = ${lengthMeter} m x ${breadthMeter} m`);

// c) Area of 25 such plots in acres
const areaOnePlotSqFeet = lengthFeet * breadthFeet;
const area25PlotsSqFeet = areaOnePlotSqFeet * 25;
const sqFeetToAcre = 1 / 43560;
const areaInAcres = area25PlotsSqFeet * sqFeetToAcre;
console.log(`Area of 25 plots = ${areaInAcres} acres`);
