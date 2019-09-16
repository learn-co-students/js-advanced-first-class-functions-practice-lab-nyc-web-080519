// Code your solution in this file!
const logDriverNames = drivers => {
  drivers.forEach(driver => console.log(driver.name))
};

const logDriversByHometown = (drivers, location) => {
  drivers.forEach(driver => {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
};

const driversByRevenue = drivers => {
  return [...drivers].sort((a, b) => (a.revenue > b.revenue) ? 1 : -1);
};

const driversByName = drivers => {
  return [...drivers].sort((a, b) => {
    return a["name"].localeCompare(b["name"]);
  });
};

const totalRevenue = drivers => {
  return drivers.reduce((acc, driver) => {
    return acc + driver.revenue;
  };
};

const averageRevenue = drivers => {
  return totalRevenue(drivers) / drivers.length
}

