"use strict"
// (function (){
//     window.onload=Loadusers();
// })();

let file="https://jsonplaceholder.typicode.com/users";
let ava=["./img/ava.jpg","./img/ava1.jpg","./img/ava2.jpg","./img/ava3.jpg","./img/ava4.jpg","./img/ava5.jpg","./img/ava6.jpg","./img/ava7.png","./img/ava8.jpg","./img/ava9.jpg"];

fetch(file)
    .then(x => x.json())
    .then(y => {       
        for(let i=0; i<y.length; i++){
            document.getElementById("users").innerHTML+=` <a class="link" href="user.html?id=${y[i].id}">
            <div class="post" id="${i}">
           
            <div class="info">
            <p>${y[i].username}</p>
            <p class="post-title">${y[i].name}</p>
            <p class="post-bodu">${y[i].email}</p>
            </div>
            
            </div></a>            
            `
        }
        for(let i=0; i<ava.length;i++){
            document.getElementById(i).style.backgroundImage='url('+ava[i]+')';
        }
    })
    .catch(error => console.error("Error",error));
    // style="background-image:'url("./img/${ava[i]}")';"

    