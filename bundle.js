const btn = document.getElementById('btn');
const pic = document.getElementById('dogImage');

async function f() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await res.json();
    return json;
}

btn.addEventListener("click", () => {
    f().then((message) => {
pic.src = message.url;
    });
});
