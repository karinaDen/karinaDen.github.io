let e = async () => {
    let e = await fetch("https://random.dog/woof.json"), t = await e.json();
    return console.log(t.url), t.url
}, t = document.getElementById("btn"), n = document.getElementById("dogImage");
t.addEventListener("click", (async t => {
    t.preventDefault(), e(), n.src = await e()
}));
