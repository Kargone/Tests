function getFormatedNumber(number = 0) {
    let suffixes = ['K', 'M', 'B', 'T', 'Q'];
    if (number < 1000) return `${number}`;
    for (let suffix_key in suffixes) {
        suffix_key = parseInt(suffix_key);
        const suffex = suffixes[suffix_key];
        const lower_bound = Math.pow(1000, suffix_key + 1);
        const upper_bound = Math.pow(1000, suffix_key + 2);
        if ((lower_bound <= number) && (number < upper_bound)) {
            number /= lower_bound;
            number = String(number).substring(0, 4);
            if (number.substring(3, 4) === '.') return number.substring(0, 3) + suffex;
            return number + suffex;
        }
    }
    return 'ERROR';
}

console.log('0', getFormatedNumber());
console.log('1', getFormatedNumber(1));
console.log('12', getFormatedNumber(12));
console.log('123', getFormatedNumber(123));
console.log('1234', getFormatedNumber(1234));
console.log('12345', getFormatedNumber(12345));
console.log('123456', getFormatedNumber(123456));
console.log('1234567', getFormatedNumber(1234567));
console.log('12345678', getFormatedNumber(12345678));
console.log('123456789', getFormatedNumber(123456789));
console.log('1234567891', getFormatedNumber(1234567891));
console.log('12345678912', getFormatedNumber(12345678912));
console.log('123456789123', getFormatedNumber(123456789123));
console.log('1234567891234', getFormatedNumber(1234567891234));
console.log('12345678912345', getFormatedNumber(12345678912345));
console.log('123456789123456', getFormatedNumber(123456789123456));
console.log('1234567891234567', getFormatedNumber(1234567891234567));