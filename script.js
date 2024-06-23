// Like button functionality
document.querySelectorAll('.post-actions .fa-heart').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
        if (button.classList.contains('liked')) {
            button.style.color = 'red';
        } else {
            button.style.color = 'black';
        }
    });
});

// Add comment functionality
document.querySelectorAll('.add-comment button').forEach(button => {
    button.addEventListener('click', () => {
        const post = button.closest('.post');
        const commentInput = post.querySelector('.add-comment input');
        const commentText = commentInput.value;
        if (commentText !== '') {
            const commentsContainer = post.querySelector('.comments');
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<span class="username">You</span> ${commentText}`;
            commentsContainer.appendChild(newComment);
            commentInput.value = '';
        }
    });
});

// Toggle follow button text on click
document.querySelectorAll('.suggestion button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Follow') {
            button.textContent = 'Following';
            button.style.backgroundColor = '#efefef';
            button.style.color = '#000';
        } else {
            button.textContent = 'Follow';
            button.style.backgroundColor = '#0095f6';
            button.style.color = '#fff';
        }
    });
});
