/**
 * Using let keyword.
 */

async function closure() {
    for(var i = 1; i< 100; i++) {
        setTimeout(async function() {
            console.log(i);
        }, 1)
    }
}

/**
* Using let keyword.
*/

// async function closure() {
//     for(let i = 1; i< 100; i++) {
//         setTimeout(async function() {
//             console.log(i);
//         }, 1)
//     }
//     // await sleep (20000);
// }

/**
 * using var and passing the variable to the function
 */

// async function closure() {
//     for(var i = 1; i< 100; i++) {
//         function close(i) {
//             setTimeout(async function() {
//                 console.log(i);
//             }, 1);
//         }
//         close(i);
//     }
// }
// async function sleep(milliseconds) {
//     setTimeout(function() { }, milliseconds);
// }


closure();