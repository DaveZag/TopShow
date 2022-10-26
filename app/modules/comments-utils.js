const displayComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VkL66oEPzdyEWHkyAEbV/comments?item_id=${id}`;
  const comments = await fetch(url);
  const commentContainer = document.querySelector('.comments');
  comments
    .then((response) => response.json)
    .then((data) => {
      commentContainer.innerHtml = `
        ${data.forEach((element) => ` 
      <li class="comment flex">
        <span class="Date">${element.creation_date}</span>
        <div class="comment-text">
            <span class="name">${element.username}</span> :
            <span class="text-cmt">${element.comment}</span>
        </div>
      </li>`)}`;
    })
    .catch((error) => {
      console.error(error);
    });
};

// Save comments to API
const saveComments = async (id, name, commentText) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VkL66oEPzdyEWHkyAEbV/comments';
  const comments = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: commentText,

    }),
  });
  comments
    .then((result) => result.status)
    .catch((error) => console.error(error));
};

export default displayComments;
export { saveComments };
