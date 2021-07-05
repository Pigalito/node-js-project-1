const convertSearchParamsToObject = (searchParams) => {
    const params = {};
    //TODO handle the same param being set multiple times in same request 
    for (const [key, value] of searchParams.entries()) {
        params[key] = value
    }
    return params;
};

module.exports = {
    convertSearchParamsToObject
}