import { shows } from './getshows.js';
import './getshows.js';

const endpoint = new URL(
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VkL66oEPzdyEWHkyAEbV/likes'
);

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

    const getLikes = async () => {
      const res = await fetch(endpoint);
      const data = await res.json();
      console.log(data);
      data.forEach((item) => {
        if (item.item_id === liked) {
          let likes = item.likes;
          likes++;
        }
      });
    };
    getLikes();
  }
});
