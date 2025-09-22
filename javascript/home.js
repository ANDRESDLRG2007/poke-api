function Home(parametro){
    var root = document.getElementById("root");
    for(var i = 0; i < pokemones.length; i++){
        document.getElementById("root").innerHTML += `
        <div class="card">
            <img src="${pokemones[i].img}" alt="${pokemones[i].name}">
            <h2>${pokemones[i].name}</h2>
            <p>${pokemones[i].type}</p>
        </div>
        `
    } 
}