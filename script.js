let speech = new SpeechSynthesisUtterance();

let voice = [];

let VoiceSelector = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () =>{
    voices =window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (VoiceSelector.options[i] = new Option(voice.name,i)));
};

VoiceSelector.addEventListener("change", () => {
    speech.voice = voices[VoiceSelector.value];
});
document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})