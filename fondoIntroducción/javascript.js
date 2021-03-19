/*
    Este archivo fue creado como fondo para el vídeo introductorio, 
    puedes revisarlo, pero es muy básico y desorganizado
*/

/**
 * This method add a new post in our publications
 * 
 * @param {string} title Title for the publication
 * @param {string} content The content visible on the post
 * @param {Object} data Data for the post
 */
const crateNewPost = (title, content, data) => {
    let postArea= document.getElementById('post-area');
    let post = document.createElement('div');
    post.classList.add('post-container');
    post.innerHTML=`
        <div class='post-container' id='POST-${postArea.children.length}' >
            <div class='post-header' >
                <b>${data.user} --- ${data.date} --- ${data.time}<b>
            </div>

            <h2>${title}</h2>

            <div class='post-content' >
                ${content}
            </div>
        </div>
    `;
    postArea.appendChild(post);
    console.log('post added');
}

/**
 * This method can get the info for the post and call the createNewPost function
 */
const getPostInfo = () => {
    let datetime = new Date();
    let data = {
        'user':document.getElementById('user').value,
        'date': `${datetime.getDate()}/${datetime.getMonth()+1}/${datetime.getFullYear()}`,
        'time': `${datetime.getHours()} : ${datetime.getMinutes()}`
    };
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    if(title != '' && title != null && content != '' && content != null ){
        crateNewPost(title,content,data);
    }else{
        alert('You need to write a title and content to create a new post');
    }
}