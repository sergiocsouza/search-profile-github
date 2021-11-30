var form = document.getElementById("my-first-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var search = document.getElementById('search').value;

  alert('procurando');

  var original_name = search.split(' ').join('')

  fetch('https://api.github.com/users/' + original_name)
    .then((result) => result.json())
    .then((data) => {


      document.getElementById("result").innerHTML = `
      <img src="${data.avatar_url}"/><br>
      Cidade: ${data.location}<br>
      Nome: ${data.name} <br>
      Seguidores: ${data.followers} <br>
      Seguindo: ${data.following}<br>
      Repositórios: ${data.public_repos}
      
      _________________________________________
      


      `
      console.log(data)
      document.getElementById("url").innerHTML = ` perfil url: <a href="https://github.com/${original_name}" target="__blank">Clique aqui</a>
      

      `

      document.getElementById("repos_url").innerHTML = ` repo url:
      <a href="https://github.com/${original_name}?tab=repositories" target="__blank"> Clique aqui</a><br><br><br>
      <p class="creditos">feito pelo</p> <a href="https://sergioc.website" target="__blank">Sergio C</a>

      `
    })

})