const { sin, cos, tan, asin, acos, atan, sinh, cosh, tanh, asinh, acosh, atanh, log2, E: e, log } = Math;

let evaluate = (expression, x) => {
    expression = expression.toLowerCase();
    expression = expression.replace(/ /g, "");

    if (expression.substring(0, 2) == "-x") expression.replace(/-x/, "-1x");
    expression = expression.replace(/arc/g, 'a');
    expression = expression.replace(/\^/g, '**');
    expression = expression.replace(/ln/g, log)
    expression = multFormatter(expression);

    expression = expression.replace(/x/g, `(${x})`);
    return eval(expression);
};


let addToTable = (step, x1, x2, x3, fnx3, err) => {
    let itterBody = document.querySelector("#itterBody");
    itterBody.innerHTML += `
                <tr>
                    <th scope="row">${step}</th>
                    <td>${x1}</td>
                    <td>${x2}</td>
                    <td>${x3}</td>
                    <td>${fnx3}</td>
                    <td>${err}</td>
                </tr>   
            `;
};


let drawFunc = expression => {
    let contentsBounds = document.body.getBoundingClientRect();
    let width = 800;
    let height = 500;
    let ratio = contentsBounds.width / width;
    width *= ratio / 2;
    height *= ratio / 2;

    functionPlot({
        target: "#root",
        width,
        height,
        yAxis: { domain: [-1, 9] },
        grid: true,
        data: [
            {
                fn: expression.replace(/ e/g, ' exp'),
                // derivative: {
                //     fn: "e^2",
                //     updateOnMouseMove: true
                // }
            }
        ]
    });
};


let multFormatter = expression => {
    let modifiedExpression = expression[0];
    for (let i = 1; i < expression.length; i++) {
        let letter = expression[i];
        let prevLetter = expression[i - 1];

        if (letter == 'x' && (!isNaN(parseFloat(prevLetter)) && isFinite(prevLetter) || prevLetter == ')'))
            modifiedExpression += '*x';
        else
            modifiedExpression += letter;
    }

    return modifiedExpression;
};
