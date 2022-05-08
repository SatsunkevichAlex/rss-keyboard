const tildaRowSymbols = [
    ["`", "~"],
    ["1", "!"],
    ["2", "@"],
    ["3", "#"],
    ["4", "$"],
    ["5", "%"],
    ["6", "^"],
    ["7", "&"],
    ["8", "*"],
    ["9", "("],
    ["0", ")"],
    ["-", "_"],
    ["=", "+"],
];

const tabRowLetters = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p"
];

const tabRowSymbols = [
    ["[", "{"],
    ["]", "}"],
    ["\\", "|"]
];

const capsRowLetters = [
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l"
];

const capsRowSymbols = [
    [";", ":"],
    ["'", "\""]
];

const shiftRowLetters = [
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m"
]

const shiftRowSymbols = [
    [",", "<"],
    [".", ">"],
    ["/", "?"]
]

const ctrlRowSymbols = [
    "Ctrl",
    "Win",
    "Alt",
    "Space",
    "Alt",
    "Ctrl",
    "&larr;",
    "&darr;",
    "&rarr;"
]

const letterDict = [
    ["q", "й"],
    ["w", "ц"],
    ["e", "у"],
    ["r", "к"],
    ["t", "е"],
    ["y", "н"],
    ["u", "г"],
    ["i", "ш"],
    ["o", "щ"],
    ["p", "з"],
    ["a", "ф"],
    ["s", "ы"],
    ["d", "в"],
    ["f", "а"],
    ["g", "п"],
    ["h", "р"],
    ["j", "о"],
    ["k", "л"],
    ["l", "д"],
    ["z", "я"],
    ["x", "ч"],
    ["c", "с"],
    ["v", "м"],
    ["b", "и"],
    ["n", "т"],
    ["m", "ь"]
]

createElements();
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);
document.getElementById('keyboard')
    .addEventListener('mousedown', handleKeyDown);
document.getElementById('keyboard')
    .addEventListener('mouseup', handleKeyUp);

function handleKeyDown(event) {
    if (handleLanguageChange(event)) {
        return;
    }
    if (handlePressCaps(event)) {
        return;
    }
    if (handlePressTab(event)) {
        return;
    }
    if (handlePressCtrl(event)) {
        return;
    }
    if (handlePressShift(event)) {
        return;
    }
    if (handlePressAlt(event)) {
        return;
    }
    if (handlePressSpace(event)) {
        return;
    }
    if (handlePressBackSpace(event)) {
        return;
    }
    if (handlePressDelete(event)) {
        return;
    }
    if (handlePressWin(event)) {
        return;
    }
    if (handlePressArrow(event)) {
        return;
    }
    if (handlePressEnter(event)) {
        return;
    }

    let clicked = event.target;
    let textArea = document.getElementById('write');
    if (clicked.classList.length > 0 && event.type === 'mousedown') {
        let charToAdd = clicked.textContent.slice(0, 1);
        let className = clicked.className;
        let element = document.getElementsByClassName(
            className)[0];
        if (clicked.nodeName === 'SPAN') {
            clicked = clicked.closest("div");
            charToAdd = clicked.childNodes[0].textContent;
        }
        element.style.backgroundColor = 'red';
        if (event.shiftKey) {
            textArea.textContent += charToAdd.toUpperCase();
        } else {
            textArea.textContent += charToAdd;
        }
        const end = textArea.value.length;
        textArea.setSelectionRange(end, end);
        return true;
    }

    let key = event.key;
    if (key) {
        let pressed = document.getElementsByClassName(key.toLowerCase())[0];
        if (pressed && pressed.nodeName === 'div') {
            pressed = pressed.closest("div");
        }
        if (pressed) {
            pressed.style.backgroundColor = 'red';
            pressed.classList.toggle("border");
            setTimeout(() => { pressed.classList.toggle("border") }, 150);
            textArea.textContent += event.key;
        }
    }

    const end = textArea.value.length;
    textArea.setSelectionRange(end, end);
}

