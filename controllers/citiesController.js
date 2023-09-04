import Cities from '../cities.js'

const citiesController = {
    getAllCities: (req, res, next) => {
        res.json({
            res: Cities,
            succ: true,
            error: null
        })
    },
    getOneCity: (req, res, next) => {
        res.json({
            res: Cities[0],
            succ: true,
            error: null
        })
    }

}

export default citiesController