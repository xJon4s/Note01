function renderList(movies, user) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Filmliste</title>
    <link rel="stylesheet" href="/style.css">
    </head>
    <body>
    <h1>Filmliste</h1>
    <table>
      ${
        user ? '<tr><th>Sie sind angemeldet als ' + user.username + '. Ihr Name lautet ' + user.firstname +" " + user.lastname + '</th></tr>'
        : '<tr><th>Melden Sie sich an um ihre Filme hinzuzufügen</th></tr>'
      }
      ${
        user ? '<td><a href="/logout">Logout</a><a href="/movie/edit">Neuer Film</a></td>'
        : '<td><a href="/login">Login</a></td>'
      }
    </table>

    <table>
    <tr><th>Id</th><th>Titel</th><th>Jahr</th><th>Öffentlich</th><th>Besitzer</th>
    <th></th><th></th></tr>
    ${movies
      .map(
        (movie) =>
          `
          <tr><td>${movie.id}</td>
          <td>${movie.title}</td>
          <td>${movie.year}</td>
          <td>${movie.public}</td>
          <td>${movie.owner}</td>
          ${ (user.firstname === movie.owner) ? 
          '<td><a href="/movie/remove/${movie.id}">Löschen</a></td><td><a href="/movie/edit/${movie.id}">Ändern</a></td></tr>'
          : '<td><a href="/movie/edit/${movie.id}"">Ansehen</a></td>'
          }
          `
      )
      .join("")}
    </table>
    <a href="/movie/edit">Neu</a>
    </body>
    </html>
    `;
}
function renderMovie(movie) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Filmliste</title>
    <link rel="stylesheet" href="/style.css">
    </head>
    <body>
    <form action="/movie/save" method="post">
    <input type="hidden" name="id" value="${movie.id}">
    <div>
    <label for="title">Titel:</label>
    <input type="text" id="title" name="title"
    value="${movie.title}">
    </div>
    <div>

    <label for="year">Jahr:</label>
    <input type="text" id="year" name="year"
    value="${movie.year}">
    </div>
    
    <input type="submit" value="Speichern">
    </div>
    </form>
    </body>
    </html>
    `;
}
module.exports = { renderList, renderMovie };