const box = document.querySelector(".box")
const API_URL = "https://api.adviceslip.com/advice"
const adviceID = document.querySelector("#span")
const adviceText = document.querySelector("#advice-text")
const btn = document.querySelector("#btn")

const getAdvice = async () => {
    try {
        const response = await fetch(API_URL)
        const advice = await response.json()
        adviceID.textContent = advice.slip.id
        adviceText.textContent = advice.slip.advice

    } catch (err) { 
        console.log(err)
    }
}
getAdvice()


btn.addEventListener('click', () => {
    getAdvice()
})
