const displayComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VkL66oEPzdyEWHkyAEbV/comments?item_id=${id}`;
  const comments = await fetch(url);
  comments
    .then((response) => response.json)
    .then((data) => data.forEach((element) => ` 
    <li class="comment flex">
    <span class="Date">${element.creation_date}</span>
    <div class="comment-text">
        <span class="name">${element.username}</span> :
        <span class="text-cmt">${element.comment}</span>
    </div>
    </li>`));
};

export default displayComments;
