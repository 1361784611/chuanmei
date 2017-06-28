let extend = function (destination, sources) {
    //->为了防止对原有的对象产生影响，先把原有的对象克隆一份
    let newObj = {};
    for (let key in destination) {
        if (destination.hasOwnProperty(key)) {
            newObj[key] = destination[key];
        }
    }

    //->使用SOURCES替换原有的属性和属性值
    for (let key in sources) {
        if (sources.hasOwnProperty(key)) {
            newObj[key] = sources[key];
        }
    }

    return newObj;
};