'use strict'

module.exports = (rawFilters) => {
    let hydrated = rawFilters.toLowerCase().trim().split("\n")
    return hydrated;
}