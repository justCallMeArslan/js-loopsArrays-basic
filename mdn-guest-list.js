const people = [
    "Chris",
    "Anne",
    "Colin",
    "Terri",
    "Phil",
    "Lola",
    "Sam",
    "Kay",
    "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";


for (const person of people) {
    if (person === "Phil" || person === "Lola") {
        refused.textContent += `${person}, `
    } else {
        admitted.textContent += `${person}, `
    }
}

refused.textContent = `${refused.textContent.slice(0, -2)}.`; //takes space and , from line 21 and 23 and adds .
admitted.textContent = `${admitted.textContent.slice(0, -2)}.`;