function handleLanguageChange(event) {
    if (event.altKey === true && event.shiftKey === true) {
        let flag = document.querySelector('#tab-row > :nth-child(2)');
        if (flag && flag.textContent === 'q') {
            let letters = [];
            letterDict.forEach(it => {
                let english = document.querySelector(`.${it[0]}`);
                letters.push(english);
            })
            let bracketRigth = document.getElementsByClassName('[')[0];
            let bracketLeft = document.getElementsByClassName(']')[0];
            letters.push(bracketLeft);
            letters.push(bracketRigth);

            letters.forEach(letter => {
                let letterText = letter.textContent;
                var foundPairs = letterDict
                    .filter(it => it[0] === letterText);
                if (foundPairs.length > 0) {
                    let keyValueWithRus = foundPairs[0];
                    let russian = keyValueWithRus[1];
                    letter.textContent = russian;
                    letter.className = russian;
                }
            });
            let alt = document.querySelector('.alt');
            alt.style.backgroundColor = 'white';
            let keyboard = document.getElementById('keyboard');
            localStorage.setItem('keyboard', keyboard.outerHTML);
            return;
        }
        else {
            let letters = [];
            letterDict.forEach(it => {
                let russian = document.querySelector(`.${it[1]}`);
                letters.push(russian);
            });

            letters.forEach(letter => {
                var english = letterDict.filter(it =>
                    it[1] === letter.textContent)[0][0];
                letter.textContent = english;
                letter.className = english;
            });
            let alt = document.querySelector('.alt');
            alt.style.backgroundColor = 'white';
            let keyboard = document.getElementById('keyboard');
            localStorage.setItem('keyboard', keyboard.outerHTML);
            return;
        }
    }
}

function handleKeyUp(event) {
    if (handleUnPressCaps(event)) {
        return;
    }
    if (handleUnPressTab(event)) {
        return;
    }
    if (handleUnPressCtrl(event)) {
        return;
    }
    if (handleUnPressShift(event)) {
        return;
    }
    if (handleUnPressAlt(event)) {
        return;
    }
    if (handleUnPressSpace(event)) {
        return;
    }
    if (handleUnPressBackSpace(event)) {
        return;
    }
    if (handleUnPressWin(event)) {
        return;
    }
    if (handleUnPressArrow(event)) {
        return;
    }
    if (handleUnPressEnter(event)) {
        return;
    }
    if (handleUnPressDelete(event)) {
        return;
    }

    let clicked = event.target;
    if (clicked.classList.length > 0 && event.type === 'mouseup') {
        let className = clicked.className;
        let element = document.getElementsByClassName(
            className)[0];
        element.style.backgroundColor = 'white';
        return true;
    }

    let key = event.key;
    if (key) {
        let pressed = document.getElementsByClassName(key.toLowerCase())[0];
        if (pressed) {
            if (pressed.nodeName === 'div') {
                pressed = pressed.closest("div");
            }
            pressed.style.backgroundColor = 'white';
        }
    }
}

function handlePressArrow(event) {
    let arrow;
    let clickedClass = event.target.className;
    if (clickedClass.length > 0) {
        switch (clickedClass) {
            case "&larr;":
                arrow = document.getElementsByClassName("&larr;")[0];
                break;
            case "&rarr;":
                arrow = document.getElementsByClassName("&rarr;")[0];
                break;
            case "&uarr;":
                arrow = document.getElementsByClassName("&uarr;")[0];
                break;
            case "&darr;":
                arrow = document.getElementsByClassName("&darr;")[0];
                break;
        }
    } else {
        switch (event.key) {
            case 'ArrowLeft':
                arrow = document.getElementsByClassName("&larr;")[0];
                break;
            case 'ArrowRight':
                arrow = document.getElementsByClassName("&rarr;")[0];
                break;
            case 'ArrowUp':
                arrow = document.getElementsByClassName("&uarr;")[0];
                break;
            case 'ArrowDown':
                arrow = document.getElementsByClassName("&darr;")[0];
                break;
        }
    }
    let textarea = document.getElementById('write');
    if (arrow) {
        arrow.classList.toggle("border");
        setTimeout(() => { arrow.classList.toggle("border") }, 150);

        textarea.textContent += arrow.textContent;
        arrow.style.backgroundColor = 'red';
        const end = textarea.value.length;
        textarea.setSelectionRange(end, end);
        return true;
    }
}

