const { sin, cos, tan, asin, acos, atan, sinh, cosh, tanh, asinh, acosh, atanh, log2, log10, log, PI: pi } = Math;
const mathFuncs = ['sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'sinh', 'cosh', 'tanh', 'asinh', 'acosh', 'atanh', 'log2', 'log10', 'log', 'pi'];

let addToTable = (step, x1, x2, x3, fnx3, err, fixedDeci = 5) => {
    let itterBody = document.querySelector("#itterBody");
    itterBody.innerHTML += `
                <tr>
                    <th scope="row">${step}</th>
                    <td>${x1.toFixed(fixedDeci)}</td>
                    <td>${x2.toFixed(fixedDeci)}</td>
                    <td>${x3.toFixed(fixedDeci)}</td>
                    <td>${fnx3.toFixed(fixedDeci)}</td>
                    <td>${err.toFixed(fixedDeci)}</td>
                </tr>   
            `;
};

let drawFunc = fx => {
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
                fn: fx,
                derivative: {
                    fn: math.derivative(fx, "x").toString(),
                    updateOnMouseMove: true
                },
                graphType: 'polyline'
            }
        ]
    });
};

let multFormatter = fx => {
    let modifiedExpression = fx[0];
    for (let i = 1; i < fx.length; i++) {
        let letter = fx[i];
        let prevLetter = fx[i - 1];

        if (letter == 'x' && (!isNaN(parseFloat(prevLetter)) && isFinite(prevLetter) || prevLetter == ')'))
            modifiedExpression += `*x`;
        else if (letter == '(' && prevLetter == ')') modifiedExpression += '*(';
        else
            modifiedExpression += letter;
    }

    return modifiedExpression;
};
