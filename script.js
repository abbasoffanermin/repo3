//Task1
//verilən ədədin cüt və ya tək olmasını tapmaq
function finder(params) {
    if (params % 2 == 0) {
        console.log('Ədəd cütdür.');
    } else {
        console.log('Ədəd təkdir.');
    }
}
//Task2
//Faktorial hesablama
function factorialFinder(params) {
    let a = 1
    for (let index = 1; index <= params; index++) {
        a *= index

    }
    return console.log(a);
}
factorialFinder(5)
//Task3
//ədəd dövrü
function loap(params) {
    let a = 0
    for (let index = 0; index < params; index++) {
        console.log(index);

    }
}