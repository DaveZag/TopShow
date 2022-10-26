import shows from './getshows.js';

const endpoint = new URL(
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VkL66oEPzdyEWHkyAEbV/likes'
);

const getLikes = async (e) => {
  const res = await fetch(endpoint);
  const data = await res.json();
  console.log(data);
  data.forEach((item) => {
    if (item.item_id === e.target.getAttribute('data-id')) {
      let likes = item.likes;
      likes += 1;
      console.log(likes);
    }
  });
};

shows.addEventListener('click', (e) => {
  const like = e.target;
  if (like.tagName === 'I') {
    const liked = like.getAttribute('data-id');
    fetch(endpoint, {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${liked}`,
      }),
    }).then((response) => response);

    getLikes(e);
  }
});
