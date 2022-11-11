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