This project was bootstrapped with Create React App.

## Stack
- [npm](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/)
- [Create React App](https://github.com/facebookincubator/create-react-app)
- Git
- VSCode (Visual Studio Code)

## Installing
Comands:
```
npm install
```
```
npm start
```
Then open http://localhost:3000/ to see your app.

## Backend Server
To simplify the development process, Udacity provided a backend server to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that were needed to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Authors
[Joshua Gilless](https://github.com/jgilless)
