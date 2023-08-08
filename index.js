const greatCommon = (val1, val2) => {
    while (val1) {
       let t = val1;
       val1 = val2 % val1;
       val2 = t;

    }
    console.log(val2)
    return val2
}

greatCommon(10, 3);