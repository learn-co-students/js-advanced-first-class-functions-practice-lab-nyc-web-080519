const logDriverNames = function(drivers) {
    drivers.forEach(function (driver) {
        console.log(driver.name);
    });
}

const logDriversByHometown = function(drivers, town) {
    drivers.forEach(function (driver) {
        if (driver.hometown === town) { console.log(driver.name) }
    });
}

const driversByRevenue = function(drivers) {
    // USE .slice() HERE IN ORDER TO MAKE IT NON-DESTRUCTIVE
    return drivers.slice().sort(function (a,b) {
        return a.revenue - b.revenue;
    });
    //      OR  (if you wanna use a arrow function)
    //return drivers.slice().sort((a, b) => { return a.revenue - b.revenue })
}

const driversByName = function(drivers) {
    return drivers.slice().sort(function (a, b) {
        return (a.name).localeCompare(b.name);
    });
}

const totalRevenue = function(drivers) {
    const revenues = drivers.map( x => x.revenue )

    let reduced = revenues.reduce(function(total, driverRev) {
        return driverRev + total;
    }, 0);

    return reduced;
}

const averageRevenue = function(drivers) {
    return totalRevenue(drivers)/drivers.length
}