// //find output:

// let p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");

//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);

//     resolve("some error");

//     setTimeout(function () {
//         reject(new Error("some value"));
//     }, 2000);
// });


// p.then(null, function (err) {
//     console.log(1);
//     console.log(err);
// });

// p.catch(function (err) {
//     console.log(2);
//     console.log(err);
// });

// p.finally(function () {
//     console.log(1);
// })

// p.finally(function () {
//     console.log(2);
// }).then(function (val) {
//     console.log(val);
// })

// p.then(
//     function (val) {
//         console.log(val);
//     },
//     function (err) {
//         console.log(err);
//     }
// );


// Options:

// 1) Error

// 2)

// 1
// 2
// some error
// some error

// 3) Not work

// 4)

// 1
// 2
// some value
// some value

// Solution:
// 2