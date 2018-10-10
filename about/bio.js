const limit = 937;
const nama = document.getElementById('nama');
const nickname = document.getElementById('nick');
const biodata = document.getElementById('biodata');
const cerita = document.getElementById('cerita');

function loadBio(bio) {
  document.title = bio.nama;
  nama.innerText = bio.nama;
  nickname.innerText = bio.nick;
  [biodata, cerita].forEach(node => {
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  });
  [bio.phone, bio.email, bio.sma, bio.ttl]
    .map(data => {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(data));
      return li;
    })
    .forEach(data => biodata.appendChild(data));
  bio.cerita
    .map(text => {
      let p = document.createElement('p');
      p.appendChild(document.createTextNode(text));
      return p;
    })
    .forEach(node => cerita.appendChild(node));
}

function next(e) {
  let id = location.hash.slice(1);
  if (id < limit) ++id;
  while (data[id] === undefined && id < limit) {
    ++id;
  }
  location.hash = '#' + id;
}

function prev(e) {
  window.history.back();
}

function updateBio() {
  let id = location.hash.slice(1);
  let bio = data[id];
  document.getElementById('foto').src = '../foto/' + id + '.jpg';
  loadBio(data[parseInt(id)]);
}
