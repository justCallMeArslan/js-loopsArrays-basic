const output = document.querySelector(".output");
output.textContent = "";



for (let i = 11; i >= 0, i--;) {
    const para = document.createElement("p");

    if (i === 10) {
        para.textContent = `Countdown ${i}`;
    } else if (i == 0) {
        para.textContent = "Blast off!"
    } else {
        para.textContent = `${i}`
    }
    output.appendChild(para);
}


// or


let i = 10;

while (i >= 0) {
    const para = document.createElement("p");

    if (i === 10) {
        para.textContent = `Countdown ${i}`;
    } else if (i == 0) {
        para.textContent = "Blast off!"
    } else {
        para.textContent = `${i}`
    }
    output.appendChild(para);

    i--;

}


// or 

let x = 10;

do {
    const para = document.createElement("p");

    if (x === 10) {
        para.textContent = `Countdown ${x}`;
    } else if (x == 0) {
        para.textContent = "Blast off!"
    } else {
        para.textContent = `${x}`
    }
    output.appendChild(para);

    x--;

} while (x >= 0);