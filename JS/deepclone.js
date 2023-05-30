// Q - Create a function which deep clones the object

Solution:

let superClone = (object) => {
    let cloning = {};

    Object.keys(object).map((prop) => {
        if (Array.isArray(object[prop])) {
            cloning[prop] = [].concat(object[prop]);
        } else if (typeof object[prop] === "object") {
            cloning[prop] = superClone(object[prop]);
        } else cloning[prop] = object[prop];
    });

    return cloning;
};