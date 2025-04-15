document.addEventListener('DOMContentLoaded', ()=>{
    const result = document.getElementById('result');
    let expr = '0';
    function display() {
        result.textContent = expr;
    }
    function click(event) {
        const val = event.target.textContent;
        if (event.target.className!='action'){
            if ((expr === '0' && val != '.') || (expr === 'Error') || (expr === 'Infinity'))
                expr = val;
            else expr += val;
        }
        else if (val === 'C')
            expr = '0';
        else if (val === 'DEL'){
            if ((expr === 'Error') || (expr === 'Infinity'))
                expr = 0;
            else
                expr = expr.slice(0, -1);
        }
        else if (val === '='){
            try{
                expr = String(eval(expr));
            }
            catch(err){
                expr = "Error"
            }
        }
        display()
    }
    const buttons = document.querySelectorAll('.operator, .action, .number');
    for (let button of buttons)
        button.addEventListener('click', click)
})