function handleUnPressArrow(event) {
    let arrow;
    let clickedClass = event.target.className;
    if (clickedClass.length > 0) {
        switch (clickedClass) {
            case "&larr;":
                arrow = document.getElementsByClassName("&larr;")[0];
                break;
            case "&rarr;":
                arrow = document.getElementsByClassName("&rarr;")[0];
                break;
            case "&uarr;":
                arrow = document.getElementsByClassName("&uarr;")[0];
                break;
            case "&darr;":
                arrow = document.getElementsByClassName("&darr;")[0];
                break;
        }
    } else {
        switch (event.key) {
            case 'ArrowLeft':
                arrow = document.getElementsByClassName("&larr;")[0];
                break;
            case 'ArrowRight':
                arrow = document.getElementsByClassName("&rarr;")[0];
                break;
            case 'ArrowUp':
                arrow = document.getElementsByClassName("&uarr;")[0];
                break;
            case 'ArrowDown':
                arrow = document.getElementsByClassName("&darr;")[0];
                break;
        }
    }
    if (arrow) {
        arrow.style.backgroundColor = 'white';
        return true;
    }
}

function handlePressBackSpace(event) {
    let clicked = event.target;
    if (clicked.className === 'backspace') {
        clicked.style.backgroundColor = 'red';
        clicked.classList.toggle("border");
        setTimeout(() => { clicked.classList.toggle("border") }, 150);
        let textArea = document.getElementById('write');
        let selectionStart = textArea.selectionStart;
        let textContent = textArea.textContent;
        textArea.textContent =
            textContent.slice(0, selectionStart - 1) +
            textContent.slice(selectionStart, textContent.length);

        textArea.setSelectionRange(selectionStart - 1, selectionStart - 1);

        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() === 'backspace') {
        let pressed = document.getElementsByClassName("backspace")[0];

        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);

        pressed.style.backgroundColor = 'red';
        let textArea = document.getElementById('write');
        let selectionStart = textArea.selectionStart;
        let textContent = textArea.textContent;
        textArea.textContent =
            textContent.slice(0, selectionStart - 1) +
            textContent.slice(selectionStart, textContent.length);

        textArea.setSelectionRange(selectionStart - 1, selectionStart - 1);
        return true;
    }
}

function handlePressDelete(event) {
    let pressed = event.target;
    if (pressed.className === 'delete') {
        pressed.style.backgroundColor = 'red';

        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);

        let textArea = document.getElementById('write');
        let selectionStart = textArea.selectionStart;
        let textContent = textArea.textContent;
        textArea.textContent =
            textContent.slice(0, selectionStart) +
            textContent.slice(selectionStart + 1, textContent.length);

        textArea.setSelectionRange(selectionStart, selectionStart);

        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() == 'delete') {
        let pressed = document.getElementsByClassName('delete')[0];
        pressed.style.backgroundColor = 'red';

        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);

        let textArea = document.getElementById('write');
        let selectionStart = textArea.selectionStart;
        let textContent = textArea.textContent;
        textArea.textContent =
            textContent.slice(0, selectionStart) +
            textContent.slice(selectionStart + 1, textContent.length);

        textArea.setSelectionRange(selectionStart, selectionStart);

        return true;
    }
}

function handleUnPressDelete(event) {
    let clicked = event.target;
    if (clicked.className === 'delete') {
        clicked.style.backgroundColor = 'white';
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() == 'delete') {
        let pressed = document.getElementsByClassName('delete')[0];
        pressed.style.backgroundColor = 'white';
        return true;
    }
}

function handleUnPressBackSpace(event) {
    let clicked = event.target;
    if (clicked.className === 'backspace') {
        clicked.style.backgroundColor = 'white';
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() === 'backspace') {
        let pressed = document.getElementsByClassName("backspace")[0];
        pressed.style.backgroundColor = 'white';
        return true;
    }
}

function handlePressWin(event) {
    let clicked = event.target;
    if (clicked.className === 'win') {
        clicked.classList.toggle("border");
        setTimeout(() => { clicked.classList.toggle("border") }, 150);

        clicked.style.backgroundColor = 'red';
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() == 'meta') {
        let pressed = document.getElementsByClassName('win')[0];

        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);

        pressed.style.backgroundColor = 'red';
        return true;
    }
}

function handleUnPressWin(event) {
    let clicked = event.target;
    if (clicked.className === 'win') {
        let win = document.getElementsByClassName(
            'win')[0];
        win.style.backgroundColor = 'white';
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() == 'meta') {
        let pressed = document.getElementsByClassName('win')[0];
        pressed.style.backgroundColor = 'white';
        return true;
    }
}

