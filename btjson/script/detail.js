
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

(function(){
    Window.onload=loaddoc();
    loadcmt();
    })();
    
    function loaddoc() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            let posts=JSON.parse(this.responseText);
            let htmlContent="<p>Post</p>";
            let posthtml=`           
                <div class="post"> 
                <p class="post-title">${posts.title}</p>
                <p class="post-body">${posts.body}</p>
                </div>
                `;
                htmlContent+=posthtml;
            document.getElementById("detailpost").innerHTML=htmlContent;
        };
        xhttp.open("GET", 
        `https://jsonplaceholder.typicode.com/posts/${id}`);
        xhttp.send();
        };
    function loadcmt() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            let posts=JSON.parse(this.responseText);
            let htmlContent="<p>All Comment</p>";
            for(let i=0; i<posts.length; i++){
                let post= posts[i];
                //let user=loadusername(post.id);
                let posthtml=`           
                    <div class="cmt">
                    <a href="user.html?id=${post.id}">${post.email}</a> 
                    <p class="cmt-title">${post.name}</p>
                    <p class="cmt-body">${post.body}</p>
                    </div>
                    `;
                    htmlContent+=posthtml;           
                }   
                document.getElementById("comments").innerHTML=htmlContent;
        };
        xhttp.open("GET",
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        xhttp.send();
        };


        // function loadusername(id) {
        //     const xhttp = new XMLHttpRequest();
        //     xhttp.onload = function() {
        //         let users=JSON.parse(this.responseText); 
        //         for(let i=0; i<users.length; i++){                   
        //             if(id==users.id){
        //             return users.name;}      
        //         }                          
        //     };
        //     xhttp.open("GET",
        //     `https://jsonplaceholder.typicode.com/users`);
        //     xhttp.send();
        //     };