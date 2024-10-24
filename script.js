// const btn = document.getElementById("btn");
// const h1 = document.getElementById("h1");
// const ismInput = document.getElementById("ism");
// const inpColor = document.getElementById("inpcolor");
// const body = document.getElementsByTagName("body")[0];

// btn.addEventListener("click", () => {
//     // alert("Rostan change color qlimi")
//     // body.style = "background-color:blue;"
//     h1.textContent = ismInput.value;

// })

// inpColor.addEventListener("input",()=>{
// console.log(inpColor.value);
// h1.style.backgroundColor=inpColor.value;
// })

let proekt = 0;

function group() {
    document.getElementById('counter-value').textContent = proekt;
}

document.getElementById('minus').addEventListener('click', function () {
    proekt--;
    group();
});

document.getElementById('plus').addEventListener('click', function () {
    proekt++;
    group();
});

document.getElementById('send-btn').addEventListener('click', function () {
    let INPUTQIYMATI = parseInt(document.getElementById('input-number').value);
    if (!isNaN(INPUTQIYMATI)) {
        proekt = INPUTQIYMATI;
        group();
    } else {
        alert("Iltimos yaroqli raqam kiriting!!!");
    }
});

document.getElementById('color-btn').addEventListener('click', function () {
    let BelgilanganRang = document.getElementById('color-input').value;
    if (BelgilanganRang) {
        document.body.style.backgroundColor = BelgilanganRang;
        document.getElementById('counter-value').style.color = BelgilanganRang;
    } else {

    }
});

document.getElementById('color-input').addEventListener('input', function () {
    console.log(document.getElementById('color-input').value);
});


