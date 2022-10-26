import commentsPopup from './comment-popup.js';
import displayComments from './comments-utils.js';

const shows = document.querySelector('.shows');
export default shows;

const showData = (data) => {
  let count = 0;

  data.forEach((show) => {
    if (count < 8) {
      const showsContainer = document.createElement('div');
      showsContainer.classList.add('my-show');
      showsContainer.innerHTML = `
      <div class="my-show-image">
        <img src="${show.image.original}"></img>
      </div>
      <div class="my-show-title">
            ${show.name}
            <i class="bi bi-suit-heart" data-id='${show.id}'></i>
      </div>`;

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
};

const getShows = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();

  showData(data);
};

getShows();
