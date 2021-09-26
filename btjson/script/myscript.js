// (function(){
// Window.onload=loaddoc();
// })();
// function loaddoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//         let posts=JSON.parse(this.responseText);
//         let htmlContent="";
        
                           
//             for(let i=0; i<posts.length; i++){
//                 let post= posts[i];
//                 let posthtml=`           
//                 <div class="post"> 
//                 <p class="post-title">${post.title}</p>
//                 <p class="post-body">${post.body}</p>
//                 <a class="link" class="post-link" href="detail.html?id=${post.id}">see more</a>
//                 </div>
//                 `;
//                 htmlContent+=posthtml;           
//         }
       
//         document.getElementById("json").innerHTML=htmlContent;
//     };
//     xhttp.open("GET", 
//     "https://jsonplaceholder.typicode.com/posts");
//     xhttp.send();
// };
let file2="https://jsonplaceholder.typicode.com/users";
let file="https://jsonplaceholder.typicode.com/posts";

fetch(file)
    .then(x => x.json())
    .then(post => {
        fetch(file2)
            .then(y=>y.json())
            .then(user => {               
                for(let i=0; i<post.length; i++){
                    let uid=post[i].userId;
                    
                    document.getElementById("json").innerHTML+=`
                    <div class="post  w3-animate-bottom"> 
                    <a class="link" href="user.html?id=${uid}">${user[uid].name}</a>
                    <p class="post-title">${post[i].title}</p>
                    <p class="post-body">${post[i].body}</p>
                    <a class="link" class="post-link" href="detail.html?id=${post[i].id}">see more</a>
                    </div>
                    `
                }
            })
            .catch(error => console.error("Error",error));
        // console.log(y);
        // for(let i=0; i<y.length; i++){
        //     document.getElementById("json").innerHTML+=`
        //     <div class="user">
        //     <a href="https://jsonplaceholder.typicode.com/users/${y[i].id}">${y[i].username}</a>
        //     <p>name: ${y[i].name}</p>
        //     <p>email address: ${y[i].email}</p>
        //     </div>
        //     `
        // }
    })
    .catch(error => console.error("Error1",error));