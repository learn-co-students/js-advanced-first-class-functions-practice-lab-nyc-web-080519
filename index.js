

const logDriverNames = function (arr) {
  arr.forEach( function(drvr) { console.log(drvr.name)});
}

const logDriversByHometown = function (arr, location) {
  arr.forEach(function (drvr) { if (drvr.hometown === location) { 
    console.log(drvr.name) };
  }  )}



const driversByRevenue = function (arr) {
    return arr.slice().sort( function (a, b) { return a.revenue - b.revenue;}  );
    return output;
  }


 
const driversByName = function (arr) {
    return arr.slice().sort( function (a,b) {return a.name.localeCompare(b.name)}   );
  }

// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
const totalRevenue = function (arr) {
  let totalPrice = 0;
  arr.forEach(function (driver) {
    totalPrice += driver.revenue;
  })
  return totalPrice;
}

const averageRevenue = function (arr) {
  let num_of_drivers = arr.length;
  return totalRevenue(arr)/num_of_drivers;
}

 
