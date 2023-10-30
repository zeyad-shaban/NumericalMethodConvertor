let newton = (expression, a, b, preErr, maxIttr) => {
    // * need to fix the error calculation, and other netwon ruphson stuff
    let d_expression = math.derivative(expression, 'x');
    let x = a, fx, d_fx, xnew, err = 1;

    let i = 0;
    do {
        let fx = math.evaluate(expression, { x });
        let d_fx = d_expression.evaluate({ x });

        xnew = x - fx / d_fx;

        err = Math.abs((xnew - x) / xnew);
        addToTable(i + 1, x, b, xnew, fx, err); // needs work
        x = xnew;
        i++;
    } while (err > preErr && i < maxIttr);

    return xnew;
};