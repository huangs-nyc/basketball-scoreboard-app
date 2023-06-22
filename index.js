let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")
let periodEl = document.getElementById("period-count")

let homeScore = 0
let guestScore = 0
let periodCount = 1

let resetInput = ''
let count = 0
let group = ''

function increment(group, count) {
    if (group === 'h') {
        homeScore += count
        homeEl.textContent = homeScore
    } else if (group === 'g') {
        guestScore += count
        guestEl.textContent = guestScore
    } else {
        if (periodCount+1 > 4) {
            periodCount = 5
            periodEl.textContent = "OVR"
        } else {
            periodCount += count
            periodEl.textContent = periodCount
        }
    }
}

function decrease(group, count) {
    if (group === 'h') {
        homeScore -= count
        homeEl.textContent = homeScore
    } else if (group === 'g') {
        guestScore -= count
        guestEl.textContent = guestScore
    } else {
        if (periodCount-1 > 0) {
            periodCount -= count
            periodEl.textContent = periodCount
        }
    }
}

function reset(resetInput) {
    if (resetInput === 'h') {
        homeScore = 0
        homeEl.textContent = homeScore
    } else if (resetInput === 'p') {
        periodCount = 1
        periodEl.textContent = periodCount
    } else {
        guestScore = 0
        guestEl.textContent = guestScore
    }
}