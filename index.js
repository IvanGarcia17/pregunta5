var botonCargar = document.getElementById("botonCargar");

botonCargar.addEventListener("click", function () {
    axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
    .then(function (res) {
        let json = res.data;
        let listaPregunta5 = document.getElementById("form");


        for (var x in json) {
                let li = document.createElement("ul");

                li.innerHTML = json[x].name+" vive en "+json[x].city+"<br>";
                listaPregunta5.appendChild(li);
        }
    })
})