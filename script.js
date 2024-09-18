const [H, S, L] = document.querySelectorAll("input");
let [one, two, three] = document.querySelectorAll(".percent");
let [h, s, l] = [H.value, S.value, L.value];

const updateBodyColor = () => {
    document.body.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
    changeValues();
};

const changeValues = () => {
    one.innerHTML = `${H.value}&deg;`;
    two.textContent = `${S.value}%`;
    three.textContent = `${L.value}%`;
};

H.addEventListener("input", () => {
    h = H.value;
    updateBodyColor();
});

S.addEventListener("input", () => {
    s = S.value;
    updateBodyColor();
});

L.addEventListener("input", () => {
    l = L.value;
    updateBodyColor();
});

document.querySelector("#copyBtn").addEventListener("click", () => {
    window.navigator.clipboard.writeText(`${h}, ${s}%, ${l}%`);
    console.log(`${h}, ${s}%, ${l}%`);

    document.querySelector("#note").style.opacity = 1;

    setTimeout(() => {
        document.querySelector("#note").style.opacity = 0;
    }, 1000);
});

const generateRandomColor = () => {
    h = Math.floor(Math.random() * 360+1);
    s = Math.floor(Math.random() * 100+1);
    l = Math.floor(Math.random() * 100+1);

    H.value = h;
    S.value = s;
    L.value = l;

    updateBodyColor();
};

window.addEventListener("DOMContentLoaded", () => {
    generateRandomColor();

    document.querySelector("#randBtn").addEventListener("click", generateRandomColor);
});
