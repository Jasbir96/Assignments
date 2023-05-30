function fetchByCb(fileName, cb) {
    setTimeout(function () {
        cb(`content of ${fileName}`);
    }, 1000*Math.random());
}
function fetchByPromise(fileName) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`content of ${fileName}`);
            
        }, 1000 * Math.random());
    })
}
module.exports = {
    fetchByCb,
    fetchByPromise
}