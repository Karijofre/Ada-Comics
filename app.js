
const private = "df2816012bdbc02dd432cd2aed150ffa9389c6a2";

const public = "289aad7962cf3816df2b5586564253f8";

const timestamp = Date.now();
console.log(timestamp);

const hash = md5( timestamp + private + public);
console.log(hash);

//const url= `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${public}&hash=${hash}` muestra todos los personajes

//const url= `https://gateway.marvel.com:443/v1/public/characters/1011031?ts=${timestamp}&apikey=${public}&hash=${hash}` muestra por id de personaje (1011031)

const url= `https://gateway.marvel.com:443/v1/public/comics?limit=20&offset=0&ts=${timestamp}&apikey=${public}&hash=${hash}` //límite para el paginado, para los siguientes 20 de la página siguiente el offset comenzará en 20 con una variable más



//Probando el catcheo

//fetch(url)
   // .then(answer=> answer.json())
   // .then(resultJson=> console.log(resultJson)) //catcheando al json, según lo que necesite le agregaré al resultJson.data. .... la info que requiera de la API
   // .catch(error=> console.log(error))

fetch(url)
    .then(answer => answer.json())
    .then(obj => printComics(obj.data.results))
    .catch(error => console.error(error))



const url2= `https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=0&ts=${timestamp}&apikey=${public}&hash=${hash}`

fetch(url2)
    .then(answer => answer.json())
    .then(obj => printCharacters(obj.data.results))
    .catch(error => console.error(error))


