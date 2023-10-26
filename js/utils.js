const { sin, cos, tan, asin, acos, atan, sinh, cosh, tanh, asinh, acosh, atanh, log2, log10, log, PI: pi } = Math;
const mathFuncs = ['sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'sinh', 'cosh', 'tanh', 'asinh', 'acosh', 'atanh', 'log2', 'log10', 'log', 'pi'];

let evaluate = (fx, x) => {
    fx = fx.replace(/x/g, `(${x})`);
    fx = multFormatter(fx);

    return eval(fx);
};

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
                // derivative: {
                //     fn: "e^2",
                //     updateOnMouseMove: true
                // }
                graphType: 'polyline'
            }
        ]
    });
};


let formatExpression = fx => {
    fx = fx.toLowerCase().replace(/ /g, "");
    fx = fx.replace(/(\d)e/g, `$1*${Math.E}`).replace(/ /g, "").replace(/e/g, Math.E);
    fx = fx.replace(/(\d)pi/g, `$1*${Math.PI}`).replace(/pi/g, Math.PI);

    mathFuncs.forEach(func => {
        let regex = new RegExp("(\\d+)" + func, "g");
        fx = fx.replace(regex, "$1*" + func);
    });
    if (fx.substring(0, 2) == "-x") fx.replace(/-x/, "-1x");

    fx = fx.replace(/arc/g, 'a').replace(/\^/g, '**').replace(/ln/g, "log");
    fx = multFormatter(fx);
    fx = fx.replace(/--/g, '+');

    return fx;
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
