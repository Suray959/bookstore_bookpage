
function addComment(commentText, time) {

    var newComment = document.createElement('div');
    newComment.className = 'yourComment';
    
  
    var headLine = document.createElement('div');
    headLine.className = 'headLine';
    var h4 = document.createElement('h4');
    h4.textContent = 'anonim';
    var pTime = document.createElement('p');
    pTime.className = 'time';
    pTime.textContent = time;
    headLine.appendChild(h4);
    headLine.appendChild(pTime);
    

    var pComment = document.createElement('p');
    pComment.className = 'comment';
    pComment.textContent = commentText;
    
 
    newComment.appendChild(headLine);
    newComment.appendChild(pComment);
    

    var commentContainer = document.querySelector('.commentAnonymous');
    commentContainer.appendChild(newComment);
}


var sendIcon = document.querySelector('.sendIcon');
sendIcon.addEventListener('click', function() {
    var inputField = document.querySelector('.commentObvious input');
    var commentText = inputField.value;
    var currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    addComment(commentText, currentTime);
    inputField.value = ''; // Input alanını temizle
});
