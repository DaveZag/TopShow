const shows = document.querySelector('.shows');
const more = document.getElementById('more');

const getShows = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();

  showData(data);
};

const showData = (data) => {
  let show = '';

  let count = 0;

  data.forEach((e) => {
    if (count < 6) {
      show += `<div class="my-show">
            <div class="my-show-image">
          <img src="${e.image.medium}"></img>
          </div>
              <div class="my-show-title">
                  ${e.name}

                  <i class="bi bi-suit-heart"></i>
              </div>
          </div>`;
    }

    count++;
  });
  shows.innerHTML = show;
};

getShows();
