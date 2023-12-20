# Movie Project With Express, Prisma

<hr>

> [!IMPORTANT]  
> Make .env File And Download Packages

<h3>Download Packages</h3>

```cmd
$ npm i
```

<hr>

<h3>Upload schema.prismma To Database</h3>

```cmd
$ npx prisma db push
```

.env File

```env
DATABASE_URL="mysql://USER_NAME:PASSWORD@IP:PORT/DATABASE_NAME"
```

<h2>Routs To Use All Functions</h2>

<h3>User</h3>

| Path                           | Methods  | What is Doning?                |
| ------------------------------ | -------- | ------------------------------ |
| `/user/create`                 | `POST`   | To Create New User In Database |
| `/user/get_data`               | `GET`    | Get All Users Data             |
| `/user/get_data/ENTER_USER_ID` | `GET`    | Get Only One Of Users Data     |
| `/user/update/ENTER_USER_ID`   | `PUT`    | Update User Data               |
| `/user/delete/ENTER_USER_ID`   | `DELETE` | Delete User From Data          |

<h3>How Add New User with Body</h3>

PATH: `http://LOCALHOST:PORT/user/create`

```json
{
  "username": "STRING",
  "password": "STRING",
  "role": "STRING"
}
```

<h3>How Add Update User with Body</h3>

PATH: `http://LOCALHOST:PORT/user/update/ENTER_USER_ID`

```json
{
  "username": "STRING",
  "password": "STRING",
  "role": "STRING"
}
```

<hr>

<h3>Movie</h3>

| Path                                        | Methods |
| ------------------------------------------- | ------- |
| `/moive/create`                             | `POST`  |
| `/movie/get_data`                           | `GET`   |
| `/movie/get_comments_only/ENTER_MOVIE_ID  ` | `GET`   |
| `/movie/get_comments/ENTER_MOVIE_ID`        | `GET`   |
| `/movie/get_movie_rating/SET_RATE`          | `GET`   |


<h3>How Add New Comment with body</h3>

PATH: `http://LOCALHOST:PORT/moive/create`

```json
{
"title":"STRING",
"duration":INT,
"rating":FLOAT,
"genre":"COMEDY" or "ACTION" or "ROMANCE"
}
```

<hr>

<h3>Comment</h3>

| Path               | Methods |
| ------------------ | ------- |
| `/comment/add` | `POST`   |
| `/comment/update/COMMENT_ID` | `PUT`  |
| `/comment/delete/:id` | `DELETE`  |

<h3>How Add New Comment For Moive</h3>

PATH: `http://LOCALHOST:PORT/comment/add`

```json
{
"text":"STRING",
"movie_id":"STRING",
"user_id":"STRING"
}
```

<h3>How Update Comment For Moive</h3>

PATH: `http://LOCALHOST:PORT/comment/update/COMMENT_ID`

```json
{
"text":"STRING",
}
```

<hr>

![Plane](/img/prisma_Movie.png)


<hr>

# Documentation

- [Node.Js](nodejs.org)
- [Prisma](https://www.prisma.io/)
- [Azure Studio](https://learn.microsoft.com/en-us/azure-data-studio/download-azure-data-studio?view=sql-server-ver16&tabs=win-install%2Cwin-user-install%2Credhat-install%2Cwindows-uninstall%2Credhat-uninstall)
- [Xampp](https://www.apachefriends.org/download.html)
