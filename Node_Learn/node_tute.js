const arr = [{ a: 3 },{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 2 }, { a: 3 }];

// // final array must be
// [{a:1},{a:2},{a:3},{a:4}]

let ff = [];
ff.push(arr[0]);

// for (let i = 1; i < arr.length; i++) {
//   let ss = arr[i];
//   let flag = false;
//   for (let j = 0; j < ff.length; j++) {
//     if (ff[j]["a"] === ss.a) {
//       flag = true;
//       break;
//     }
//   }
//   if (flag === false) {
//     ff.push(ss);
//   }
// }

// console.log(ff);

// let as = []
// for(let i = 1; i < arr.length; i++){
//     uo={}
// // console.log(o.a)
// uo[Object.keys(arr[i])[0]] = arr[i].a
// as.push(uo)
// }

// console.log(as)