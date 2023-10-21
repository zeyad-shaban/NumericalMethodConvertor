let dataSubmittedHandler = e => {
    e.preventDefault();
    document.querySelector("#itterBody").innerHTML = '';

    expression = document.querySelector("#expression").value;
    x1 = parseFloat(document.querySelector("#x1").value);
    x2 = parseFloat(document.querySelector("#x2").value);
    preErr = parseFloat(document.querySelector("#preErr").value || preErr);
    maxItter = parseFloat(document.querySelector("#maxItter").value || maxItter);
    method = document.querySelector("#method").value;

    (expression, x1, x2, preErr, maxItter);
    if (method == 'bisection') xroot = bisection(expression, x1, x2, preErr, maxItter)
    if (method == 'falsePosition') xroot = falsePosition(expression, x1, x2, preErr, maxItter);
    if (method == 'secant') secant(expression, x1, x2, preErr, maxItter)

    document.querySelector("#xroot").innerHTML = `Xroot = ${xroot}`;
};