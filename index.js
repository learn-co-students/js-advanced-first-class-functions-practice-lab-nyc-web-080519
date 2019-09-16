function logDriverNames(arr) {
    arr.forEach(function(ele) {
        console.log(ele.name)
    });
}

// const logDriverNames = function(drivers) {
//     drivers.forEach(function(driver) {
//         console.log(driver.name);
//     });
// }

function logDriversByHometown(arr, hometown) {
    arr.forEach(function(driver) {
        if (driver.hometown === hometown) {
            console.log(driver.name)
        };
    });
}

// const logDriversByHometown = function(drivers, hometown) {
//     drivers.forEach(function(driver){
//         if(driver.hometown === hometown) {
//             console.log(driver.name)
//         };
//     });
// }


// arr.slice will return a new array

const numberSorter = function(num1, num2) {
    return num1 - num2
}

function driversByRevenue(arr) {
    return arr.slice().sort(function(ele1, ele2){
        return numberSorter(ele1.revenue, ele2.revenue)
    });
}

// const driversByRevenue = function(drivers) {
//     return drivers.sort(function(driver1, driver2) {
//         return numberSorter(driver1.revenue, driver2.revenue);
//     });
// };

// const driversByRevenue = function (drivers) {
//     return drivers.slice().sort(function (driverOne, driverTwo) {
//         return driverOne.revenue - driverTwo.revenue;
//     });
// };


function driversByName(drivers){
    return drivers.slice().sort(function(driver1, driver2) {
        return driver1.name.localeCompare(driver2.name);
    });
}

// const driversByName = function(drivers) {
//     return drivers.slice().sort(function(d1, d2){
//         return d1.name.localeCompare(d2.name);
//     });
// }

function totalRevenue(drivers) {
    return drivers.reduce(function(total, driver){
        return total += driver.revenue;
    }, 0);
}


// how come += works as well as + 
// const totalRevenue = function(drivers) {
//     return drivers.reduce(function(reducer, driver){
//         return reducer + driver.revenue;
//     }, 0)
// }


function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length
}

// const averageRevenue = function(drivers) {
//     return totalRevenue(drivers) / drivers.length
// }
