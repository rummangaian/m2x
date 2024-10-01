const avg_growth = (current_value , growth_rate , years) => {
    return current_value * (1 + growth_rate) ** years
}

const exp_growth = (current_value , growth_rate , years ) => {

return  current_value * Math.exp(growth_rate * years)

}

const logistic_growth = (current_value  ,  growth_rate , years , carrying_capacity=10) => {

    return carrying_capacity / (1 + ((carrying_capacity - current_value) / current_value) *     Math.exp(-growth_rate * years))
}

const linear_growth = (current_value, annual_increase , years) => {
    return  current_value + (annual_increase * years)
}

module.exports = {
    avg_growth , exp_growth , logistic_growth , linear_growth
}