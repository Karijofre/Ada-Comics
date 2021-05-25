//Search and select panel
const searchInput = document.getElementById("search-type");
const searchButton = document.getElementById("search-button");
const searchType = document.getElementById("search-type");
const searchSort = document.getElementById("search-sort");
const searchComics = document.getElementById("search-comics");
const searchCharacters = document.getElementById("search-characters");


//Print comics

const base = document.getElementById("base");

const printComics = arr =>{
    console.log(arr);
    const notViable = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
    const replacementViable = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny";
    let box ="";
    arr.forEach(comic => {
       //console.log(comic);
       const {title, thumbnail:{extension, path}, id} = comic;
       box += `
       <div class="column is-one-fifth" onclick="getId(${id})">
        <figure>
         <a>
          <img src="${path === notViable ? replacementViable: path}.${extension}" alt="${title}">
          <p>${title}</p>
         </a>
         </figure>
       </div>
       `
    });
    base.innerHTML = box;
}

//Print characters

const printCharacters = arr =>{
  //console.log(arr);
  const notViable = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
  const replacementViable = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny";
  let box ="";
  arr.forEach(character => {
     console.log(character);
     const {title, thumbnail:{extension, path}, id} = character;
     box += `
     <div class="column is-one-fifth" onclick="getId(${id})">
      <figure>
       <a>
        <img src="${path === notViable ? replacementViable: path}.${extension}" alt="${title}">
        <p>${title}</p>
       </a>
       </figure>
     </div>
     `
  });
  base.innerHTML = box;
}

