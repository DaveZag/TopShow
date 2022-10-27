import commentsPopup from './comment-popup.js';
import displayComments from './comments-utils.js';
import itemCounter from './counter.js';
import { saveLike, getLikes } from './involvement.js';

const shows = document.querySelector('.shows');
export default shows;

const showData = (data) => {
  let count = 0;

  data.forEach((show) => {
    if (count < 9) {
      const showsContainer = document.createElement('div');
      showsContainer.classList.add('my-show');
      showsContainer.setAttribute('id', show.id);
      showsContainer.innerHTML = `
      <div class="show-image">
        <img src="${show.image.original}"></img>
      </div>
      <div class="my-show-title">
            ${show.name}
            <div class = "likes-cont flex">
              <i class="bi bi-suit-heart like-btn" data-id='${show.id}'></i>
              <p class = "likes"></p>
            </div>
      </div>`;
      const likesContainer = showsContainer.querySelector('.likes');
      const likeBtn = showsContainer.querySelector('.like-btn');
      getLikes(show, likesContainer);

      likeBtn.addEventListener('click', () => {
        saveLike(show).then((res) => {
          if (res.status === 201) {
            getLikes(show, likesContainer);
          }
        });
      });

      const commentBtn = document.createElement('button');
      commentBtn.classList.add('comment-btn');
      commentBtn.setAttribute('type', 'button');
      commentBtn.innerText = 'Comment';
      commentBtn.addEventListener('click', () => {
        commentsPopup(show, show.id, 0);
        displayComments(show.id);
      });
      showsContainer.appendChild(commentBtn);
      shows.appendChild(showsContainer);
    }

    count += 1;
  });
  const allShows = [...document.querySelectorAll('.my-show')];
  const showNumber = document.querySelector('.show-num');
  showNumber.innerText = itemCounter(allShows) || 0;
};

const getShows = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();

  showData(data);
};

getShows();
