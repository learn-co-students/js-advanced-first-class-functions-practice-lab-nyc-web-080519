// Code your solution in this file!
// Code your solution in this file!
//logDriverNames() — Receives an array of driver objects and logs the name attribute of each driver to the console.
const logDriverNames = (drivers) => {
    drivers.forEach(driver => {
      console.log(driver.name)
    });
   }
   //logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
   const logDriversByHometown = (drivers, location) => {
    drivers.forEach(driver => {
      if(location == driver.hometown)
      console.log(driver.name)
    });
   }
   //driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
   const driversByRevenue = (drivers) => {
    function compare(a,b){
      const driverA = a.revenue
      const driverB = b.revenue
      let comparison = 0;
      if (driverA > driverB){
        comparison = 1;
      } else if (driverA < driverB) {
        comparison = -1;
      }
      return comparison
    }
    const newDriversArr = drivers.slice().sort(compare)
    return newDriversArr
   }
   //better way:
   /*const driversByRevenue = function (drivers) {
   return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
   });
   };
   */
   //driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
   const driversByName = (drivers) =>  {
    function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
    return drivers.slice().sort(compare);
   }
   /* shorter way -
    const driversByName = function (drivers) {
      return drivers.slice().sort(function (driverOne, driverTwo) {
        return driverOne.name.localeCompare(driverTwo.name);
    });
   };
   */
   //totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
   const totalRevenue = (drivers) => {
    const actualTotal = drivers.reduce(function(total, driver){
      return total + driver.revenue; }, 0)
    return actualTotal
   }
   //averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
   const averageRevenue = (drivers) => {
    const actualTotal = drivers.reduce(function (total, driver) {
      return total + driver.revenue;
    }, 0)
    return actualTotal / drivers.length
   }