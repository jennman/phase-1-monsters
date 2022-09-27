const baseUrl = 'http://localhost:3000/'
const monstersUrl = baseUrl + 'monsters/'

// Get monsteers info using fetch function

function getMonsters(){
    fetch(monstersUrl)
    .then( res => res.json )
    .then( data => console.log(data))
    // info of monsters in data to pass down
}