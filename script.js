url = "https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts/random?animal=cat&amount=7"
fetch(url, {
    mode: 'cors'
  })
.then(function(response) {
    console.log(response)
    return response.json()
}).then(function(json) {	
    var count = 0;
    json.forEach(element => {
        count++;
        var node = document.createTextNode(element.text); 
        document.getElementById("fact"+count).appendChild(node)
    });
});