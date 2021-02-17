const number = document.querySelectorAll(".number");
const screen = document.querySelector(".header");
const equal = document.querySelector(".equal");
const reset = document.querySelector("#cancel");
const operator = document.querySelectorAll(".operator");

for (numbers of number) {
    numbers.addEventListener("click", function () {
        screen.textContent = screen.textContent + this.textContent;
    })

    numbers.addEventListener("keypress", function (e) {
        if (e.key === this.textContent) {
            screen.textContent = screen.textContent + this.textContent;
        }
    })
}

for (operators of operator) {
    operators.addEventListener("click", function () {
        if (screen.textContent !== "") {
            screen.textContent = screen.textContent + this.textContent;
        } else {
            alert("ERROR, YOU CAN'T PUT AN OPERATOR FIRST")
        }
    })
}

document.addEventListener("keypress", function (e) {
    if (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === "/" || e.key === "*" || e.key === "-" || e.key === "+" || e.key === ".") {
        screen.textContent = screen.textContent + e.key;
    }
})

equal.addEventListener("click", async function () {
    try {
        screen.textContent = (eval(screen.textContent))
    } catch (err) {
        alert(err)
    }
})

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        try {
            screen.textContent = (eval(screen.textContent))
        } catch (err) {
            alert(err)
            screen.textContent = "";
        }
    }
});

cancel.addEventListener("click", function () {
    screen.textContent = "";
})

document.addEventListener('keypress', function (e) {
    if (e.key === 'c') {
        screen.textContent = "";
    }
});