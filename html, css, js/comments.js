let comments = [];

document.getElementById('article-content-comments-sendbutton').onclick = function(){
    event.preventDefault();
    let commentName = document.getElementById('article-content-comments-inputname');
    let commentBody = document.getElementById('article-content-comments-textarea-this');
    
    let comment = {
        name : commentName.value, 
        body : commentBody.value,
        time : Math.floor(Date.now()/1000)
    }
    
    commentName.value = '';
    commentBody.value = '';
    comments.push(comment);
    
    saveComments();
    showDate();
    showName();
    showText();
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function showDate(){
    let commentField = document.getElementById('article-content-comments-comment-date');
    let out = '';
    comments.forEach(function(item){
        out += `<p class="text-right small">${timeConverter(item.time)}</p>`;
    });
    
    commentField.innerHTML = out;
}

function showName(){
    let commentField = document.getElementById('article-content-comments-comment-nameauthor');
    let out = '';
    
    comments.forEach(function(item){
        out += `<p class="article-content-comments-comment-nameauthor">${item.name}</p>`;
    });
    
    commentField.innerHTML = out;
}

function showText(){
    let commentField = document.getElementById('article-content-comments-comment-text');
    
    let out = '';
    comments.forEach(function(item){
        out += `<p class="article-content-comments-comment-text">${item.body}</p>`;
    });
    
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['ЯНВАРЯ','ФЕВРАЛЯ','МАРТА','АПРЕЛЯ','МАЯ','ИЮНЯ','ИЮЛЯ','АВГУСТА','СЕНТЯБРЯ','ОКТЯБРЯ','НОЯБРЯ','ДЕКАБРЯ'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ', ' + year + '&nbsp;&nbsp;|&nbsp;&nbsp;' + hour + ':' + min + ':' + sec ;
    return time;
  }