function handlePressSpace(event) {
    let clicked = event.target;
    if (clicked.className === 'space') {
        clicked.style.backgroundColor = 'red';
        let pressed = document.getElementsByClassName("space")[0];
        pressed.style.backgroundColor = 'red';
        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);
        let textArea = document.getElementById('write');
        textArea.textContent += ' ';

        const end = textArea.value.length;
        textArea.setSelectionRange(end, end);

        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() === ' ') {
        let pressed = document.getElementsByClassName("space")[0];
        pressed.style.backgroundColor = 'red';
        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);
        let textArea = document.getElementById('write');
        textArea.textContent += event.key;

        const end = textArea.value.length;
        textArea.setSelectionRange(end, end);

        return true;
    }
}

function handleUnPressSpace(event) {
    let clicked = event.target;
    if (clicked.className === 'space') {
        let space = document.getElementsByClassName(
            'space')[0];
        space.style.backgroundColor = 'white';
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() === ' ') {
        let pressed = document.getElementsByClassName("space")[0];
        pressed.style.backgroundColor = 'white';
        return true;
    }
}

function handlePressAlt(event) {
    let clicked = event.target;
    if (clicked.className === 'alt') {
        clicked.classList.toggle("border");
        setTimeout(() => { clicked.classList.toggle("border") }, 150);
        clicked.style.backgroundColor = 'red';
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() === 'alt') {
        let alts = document.getElementsByClassName(
            key.toLowerCase());
        let pressed;
        if (event.code == "AltLeft") {
            pressed = alts[0];
        } else {
            pressed = alts[1];
        }
        pressed.style.backgroundColor = 'red';
        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);
        return true;
    }
}

function handleUnPressAlt(event) {
    let clicked = event.target;
    if (clicked.className === 'alt') {
        let alts = document.getElementsByClassName(
            'alt');
        [...alts].forEach(s => {
            s.style.backgroundColor = 'white';
        });
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() === 'alt') {
        let alts = document.getElementsByClassName(
            key.toLowerCase());
        [...alts].forEach(s => {
            s.style.backgroundColor = 'white';
        });
        return true;
    }
}

function handlePressShift(event) {
    let clicked = event.target;
    if (clicked.className === 'shift') {
        clicked.style.backgroundColor = 'red';
        clicked.classList.toggle("border");
        setTimeout(() => { clicked.classList.toggle("border") }, 150);
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() === 'shift') {
        let shifts = document.getElementsByClassName(
            key.toLowerCase());
        let pressed;
        if (event.code == "ShiftLeft") {
            pressed = shifts[0];
        } else {
            pressed = shifts[1];
        }

        pressed.style.backgroundColor = 'red';
        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);
        return true;
    }
}

function handleUnPressShift(event) {
    let clicked = event.target;
    if (clicked.className === 'shift') {
        let shifts = document.getElementsByClassName(
            'shift');
        [...shifts].forEach(s => {
            s.style.backgroundColor = 'white';
        });
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() === 'shift') {
        let shifts = document.getElementsByClassName(
            key.toLowerCase());
        [...shifts].forEach(s => {
            s.style.backgroundColor = 'white';
        });
        return true;
    }
}

function handlePressTab(event) {
    event.preventDefault();
    let textarea = document.getElementById('write');

    let target = event.target;
    let clicked = event.target;
    if (clicked.className === 'tab') {
        target.style.backgroundColor = 'red';
        target.classList.toggle("border");
        setTimeout(() => { target.classList.toggle("border") }, 150);
        textarea.textContent += '    ';
        const end = textarea.value.length;
        textarea.setSelectionRange(end, end);
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() === 'tab') {
        let pressed = document.getElementsByClassName(
            key.toLowerCase())[0];
        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);
        pressed.style.backgroundColor = 'red';
        textarea.textContent += '    ';
        const end = textarea.value.length;
        textarea.setSelectionRange(end, end);
        return true;
    }
}

