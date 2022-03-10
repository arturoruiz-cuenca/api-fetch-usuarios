
function selectUsers(genero){   

var display = document.getElementById('display');

 // borro el lienzo
 display.innerHTML= '';

fetch("https://randomuser.me/api?gender="+genero+"&&results=10")
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        var personas = data.results;

        console.log(personas);
        //console.log(data.results[0]);

        

        for (var persona of personas) {
            var registro = `
            <tr>
                <td>${persona.name.first} ${persona.name.last}</td>
                <td><img src='${persona.picture.thumbnail}'></td>
                <td>${persona.email}</td>
                <td>${persona.location.coordinates.latitude}</td>
                <td>${persona.location.coordinates.longitude}</td>                
            </tr>
            `;
            display.innerHTML += registro;
        }

        
            

    }).catch(function (err) {
        console.log(err);
    })

}
    