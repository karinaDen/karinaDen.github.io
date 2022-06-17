interface Input {
    url: string;
}

let btn = document.getElementById('btn');
let pic = document.getElementById('dogImage') as HTMLImageElement;

let getAPI = async () => {
    let res = await fetch('https://dog.ceo/api/breeds/image/random');
    let Json: Input = await res.json();

    console.log(Json.url);

    return Json.url;
}

btn.addEventListener("click", async event => {
    event.preventDefault();

    await getAPI();

    pic.src = await getAPI();
})