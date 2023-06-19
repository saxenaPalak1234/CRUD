let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts")
    
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});
let formValidation=()=>{
    if(input.value ===""){
        msg.innerHTML = "post cannot be blank";
        console.log("failure");
    }else{
        console.log("success");
       msg.innerHTML ="";
       acceptData();
    }
};
let data = {};

let acceptData = ()=>{
    data["text"] = input.value;
    console.log(data);
    createPost();
    
}
//create a post using javaScript template literals
let createPost = () =>{
    posts.innerHTML+=`
    <div>
    <p> ${data.text}</p>
    <span class="options">
    <i onClick="editpost(this)" class="fas fa-edit"></i>
    <i onClick="deletepost(this)" class="fas fa-trash-alt"></i>
    </span>
    </div>
    `;
    input.value = "";
};
let deletepost = (e)=>{
    e.parentElement.parentElement.remove();
};
let editpost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}
