const { avg_growth, exp_growth, logistic_growth, linear_growth } = require("../helpers/growth");

const growthrate = 1.2
const annual_increase = 100
const capacity = 10


const mappingFunc= (funcName ,current_value ,  rate , yrs) => {
    if(funcName==="avg"){
        avg_growth(current_value  , rate , yrs)
    }else if(funcName === "exp"){
        exp_growth(current_value  , rate , yrs)
    }else if(funcName === "log"){
        logistic_growth(current_value ,rate  , yrs , capacity)
    }else if(funcName === "linear"){
        linear_growth(current_value , annual_increase , yrs)
    }
}

function getGrowthRange(growth, year) {
  for (const [key, range] of Object.entries(growth)) {
    if (year >= range[0] && year <= range[1]) {
      return [key , range[1]-range[0]];
    }
  }
  return null; // If year doesn't fall in any range
}

const agitateData = (data, colList) => {
  for (let i = 0; i < colList.length; i++) {
    const colDetails = colList[i];
    const year_col_name = colDetails.timeline_col;

    for (let j = 0; j < data.length; j++) {
      const [agitateFunc , years] = getGrowthRange(
        colDetails.growth,
        data[j][year_col_name]
      );
      newGrowthVal = mappingFunc(agitateFunc , data[j][colDetails.col_name]
     , growthrate , years)
      data[j][colDetails.col_name] = newGrowthVal
    }
  } 
  return data
};

const growthMiddleWare = (data, payload) => {
    for (let i = 0; i < payload.length-1; i++) {
      let agitateCol = payload[i];
      const schemaName = agitateCol["schema_name"];
      const schemaData = data[schemaName];
  
      // Alter the data using agitateData function and update the original data object
      data[schemaName] = agitateData(schemaData, agitateCol.col_list);
    }
  
    // Return the updated data object after modifications
    return data;
  };

module.exports = {
  growthMiddleWare,
};
