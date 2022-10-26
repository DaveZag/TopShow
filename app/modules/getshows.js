export const shows = document.querySelector('.shows');

const getShows = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();

  showData(data);
};

const showData = (data) => {
  let show = '';

  let count = 0;

  data.forEach((e) => {
    // console.log(e);
    if (count < 6) {
      show += `<div class="my-show">
            <div class="my-show-image">
          <img src="${e.image.medium}"></img>
          </div>
              <div class="my-show-title">
                  ${e.name}

                  <i class="bi bi-suit-heart" data-id='${e.id}'></i>
              </div>
              <div></div>
          </div>`;
    }

    count++;
  });
  shows.innerHTML = show;
};

getShows();

// const likebtn = document.querySelector('.my-show-title');
