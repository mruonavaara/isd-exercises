function println(item) {
    const content = document.createTextNode(String(item));
    const br = document.createElement('br');
    const elem = document.querySelector('#output');
    elem.appendChild(content);
    elem.appendChild(br);
}

function printError(item) {
    const elem = document.querySelector('#output');
    elem.classList.add('error');
    println(item);
}


function cls(e) {
    const elem = document.querySelector('#output');
    elem.innerHTML = '';
    elem.className = "";
}

function run(f, ...args) {
    try {
        println(`${f}(${args})`);
        return eval(f)(...args);
    } catch (e) {
        printError(`An error occurred of function ${f} is not defined`);
        console.error(e);
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const handlers = {
    f1: () => run("printEvens"),
    f2: () => run("fromOneTo", randomInt(2, 16)),
    f3: () => run("fromTo", randomInt(2, 10), randomInt(11, 20)),
    f4: () => run("printStars", randomInt(4, 12)),
    f5: () => run("printSquare", randomInt(3, 7)),
    f6: () => run("printRectangle", randomInt(10, 18), randomInt(2, 7)),
    f7: () => run("printTriangle", randomInt(4, 9)),
    f8: () => { 
        const a = randomInt(50, 150); 
        println(`${run("sumSeries", a)} (correct answer: ${a * (1 + a) / 2})`);
    },
    f9: () => { 
        const a = randomInt(5, 13); 
        println(`${run("factorial", a)} (correct answer: ${_(a)})`);
    },
    f10: () => run("runAll"),
    f11: () => { 
        const a = randomInt(150, 250); 
        println(`${run("recursiveSum", a)} (correct answer: ${a * (1 + a) / 2})`); 
    },
    f12: () => { 
        const a = randomInt(15, 22); 
        println(`${run("recursiveFactorial", a)} (correct answer: ${_(a)})`);
    }
}

for (const key in handlers) {
    const elem = document.createElement('div');
    elem.id = key;
    elem.textContent = key.toUpperCase();
    elem.classList.add('fn');
    elem.addEventListener('click', cls);
    elem.addEventListener('click', handlers[key]);
    document.getElementById('controls').appendChild(elem);
}

const _= __ => __ >= 1 ? __*_(--__): 1;
