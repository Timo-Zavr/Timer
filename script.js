const HoursSel = "#hours"
const MinutesSel = "#minutes"
const SecondssSel = "#seconds"
const StartSel = ".button__start"
const StopSel = ".button__stop"

const HoursIn = document.querySelector(HoursSel)
const MinutesIn = document.querySelector(MinutesSel)
const SecondssIn = document.querySelector(SecondssSel)
const StartB = document.querySelector(StartSel)
const StopB = document.querySelector(StopSel)

let H
let M
let S
let TimeUp

function startTimer(event){
    event.preventDefault()
    
    H = parseInt(HoursIn.value)
    M = parseInt(MinutesIn.value)
    S = parseInt(SecondssIn.value)

    TimeUp = H * 3600 + M * 60 + S

    intervalId = setInterval(updateTimer, 1000)
    document.documentElement.requestFullscreen()

    HibeEl(StartB)
    ShowEl(StopB)

    StopB.style.opacity = 0.1
}
function updateTimer(){
    if (TimeUp > 0){
        TimeUp--
    
        H = Math.floor(TimeUp / 3600)
        M = Math.floor(TimeUp % 3600 / 60)
        S = TimeUp % 60
    
        HoursIn.value = H.toString().padStart(2, "0")
        MinutesIn.value = M.toString().padStart(2, "0")
        SecondssIn.value = S.toString().padStart(2, "0")
    }   else{
        stopTimer()
    }
}
function stopTimer(){
    clearInterval(intervalId)
    document.exitFullscreen()

    HibeEl(StopB)
    ShowEl(StartB)
}

function HibeEl(element){
    element.classList.add("hide")
}

function ShowEl(element){
    element.classList.remove("hide")
}

StartB.addEventListener("click", startTimer)

StopB.addEventListener("click", stopTimer)