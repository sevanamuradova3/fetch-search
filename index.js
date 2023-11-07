const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const mydiv = document.getElementById("mydiv");
const form = document.getElementById("forms");
const API = 'https://api.github.com/users/';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    searchUser();
});

searchUser = () => {
    fetch(API + searchInput.value)
        .then((res) => res.json())
        .then((data) => {
            renderUser(data);
        });
}

renderUser = (data) => {
    const h2 = document.createElement('h1');
    h2.textContent = data.login;

    const userImage = document.createElement('img');
    userImage.src = data.avatar_url;

    const Followers = document.createElement('p');
    Followers.textContent = `followers: ${data.followers}`;

    const Following = document.createElement('p');
    Following.textContent = `following: ${data.following}`;

    mydiv.innerHTML = ""; 
    mydiv.append(h2, userImage, Followers, Following);
}
