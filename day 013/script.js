function sum(a, b) {
    return a+b
}

console.log(sum(1,5));

const namai = {
    zidinys: false,
    zidynysUzkurtas: false,
    uzkurtiZidini: function() {
        if (this.zidynysUzkurtas) {
            console.log(`Jau uzkurtas`);
        } else {
            this.zidynysUzkurtas = true;
            console.log(`Uzkurkuriau`);
        }
    }
}

console.log(namai.zidinys);