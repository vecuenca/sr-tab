window.location.href = 'resource://sr-tab/index.html';

var xhr = new XMLHttpRequest();

xhr.open('GET', "https://www.reddit.com/r/EarthPorn/hot.json", true)
xhr.send();
xhr.addEventListener('readystatechange', processRequest, false);

function processRequest(e) {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    var posts = response.data.children;

    // for now, ignore any post that isn't a direct link to an image
    // maybe later, we can try and figure out how to grab an image
    // from an indirect link (a flickr/imgur album, for example)
    posts = posts.filter(isUrlImage);

    var randomPost = posts[Math.floor(Math.random() * posts.length)];

    setImage(randomPost.data.url);
    setThreadTitle(randomPost.data.title);
  }  
}

function isUrlImage(post) {
    return(post.data.url.match(/\.(jpeg|jpg|png)$/) != null);
}

function setImage(imageUrl) {
  var img = document.createElement("IMG");
  img.src = imageUrl;
  img.className += "wallpaper";
  document.getElementById('img').appendChild(img);
}

function setThreadTitle(title) {
  // set div text
}
