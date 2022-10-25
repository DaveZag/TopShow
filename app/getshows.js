const shows = document.querySelector('.shows');

const getshows = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();

  let show = '';

  data.forEach((e) => {
    console.log(e);
    show += `<div class="my-show">
      <div class="my-show-image">
     <img src="${e.image.medium}"></img>
  </div>
      <div class="my-show-title">
          ${e.name}

          <i class="bi bi-suit-heart"></i>
      </div>
  </div>`;
  });

  shows.innerHTML = show;
};

getshows();
