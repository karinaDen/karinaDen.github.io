interface Input {
    url: string;
}


let getAPI = async () => {
    let res = await fetch("https://random.dog/woof.json");
    let Json: Input = await res.json();

    console.log(Json.url);

    return Json.url;
}

let btn = document.getElementById('btn');
let pic = document.getElementById('dogImage') as HTMLImageElement;


btn.addEventListener("click", async event => {
    event.preventDefault();

    getAPI();

    pic.src = await getAPI();
})