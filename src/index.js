import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import RidoY from './image/ridoy.jepg.jpg';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';
import post from './components/post';
import { Alert } from 'bootstrap';






//dom loading option

document.addEventListener('DOMContentLoaded' , getPost);



//create_post_form

document.getElementById('create_post_form').addEventListener('submit' , createPost);


//alert

 const msg = document.querySelector('.msg');
// //get crete_post_form element

//  document.getElementById('crate_post_form').addEventListener('submit' , createPost);


//get all post
function getPost(){


    axios.get('http://localhost:5050/posts').then(res => post.showPost(res.data))

        
    }

// create post

function createPost(e){

  e.preventDefault();

let form_data = new FormData(e.target);
let data = Object.fromEntries(form_data.entries());




if(data.name == ''|| data.uphoto == ''|| data.content == ''|| data.photo == ''){

    msg.innerHTML =  Alert.danger('All fields are required !')
}else{


 



//sent post
axios.post('http://localhost:5050/posts' ,{

    name         : data.name,
    user_photo   : data.uphoto,
    content      :data.content,
    post_photo   :data.photo,


}).then(res => {

    getPost();
    msg.innerHTML = Alert.success('post created successful')



});




}
}