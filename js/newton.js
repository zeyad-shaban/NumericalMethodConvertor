let newton = (expression, a, b, preErr, maxIttr) => {
    let allRoots = [];

    let d_expression = math.derivative(expression, 'x');
    let x = a, fx, d_fx, xnew, err = 1

    let i = 0;
    do {
        fx = math.evaluate(expression, { x });
        d_fx = d_expression.evaluate({ x });
        if (d_fx == 0) return "Can't devide by Zero" 

        xnew = x - fx / d_fx;

        err = Math.abs(xnew - x);
        addToTable(i + 1, x, b, xnew, fx, err); // needs work
        x = xnew;

        if (allRoots.includes(x)) return "Cycle Detected";
        allRoots.push(x);
        i++;
    } while (err > preErr && i < maxIttr);

    return xnew;
};

/*
Exmaples of error handles i had
Cycle: x * e^-x, initial guess: bigger than 1 HANDELED
Runaway: (x-2)(x-1)x*(-(9x^2/8)+(21x/8)-0.5)+1, initial guess: 0 NOT HANDELED
flat spot: x^4, with initial guess: 0
*/