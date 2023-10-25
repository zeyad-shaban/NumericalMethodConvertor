let bisection = (expression, a, b, preErr, maxIttr) => {
    let left = a;
    let right = b;
    let mid = (left + right) / 2;

    let epsilon_S = 1;

    let f_l = evaluate(expression, left);
    let f_r = evaluate(expression, right);

    if (f_l * f_r >= 0) return "ROOT NOT BETWEEN";

    let i = 0;
    do {
        mid = (left + right) / 2;
        let f_mid = evaluate(expression, mid);

        epsilon_S = Math.abs((left - right) / 2);
        addToTable(i + 1, left, right, mid, f_mid, epsilon_S);

        if (f_l * f_mid < 0) {
            right = mid;
            f_r = f_mid;
        } else {
            left = mid;
            f_l = f_mid;
        }

        i++;
    } while (epsilon_S > preErr && i < maxIttr);

    return mid;
};
