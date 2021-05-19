// Add your code here
function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ name, email })
    }
  
    return fetch(url, config)
    .then(res =>  res.json())
    .then(json => document.body.innerHTML += json.id)
    .catch(err => document.body.innerHTML += err.message)
  
  }