function handleUnPressTab(event) {
    let clicked = event.target;
    if (clicked.className === 'tab') {
        clicked.style.backgroundColor = 'white';
        return true;
    }

    let key = event.key;
    event.preventDefault();
    if (key && key.toLowerCase() === 'tab') {
        let pressed = document.getElementsByClassName(
            key.toLowerCase())[0];
        pressed.style.backgroundColor = 'white';
        return true;
    }
}

function handlePressCtrl(event) {
    let target = event.target;
    let clicked = event.target;
    if (clicked.className === 'ctrl') {
        target.style.backgroundColor = 'red';
        target.classList.toggle("border");
        setTimeout(() => { target.classList.toggle("border") }, 150);
        return true;
    }

    let key = event.key;
    let ctrls = document.getElementsByClassName('ctrl');
    let pressed;
    if (event.code == "ControlLeft") {
        pressed = ctrls[0];
    } else {
        pressed = ctrls[1];
    }

    if (key && key.toLowerCase() == 'control') {
        pressed.style.backgroundColor = 'red';
        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);
        return true;
    }
}

function handleUnPressCtrl(event) {
    let clicked = event.target;
    if (clicked.className === 'ctrl') {
        let ctrls = document.getElementsByClassName(
            'ctrl');
        [...ctrls].forEach(s => {
            s.style.backgroundColor = 'white';
        });
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() == 'control') {
        let ctrls = document.getElementsByClassName('ctrl');
        [...ctrls].forEach(s => {
            s.style.backgroundColor = 'white';
        });
        return true;
    }
}

function handlePressEnter(event) {
    let target = event.target;
    if (target.className === 'enter') {
        target.style.backgroundColor = 'red';
        target.classList.toggle("border");
        setTimeout(() => { target.classList.toggle("border") }, 150);
        let textArea = document.getElementById('write');
        textArea.textContent += '\n';
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() === 'enter') {
        let pressed = document.getElementsByClassName(
            key.toLowerCase())[0];
        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);
        pressed.style.backgroundColor = 'red';
        let textArea = document.getElementById('write');
        textArea.textContent += '\n';
        return true;
    }
}

function handleUnPressEnter(event) {
    let target = event.target;
    let clicked = event.target;
    if (clicked.className === 'enter') {
        target.style.backgroundColor = 'white';
        return true;
    }

    let key = event.key;
    let pressed = document.getElementsByClassName(
        "enter")[0];
    if (key && pressed && key.toLowerCase() === 'enter') {
        pressed.style.backgroundColor = 'white';
        return true;
    }
}

function handlePressCaps(event) {
    let target = event.target;
    if (target.className === 'caps-lock') {
        target.classList.toggle("border");
        setTimeout(() => { target.classList.toggle("border") }, 150);
        target.style.backgroundColor = 'red';
        return true;
    }

    let key = event.key;
    if (key && key.toLowerCase() === 'capslock') {
        let pressed = document.getElementsByClassName(
            'caps-lock')[0];
        pressed.classList.toggle("border");
        setTimeout(() => { pressed.classList.toggle("border") }, 150);
        pressed.style.backgroundColor = 'red';
        return true;
    }
}

function handleUnPressCaps(event) {
    let target = event.target;
    let clicked = event.target;
    if (clicked.className === 'caps-lock') {
        target.style.backgroundColor = 'white';
        return true;
    }

    let key = event.key;
    let pressed = document.getElementsByClassName(
        "caps-lock")[0];
    if (key && pressed && key.toLowerCase() === 'capslock') {
        pressed.style.backgroundColor = 'white';
        return true;
    }
}

function createElements() {
    createKeyboardRows();
    fillKeyboard();
    let textarea = document.getElementById('write');
    textarea.focus();

    let languageChangeNote = document.createElement('div');
    languageChangeNote.innerText = "Alt + Shift change language.\nMake sure you windows language same as on keyboard.";
    document.body.appendChild(languageChangeNote);
}

function createKeyboardRows() {
    let container = document.createElement('div');
    container.id = "container";
    let writeArea = document.createElement('textarea');
    writeArea.id = "write";
    let keyboard = document.createElement('div');
    keyboard.id = "keyboard";

    let numberRow = document.createElement('div');
    numberRow.id = "tilda-row";
    let tabRow = document.createElement('div');
    tabRow.id = "tab-row";
    let capsRow = document.createElement('div');
    capsRow.id = "caps-row";
    let shiftRow = document.createElement('div');
    shiftRow.id = "shift-row";
    let ctrlRow = document.createElement('div');
    ctrlRow.id = "ctrl-row";

    keyboard.appendChild(numberRow);
    keyboard.appendChild(tabRow);
    keyboard.appendChild(capsRow);
    keyboard.appendChild(shiftRow);
    keyboard.appendChild(ctrlRow);

    container.appendChild(writeArea);
    container.appendChild(keyboard);
    document.body.appendChild(container);
}

