let bisection = (expression, a, b, preErr, maxIttr) => {
    let left = a;
    let right = b;
    let mid = (left + right) / 2;

    let epsilon_S = preErr;

    const k = Math.log2((right - left) / epsilon_S);
    const maxIttrCeil = Math.ceil(k);

    let f_l = evaluate(expression, left);
    let f_r = evaluate(expression, right);

    if (f_l * f_r >= 0) return "X ROOT NOT BETWEEN";

    let f_mid = evaluate(expression, mid);

    for (let i = 0; i < maxIttrCeil; i++) {
        mid = (left + right) / 2;
        f_mid = evaluate(expression, mid);
        if (f_l * f_mid < 0) right = mid;
        else if (f_mid * f_l > 0) left = mid;
        addToTable(i + 1, left, right, mid, f_mid, epsilon_S);
    }

    drawFunc(expression);
    return mid;
};