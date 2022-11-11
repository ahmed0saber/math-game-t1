const getLeaderboardDataFromLocalStorage = () => {
    if(localStorage.getItem("leaderboard")){
        return JSON.parse(localStorage.getItem("leaderboard"))
    }
    return []
}

const hidden = document.querySelector(".rows-container")
let cartoona = ""
function refreshLeaderboard(data) {
    for (let i = 0; i < data.length; i++) {
        cartoona += `
        <div class="exam-content">
            <div class="text" id="ranks">
                <p>${i + 1}</p>
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

const btn_refresh = document.querySelector(".btn-primary")
const buildLeaderboard = (data) => {
    cartoona = ""
    hidden.innerHTML = "";
    refreshLeaderboard(data)
}
buildLeaderboard(getLeaderboardDataFromLocalStorage())
btn_refresh.addEventListener("click", () => buildLeaderboard(getLeaderboardDataFromLocalStorage()))