function fillKeyboard() {
    let keyboardFromStorage = localStorage.getItem('keyboard');
    let keyboard = document.getElementById("keyboard");
    if (!keyboardFromStorage) {
        fillTildaRow(keyboard);
        fillTabRow(keyboard);
        fillCapsRow(keyboard);
        fillShiftRow(keyboard);
        fillCtrlRow(keyboard);
        localStorage.setItem('keyboard', keyboard.outerHTML);
    } else {
        keyboard.outerHTML = keyboardFromStorage;
    }
}

function fillCtrlRow(keyboard) {
    let row = keyboard.querySelector("#ctrl-row");
    addCtrlRow(row);
}

function fillShiftRow(keyboard) {
    let row = keyboard.querySelector("#shift-row");
    addShift(row);
    addShiftRowLetters(row);
    addShiftRowSymbols(row);
    addArrowTop(row);
    addShift(row);
}

function fillCapsRow(keyboard) {
    let row = keyboard.querySelector("#caps-row");
    addCapsLock(row);
    addCapsRowLetters(row);
    addCapsRowSymbols(row);
    addEnter(row);
}

function fillTabRow(keyboard) {
    let row = keyboard.querySelector("#tab-row");
    addTab(row);
    addTabRowLetters(row);
    addTabRowSymbols(row);
    addDelete(row);
}

function fillTildaRow(keyboard) {
    let row = keyboard.querySelector("#tilda-row");
    addNumbers(row);
    addBackspace(row);
}

function addShift(row) {
    addKeyItem(row, "Shift");
}

function addCtrlRow(row) {
    ctrlRowSymbols.forEach(symbol => {
        addKeyItem(row, symbol);
    });
}

function addArrowTop(row) {
    addKeyItem(row, "&uarr;")
}

function addShiftRowLetters(row) {
    shiftRowLetters.forEach(letter => {
        addKeyItem(row, letter);
    });
}

function addShiftRowSymbols(row) {
    shiftRowSymbols.forEach(pair => {
        addKeyItemWithSpans(row, pair);
    });
}

function addCapsRowSymbols(row) {
    capsRowSymbols.forEach(pair => {
        addKeyItemWithSpans(row, pair);
    });
}

function addCapsRowLetters(row) {
    capsRowLetters.forEach(letter => {
        addKeyItem(row, letter);
    });
}

function addCapsLock(row) {
    addKeyItem(row, "Caps Lock")
}

function addEnter(row) {
    addKeyItem(row, "Enter")
}

function addKeyItem(keyboard, textContent) {
    let item = document.createElement('div');
    item.innerHTML = textContent;
    item.classList.add(textContent
        .replace(" ", "-")
        .toLowerCase());
    keyboard.appendChild(item);
}

function addTabRowSymbols(row) {
    tabRowSymbols.forEach(pair => {
        addKeyItemWithSpans(row, pair);
    });
}

function addTabRowLetters(row) {
    tabRowLetters.forEach(symbol => {
        addKeyItem(row, symbol)
    });
}

function addTab(row) {
    addKeyItem(row, "Tab");
}

function addDelete(row) {
    addKeyItem(row, "Delete");
}

function addBackspace(row) {
    addKeyItem(row, "BackSpace");
}

function addNumbers(row) {
    tildaRowSymbols.forEach(pair => {
        addKeyItemWithSpans(row, pair);
    });
}

function addKeyItemWithSpans(row, pair) {
    let item = document.createElement('div');
    item.classList.add(pair[0]);
    item.classList.add(pair[1]);
    let span1 = document.createElement('span');
    span1.classList.add(pair[0]);
    span1.textContent = pair[0];
    let span2 = document.createElement('span');
    span2.classList.add(pair[1]);
    span2.textContent = pair[1];
    item.appendChild(span1);
    item.appendChild(span2);
    row.appendChild(item);
}