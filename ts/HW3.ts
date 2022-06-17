interface Input {
    url: string;
}

let btn = document.getElementById('btn');
let pic = document.getElementById('dogImage') as HTMLImageElement;

let getAPI = async () => {
    let res = await fetch('https://dog.ceo/api/breeds/image/random');
    let json = await res.json();
    return json;
}

btn.addEventListener("click", async event => {
    event.preventDefault();

    getAPI();

    pic.src = await getAPI();
})