let falsePosition = (expression, a, b, preErr, maxIttr) => {
    let x1 = a, x2 = b, x3 = 0, err = 1;

    let i = 0;
    while (err > preErr && i < maxIttr) {
        let fnx1 = evaluate(expression, x1);
        let fnx2 = evaluate(expression, x2);
        
        if (fnx2 - fnx1 == 0) break;


        x3 = x1 - ((x2 - x1) * fnx1 / (fnx2 - fnx1));
        let fnx3 = evaluate(expression, x3);

        if (fnx3 * fnx1 < 0) x2 = x3;
        else if (fnx3 * fnx2 < 0) x1 = x3;
        else {
            break
        }

        err = Math.abs(x3 - x2);
        addToTable(i + 1, x1, x2, x3, fnx3, err)
        i++;
    }

    drawFunc(expression)

    return x3;
};