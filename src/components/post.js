



class Post {


    constructor(){

        this.post_timeline = document.getElementById('post-timeline-load');
    }




    /**
     * show all post
     */

    showPost(posts){


    let post =  '';
    posts.map((data, index) => {


        let {name , user_photo , content , post_photo} = data;

        post +=`
        
        <div class="card shadow-sm my-3">
        <div class="card-body">

        </div>
        <div class="card shadow-sm my-3">
            <div class="card-body">

                <div class="user-timeline-info d-flex justify-content-between">
                    <div class="user-info d-flex align-items-center">
                        <img id ="" src="${user_photo}" alt="">

                        <h3 class="ms-3">${name}</h3>
                       

                    </div>

                    <button>...</button>

                </div>
                <div class="user-post-content">
                    <p>${content}</p>

                        <img class="w-100" src=" ${post_photo}" alt="">


                </div>

            </div>

    </div>

</div>
        
        
        `;


    });


    this.post_timeline.innerHTML = post;

    }




}

let post = new Post;

export default post;