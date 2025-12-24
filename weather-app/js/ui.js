class UI {
    constructor() {
        this.cardDiv = document.querySelector(".forecast-wrapper");
    }

    clearForecast() {
        this.cardDiv.innerHTML = "";
    }

    weatherForecast(icon, tittle, date, mintemp, maxtemp) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${icon}" alt="Hava ikonu">
            <p><span class="card-tittle">${tittle}</span></p>
            <p><span class="card-date">${date}</span></p>
            <p><span class="card-degree1">Maks: ${maxtemp}</span></p>
            <p><span class="card-degree2">Min: ${mintemp}</span></p>
        `;
        this.cardDiv.appendChild(card);
    }
}
