const names = function(driver) {
    console.log(driver.name);
};

function logDriverNames(drivers) {
    drivers.forEach(names);
};


// const logDriversByHometown = function (drivers, hometown) {
//     drivers.forEach(function (driver) {
//         if (driver.hometown === hometown) {
//             names(driver);
//         };
//     });
// };

function logDriversByHometown(drivers, hometown) {
    let selected = drivers.filter(function (driver) {
        return driver.hometown === hometown;
    })
    logDriverNames(selected);
};

const priceSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  };

function driversByRevenue(drivers) {
    const newDrivers = [...drivers];
    return newDrivers.sort(priceSorter);
};

function driversByName(drivers) {
    return [...drivers].sort(function (driver1, driver2) {
        return (driver1.name).localeCompare(driver2.name);
    });
};

const driverRevenue = function (agg, el) {
    return agg + el.revenue;
};

function totalRevenue(drivers) {
    return drivers.reduce(driverRevenue, 0);
};

function averageRevenue(drivers) {
    let total = totalRevenue(drivers);
    return total / drivers.length;
};
