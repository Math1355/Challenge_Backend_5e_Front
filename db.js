fetch('http://localhost:8000/videos/?format=json')
  .then((response) => response.json())
  .then((json) => console.log(json));
