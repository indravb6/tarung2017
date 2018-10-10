let id;

const container = document.getElementsByClassName('container')[0];
const navBtn = document.getElementById('nav-btn');
const navMenu = document.createElement('div');
const photoGrid = document.createElement('div');

const toggle = () => navMenu.classList.toggle('hide');
const loadGroup = i => () => (location.hash = '#' + i);

const buttons = kelompok.map((name, index) => {
  let button = document.createElement('h1');
  button.addEventListener('click', loadGroup(index), false);
  button.appendChild(document.createTextNode(name.toUpperCase()));
  return button;
});

const updateMenu = () => {
  updatePhotos();
  while (navMenu.hasChildNodes()) {
    navMenu.removeChild(navMenu.lastChild);
  }
  navBtn.innerHTML = kelompok[id];
  for (j = 0; j < kelompok.length; j++) {
    if (j != id) {
      navMenu.appendChild(buttons[j]);
    }
  }
  navBtn.innerHTML = kelompok[id].toUpperCase();
};

const makeDisplay = (profile, absen) => {
  let wrapper = document.createElement('div');
  {
    wrapper.className = 'wrapper';
  }
  let avatar = document.createElement('img');
  {
    avatar.className = 'avatar';
    avatar.src = 'foto/' + absen + '.jpg';
  }
  let link = document.createElement('a');
  {
    link.className = 'description';
    link.href = 'profile/#' + absen;
  }
  let action = document.createElement('div');
  {
    action.className = 'detail action';
    action.innerHTML = '>> view bio';
  }
  let name = document.createElement('div');
  {
    name.className = 'detail name';
    name.innerHTML = profile.nama;
  }
  [action, name].forEach(node => link.appendChild(node));
  [avatar, link].forEach(node => wrapper.appendChild(node));
  return wrapper;
};

const updatePhotos = () => {
  while (photoGrid.hasChildNodes()) {
    photoGrid.removeChild(photoGrid.lastChild);
  }
  for (let i = 0; i < 40; i++) {
    let absen = (id + 1) * 100 + 1 + i;
    profile = data[absen];
    if (profile !== undefined) {
      photoGrid.appendChild(makeDisplay(profile, absen));
    }
  }
};

const update = () => {
  id = parseInt(location.hash.slice(1)) || 0;
  document.title = 'About Us | ' + kelompok[id];
  toggle();
  setTimeout(updateMenu, 250);
};

navBtn.addEventListener('click', toggle, false);
navMenu.className = 'list';
photoGrid.className = 'grid';
[navMenu, photoGrid].forEach(node => container.appendChild(node));
