const getLeaderboardDataFromLocalStorage = () => {
    // some static data, we will replace it with the real data soon
    const localStorageData = [{
            username: "Aya",
            score: 190
        },
        {
            username: "Manar",
            score: 180
        },
        {
            username: "Nada",
            score: 170
        }
    ]

    return localStorageData
}
const hidden = document.querySelector(".rows-container")
let cartoona = ""

function refresh(data) {
    for (let i = 0; i < data.length; i++) {
        cartoona += `   <div class="exam-content">
     <div class="text" id="ranks">
         <p>${i}</p>
     </div>
     <div class="text" id="names">
         <p>${data[i].username}</p>
     </div>
     <div class=" text" id="scores">
         <p>${data[0].score}</p>
     </div>
 </div>`
    }
    hidden.innerHTML = cartoona;
}

console.log(hidden)
const btn_refresh = document.querySelector(".btn-primary")
console.log(btn_refresh)
const buildLeaderboard = (data) => {
    console.log(data)
    // step 1: empty the div with 'rows-container' class using innerHTML property
    btn_refresh.addEventListener("click", () => {
        hidden.innerHTML = "";
        refresh(data)
    })


    // step 2: use a for loop to create a row for each value in the data array

}

// we need to run this function when the file loads and when the refresh button is clicked
buildLeaderboard(getLeaderboardDataFromLocalStorage())

// implement the part related to refresh button here, just add an event listener