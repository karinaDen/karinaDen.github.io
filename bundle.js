let e = document.getElementById("btn"), t = document.getElementById("dogImage"), a = async () => {
    let e = await fetch("https://dog.ceo/api/breeds/image/random"), t = await e.json();
    return console.log(t.url), t.url
};
e.addEventListener("click", (async e => {
    e.preventDefault(), await a(), t.src = await a()
}));
