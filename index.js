let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")
let periodEl = document.getElementById("period-count")

let homeScore = 0
let guestScore = 0
let periodCount = 1

function homeIncrement() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function guestIncrement() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function periodIncrement() {
    periodCount += 1
    periodEl.textContent = periodCount
}

function homeDecrease() {
    homeScore -= 1
    homeEl.textContent = homeScore
}

function guestDecrease() {
    guestScore -= 1
    guestEl.textContent = guestScore
}

function periodDecrease() {
    periodCount -= 1
    periodEl.textContent = periodCount
}

function homeReset() {
    homeScore = 0
    homeEl.textContent = homeScore
}

function guestReset() {
    guestScore = 0
    guestEl.textContent = guestScore
}

function periodReset() {
    periodCount = 1
    periodEl.textContent = periodCount
}