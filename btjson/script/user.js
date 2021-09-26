"use strict"

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let file="https://jsonplaceholder.typicode.com/users/"+id;
let file1="https://jsonplaceholder.typicode.com/posts";
fetch(file)
    .then(x=>x.json())
    .then(y=>{

        document.getElementById("user").innerHTML=`
        <div class="specific  w3-container w3-animate-zoom"">
            <p>${y.name}</p>
            <p>Username: ${y.username}</p>
            <p>Email: ${y.email}</p>
            <p>Phone: ${y.phone}</p>
            <p>site: <a href="https://${y.website}">${y.website}</a></p>
        </div>
        <div class="loca">
            <div>
            <ul>
            <p>Address</p>
            <li>Street: ${y.address.street}</li>
            <li>Address: ${y.address.suite}</li>
            <li>City: ${y.address.city}</li>
            <li>Zipcode: ${y.address.zipcode}</li>
            <li><a href="https://maps.google.com/?q=${y.address.geo.lat},${y.address.geo.lng}">see on map</a></li>
            </ul>    
            </div>
            <div> 
            <ul>
            <p>Company</p>
            <li>Name:${y.company.name}</li>
            <li>Catch Phrase:${y.company.catchPhrase}</li>
            <li>${y.company.bs}</li>  
            <li><a href="https://maps.google.com/?q=${y.company.name}">see on map</a></li>          
            </ul>
            </div>  
        </div>   
        `
        fetch(file1)
        .then(z=>z.json())
        .then(post=>{
            document.getElementById("post").innerHTML=`<p>POST OF ${y.username}</p>`
            for(let i=0; i<post.length; i++){
                if(post[i].userId==id){
                    document.getElementById("post").innerHTML+=`<div class="owner w3-container w3-animate-zoom"">
                    <p class="post-title">${post[i].title}</p>
                    <p class="post-body">${post[i].body}</p>
                    <a class="link" class="post-link" href="detail.html?id=${post[i].id}">see more</a>
                    </div>`
                }
            }
            
        })
        .catch(error1 => console.log("error"+error1))
    })
    .catch(error => console.log("error"+error))
    // <a href="https://maps.google.com/?q=${y.geo.lat},${y.geo.lng}">see on map</a>