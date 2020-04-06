'use strict'

module.exports = (rawFilters) => {
    let hydrated = rawFilters.trim().split("\n")
    return hydrated;
}