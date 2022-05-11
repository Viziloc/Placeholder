const showMoreBtn = document.querySelector('.show-more-btn');
const cards = document.querySelector('.cards');

let content_users;
async function getUsers(){
    let gusers = await fetch("https://jsonplaceholder.typicode.com/users")
    content_users = await gusers.json()
    console.log(content_users)

    let list_users = document.querySelector('.users')
    let key_users;
    
    content_users.forEach((element) => {
        list_users.innerHTML += `
        <div class="user">
            <div class="user_ellipse">${getAva(element.name)}</div>
            <div class="user_info">
                <h3 class="user_name">${element.name}</h3>
                <a class="user_mail" href="mailto:${element.email}"><img src="img/mail.png" alt="mail" class="mail-ico">${element.email}</a>
                <p class="user_phone" ><img src="img/phone.png" alt="phone" class="phone-ico"><a href="tel:${element.phone}">${element.phone}</a></p>
            </div>
        </div>`
    });    
}

function getAva(name){
let str = "";
let i = 0;
    while (i < name.length && str.length != 3){
        if (name[i] == name[i].toUpperCase())
        str += name[i]
        i++
    }
    return str.replace(" ", "");

    // for (let i = 0; i < name.length; i++)
    // {
    //     if (name[i] == name[i].toUpperCase())
    //     str += name[i]
    // }
    // return str.replace(" ", "").replace(".","");
}

getUsers()

let content_cards;

async function getCards(num){

    while (cards.childElementCount > 0) {
        cards.children[0].remove();
    }

    let gcards = await fetch("https://jsonplaceholder.typicode.com/posts")
    content_cards = await gcards.json()
    // console.log(content_card)
    content_cards_obr = content_cards.splice(0,num)

    let list_cards = document.querySelector('.cards')
    let list_posts = document.querySelector('.posts')
    let key_cards;
    
    content_cards_obr.forEach((element) => {
        list_cards.innerHTML += `
        <div class="card">
                <h3 class="card_header">${element.title}</h3>
                <p data-f="James Lee" class="card_author">${content_users[element.userId].name}</p>
                <p class="card_descr">${element.body}</p>
                <a href="/post.html"><img src="img/arrow.png" alt="arrow" class="arrow"></a>
        </div>
      `
    });
}

let content_posts;
async function getPosts(num){

    let gposts = await fetch("https://jsonplaceholder.typicode.com/posts")
    content_posts = await gposts.json()
    content_posts_obr = content_postss.splice(num)

    let list_posts = document.querySelector('.posts')
    let key_posts;
    
    content_posts.forEach((element) => {
        list_posts.innerHTML += `
        <div class = "post">
            <h1 class="post_header">${element.title}</h1>
            <p class="post_author">${content_users[element.userId].name}</p>
            <p class="post_descr"></p>
        </div>`
    });  
}
getPosts(1);

getCards(8);               
showMoreBtn.addEventListener('click',(e)=>{
         cards.classList.toggle('show-more');
         getCards(16);
});

