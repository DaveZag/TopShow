const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BjbMo6GgbwwvoOUWfiq3/likes';

const saveLike = async (item) => {
  const post = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: item.id,
    }),
  });
  return post;
};

const getLikes = async (show, likesContainer) => {
  const response = await fetch(url);
  const data = await response.json();
  data.forEach((like) => {
    if (like.item_id === show.id) {
      likesContainer.innerText = like.likes;
    }
  });
};

export { saveLike, getLikes };
