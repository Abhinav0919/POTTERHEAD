const url = "https://potterapi-fedeperin.vercel.app/en";
let readBook = document.querySelector("#readbook");
let getSpell = document.querySelector("#spell");
let characters = document.querySelector("#charcters");
let container = document.querySelector("#result");
let heading = document.querySelector("#heading");
let searchInput = document.querySelector(".search");
let menu = document.querySelector("#menu");
let homeBtn = document.querySelector("#homeBtn");


let currItems =[];
let currView = null;

const draw = (items) =>{
  container.innerHTML = "";
  items.forEach(item => {
    container.appendChild(currView.card(item))
  });
};


const fetchdata =async(endpoint) =>{
    const response =  await fetch(`https://potterapi-fedeperin.vercel.app/en/${endpoint}`);
    if(!response.ok){
        throw new Error("server problem");
    }
    return await response.json();
};

    const bookcard = (book)=> {
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book-card");
        
        bookDiv.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <div class="book-info">
                <h2>${book.title}</h2>
                <p class = "desc clamp">${book.description || "Discover the magical world of Harry Potter."}</p>
                <p><b>Release Date:</b> ${book.releaseDate}</p>
                <p><b>Pages:</b> ${book.pages || "N/A"}</p>
                <button class="read-btn">Read More</button>
            </div>
        `;

        const desc = bookDiv.querySelector(".desc");
        const btn = bookDiv.querySelector(".read-btn");

       btn.addEventListener("click", () => {
       const isShort = desc.classList.toggle("clamp");
       btn.textContent = isShort ? "Read More" : "Read Less";
});
        return bookDiv;
     };

    const spellCard = (magicspell) => {
    let magicspellDiv = document.createElement("div");
        magicspellDiv.classList.add("magic-spell");

        magicspellDiv.innerHTML = `
        <h3>Spell:${magicspell.spell}</h3>
        <p>Use:${magicspell.use}</p>
        </div>`;

        return magicspellDiv;
};

    const characterCard = (character) => {
        let characterDiv = document.createElement("div");
        characterDiv.dataset.house = (character.hogwartsHouse || "").toLowerCase();
        characterDiv.classList.add("character");

        characterDiv.innerHTML=`
        <img src ="${character.image}" alt="${character.fullName}">
        <h2>Fullname:<b>${character.fullName}</b></h2>
        <p>Nickname:<b>${character.nickname}</b></p>
        <p>House:<b>${character.hogwartsHouse}</b></p>
        <p>Played By:<b>${character.interpretedBy}</b></p>
        <p>Birthdate:<b>${character.birthdate}</b></p>`
        ;
        return characterDiv;
    };

const views =
{
    books:{title : "ALL BOOKS OF HARRY POTTER" , endpoint :"books", card:bookcard,searchKey:"title"},
    magicSpells: {title: "MAGIC SPELLS", endpoint :"spells", card:spellCard,searchKey:"spell"},
    characters:{title:"ALL OG CHARACTERS", endpoint:"characters", card:characterCard,searchKey:"fullName"},
};
const showView = async(naam) =>{
    const view = views[naam];
    menu.hidden = true;
    container.hidden = false;
    homeBtn.hidden = false;
    searchInput.hidden = false;

    container.innerHTML = "Summoning magic...";
    try{
        const items = await fetchdata(view.endpoint);
        currView = view;
        currItems = items;
        searchInput.value ="";
        heading.innerText = view.title;
        searchInput.classList.remove("hide");

        draw(items);   
}
catch(error){
    container.innerHTML = "LOADING IS NOT POSSIBLE DUE TO SERVER ISSUE";
}
};

readBook.addEventListener("click" , () => showView("books"));
getSpell.addEventListener("click" , () => showView("magicSpells"));
characters.addEventListener("click" , () => showView("characters"));

searchInput.addEventListener("input" ,() =>{
    if(!currView) return;
    const text = searchInput.value.toLowerCase();
    const filtered = currItems.filter(item => 
        item[currView.searchKey].toLowerCase().includes(text)
    );
   if (filtered.length === 0) {
    container.innerHTML = "<b>Didn't find anything matching</b>";
    return;
}              
    draw(filtered);
});
const goHome = () => {
    heading.innerText = "WELCOME TO THE WORLD OF HARRY POTTER";
    menu.hidden = false;
    container.hidden = true;
    homeBtn.hidden = true;
    searchInput.hidden = true;
    searchInput.value = "";
    currView = null;
};
homeBtn.addEventListener("click", goHome);