import itemCount from './counter.js';

const displayComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BjbMo6GgbwwvoOUWfiq3/comments?item_id=${id}`;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const commentContainer = document.querySelector('.comments');
      commentContainer.innerHTML = '';
      const commentNumber = document.querySelector('.comments-num');
      commentNumber.innerHTML = itemCount(data) || 0;

      data.forEach((comment) => {
        const li = document.createElement('li');
        li.classList.add('comment', 'flex');
        li.innerHTML = `
          <span class="Date">${comment.creation_date}</span>
            <div class="comment-text">
                <span class="name">${comment.username}</span> :
                <span class="text-cmt">${comment.comment}</span>
            </div>
        `;
        commentContainer.appendChild(li);
      });
    })
    .catch((error) => error);
};

// Save comments to API
const saveComments = async (id, name, commentText) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BjbMo6GgbwwvoOUWfiq3/comments';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: commentText,

    }),
  }).then((response) => response.status);
};

export default displayComments;
export { saveComments };
