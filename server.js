import { useState, useEffect } from 'react';

//const jsonServer = require('json-server');

//const server = jsonServer.create();
//const router = jsonServer.router('db.js');
//const middlewares = jsonServer.defaults();

//const port = process.env.PORT || 8080;

//server.use(middlewares);
//server.use(router);
//server.listen(port, () => {
// eslint-disable-next-line no-console
//  console.log(`JSON Server is running in ${port}`);
//});


const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/videos/?format=json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
};