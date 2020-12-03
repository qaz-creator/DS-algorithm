const reverse = x => {
    const limit = 2147483648;
    // get a factor
    const k = x < 0 ? -1 : 1;
    
    //get the reverse with abs value
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};
