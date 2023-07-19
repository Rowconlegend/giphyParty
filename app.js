//M2A9nTXCaj2I0rdCXE9aM9pm3ZjOuCys API key
//api.giphy.com/v1/gifs/search	api URL

// const $inp = $('#searchMeme');
// const key = "M2A9nTXCaj2I0rdCXE9aM9pm3ZjOuCys";
// const $gifArea = $('#gif-Container');



// async function searchForMeme(){
    
//     console.log(res.data);
// }

// function addGif(res){
//     let numResults = res.data.length;
//     if(numResults){
//         let randomIdx = math.floor(Math.random() * numResults);
//         let $newCol = $("<div>", {class: "col-lg-4 col-12 mb-4"});
//         let $newGif = $("<img>", {src: res.data[randomIdx].images.original.url, class: "w-100"});
//         $newCol.append($newGif);
//         $gifArea.append($newCol);
        
//     }

// }

// $("form").on("submit", async function(evt) {
//     evt.preventDefault();

//     let searchTerm = $inp.val();
//     $inp.val() = "";
//     const res = await axios.get("api.giphy.com/v1/gifs/search", {params: {q: searchTerm, api_key: key}});
// });

// addGif(response.data);

const $gifArea = $("#gif-container");
const $searchInput = $("#searchMeme");

/* use ajax result to add a gif */

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

/* handle form submission: clear search box & make ajax call */

$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "M2A9nTXCaj2I0rdCXE9aM9pm3ZjOuCys"
    }
  });
  addGif(response.data);
});

/* remove gif */

$("#remove").on("click", function() {
  $gifArea.empty();
});









// async function getUsers(token){
//     const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', { params: { token }});
//     console.log(res);
// }

// async function signup(username, password, name){
//     const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', {user: {name, username, password}})
//     console.log(res);
// }
// async function login(username, password){
//     const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', {user: {username, password}})
//     console.log(res);
//     return res.data.token;
// }

// async function getUsersWithAuth(){
//     const token =  await login('migueldagoat', 'password');
//     getUsers(token);
// }
// // getUsers();

// async function createStory(){
//     const token =  await login('migueldagoat', 'password');
//     const newStory = {
//         token,
//         story: {
//             author: "Miguel Garcia",
//             title: "Living with Bipolar",
//             url: 'http://chickens4lyfe.com'
//             }
//     }
//     const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory)
//     console.log(res);
// }

// async function getLaunches() { 
//     const res = await axios.get('https://api.spacex21data.com/v3/launches');
//     renderLaunches(res.data)
//     }
    
    
//     function renderLaunches(launches){
//         const ul = document.querySelector("#launches");
//         for (let launch of launches){
//         ul.append(makeLaunchLI(launch));
//     }}
    
//     function makeLaunchLI(launch){
//         const newLi = document.createElement('li');
//         const mission = document.createElement('b');
//         mission.innerText = launch.mission_name;
//         newLi.append(mission);
//         newLi.innerHTML += (` - ${launch.rocket.rocket_name}`);
//         return newLi;
    
//     }
    
//     const btn = document.querySelector('#getLaunches');
//     btn.addEventListener('click', getLaunches);
