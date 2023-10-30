let secant = (expression, a, b, preErr, maxIttr) => {
    let x0 = a, x1 = b, x2, fx0, fx1, fx2, i = 0, absOfx2;

    do {
        fx0 = math.evaluate(expression, {x: x0});
        fx1 = math.evaluate(expression, {x: x1});
        if (fx0 == fx1 && i == 0) return "Fx(1) - Fx(2) can't be zero, please change x1, x2";

        x2 = x1 - (fx1 * (x1 - x0)) / (fx1 - fx0);
        fx2 = math.evaluate(expression, {x: x2});
        absOfx2 = Math.abs(fx2);


        x0 = x1;
        x1 = x2;


        addToTable(i + 1, x0, x1, x2, fx2, absOfx2);
        i++;
    } while (absOfx2 > preErr && i < maxIttr);

    return x2;
};