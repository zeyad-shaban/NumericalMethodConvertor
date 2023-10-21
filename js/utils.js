const { sin, cos, tan, asin, acos, atan, sinh, cosh, tanh, asinh, acosh, atanh, log2, E } = Math;

let evaluate = (expression, x) => {
    expression = expression.replace(/ /g, "");

    expression = unaryFormatter(expression);
    expression = eFormatter(expression);
    expression = arcFormatter(expression);
    expression = powFormatter(expression);
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


let drawFunc = (expression) => {
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


let eFormatter = expression => expression.replace(/e/g, 'E');
let arcFormatter = expression => expression.replace(/arc/g, 'a');

let unaryFormatter = expression => {
    if (expression.substring(0, 2) == "-x") return expression.replace(/-x/, "-1x");
    else return expression;
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

let powFormatter = expression => expression.replace(/\^/g, '**');