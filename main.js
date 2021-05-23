//Print of comics

const base = document.getElementById("base");

const printData = arr =>{
    //console.log(arr);
    const notViable = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
    const replacementViable = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny";
    let box ="";
    arr.forEach(comic => {
       console.log(comic);
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