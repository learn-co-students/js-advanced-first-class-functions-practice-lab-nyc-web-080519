const logDriverNames = function(drivers) {
    drivers.forEach(function(driver) { console.log(driver.name); } );
};

const logDriversByHometown = function(drivers, location) {
    drivers.forEach(function(driver) {
        if (driver.hometown === location) {
            console.log(driver.name);
        }
    });
};

const revenueSorter = function(driver1, driver2) {
    return driver1.revenue - driver2.revenue;
};

const driversByRevenue = function(drivers) {
    const newArr = [...drivers];
    newArr.sort(revenueSorter);
    return newArr;
};

const nameSorter = function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
}

const driversByName = function(drivers) {
    const newArr = [...drivers];
    newArr.sort(nameSorter);
    return newArr;
}

const revenueReducer = function(acc, currentValue) {
    return acc + currentValue.revenue;
}

const totalRevenue = function(drivers) {
    return drivers.reduce(revenueReducer, 0);
};

const averageRevenue = function(drivers) {
    return totalRevenue(drivers) / drivers.length;
}


