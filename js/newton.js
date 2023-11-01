let newton = (expression, a, b, preErr, maxIttr) => {
    let d_expression = math.derivative(expression, 'x');
    let x = a, fx, d_fx, xnew, err = 1;

    let i = 0;
    do {
        fx = math.evaluate(expression, { x });
        d_fx = d_expression.evaluate({ x });

        xnew = x - fx / d_fx;

        err = Math.abs(xnew - x);
        console.log(`xnew: ${xnew} == x: ${x}`);
        addToTable(i + 1, x, b, xnew, fx, err); // needs work
        x = xnew;
        i++;
    } while (err > preErr && i < maxIttr);

    return xnew;
};