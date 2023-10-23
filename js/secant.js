let secant = (expression, a, b, preErr, maxIttr) => {
    let x0 = a, x1 = b, x2, fx0, fx1, fx2, i = 0, absOfx2;


    do {

        fx0 = evaluate(expression, x0);
        fx1 = evaluate(expression, x1);

        x2 = x1 - (fx1 * (x1 - x0)) / (fx1 - fx0);
        fx2 = evaluate(expression, x2);
        absOfx2 = Math.abs(fx2);


        x0 = x1;
        x1 = x2;


        addToTable(i + 1, x0, x1, x2, fx2, absOfx2);
        i++;
    } while (absOfx2 > preErr && i < maxIttr);

    if (i >= maxIttr) alert("Error: Maximum number of iterations reached. Increase the value if you want the calculation to continue ");

    //Check if err is bigger
    drawFunc(expression);
    return x2;
};