// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function(driver) {
        console.log(driver.name);
    });
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(function(driver) {
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    })
}

function driversByRevenue(drivers) {
    const mappedDrivers = drivers.map(function(driver) {return driver;});
    mappedDrivers.sort(function(driver1, driver2) {
        return driver1.revenue - driver2.revenue;
    })
    return mappedDrivers;
}

function driversByName(drivers) {
    const mappedDrivers = drivers.map(function(driver) {return driver;});
    mappedDrivers.sort(function(driver1, driver2) {
        return driver1.name.localeCompare(driver2.name);
    })
    return mappedDrivers;
}

function totalRevenue(drivers) {
    return drivers.reduce(function(agg, driver) {
        return driver.revenue + agg;
    }, 0)
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}