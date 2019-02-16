url = "https://cat-fact.herokuapp.com/facts/random?animal=cat&amount=7"
fetch(url, {
    mode: 'no-cors'
  })
.then(function(response) {
    return response.json();
}).then(function(json) {	
    var count = 0;
    json.forEach(element => {
        count++;
        var node = document.createTextNode(element.text); 
        document.getElementById("fact"+count).appendChild(node)
    });
});