function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('play');
    const p = document.getElementById('lirik');

    button.addEventListener("click", playSong);

    function playSong() {
        button.style.display = 'none';
        console.log('Song is playing');
        new Audio('audio.mp4').play()

        const lirik = [
            "Aku dah lupa tak ingat lagi",
            "Nama kau pun hilang dari hati",
            "Aku move on hidup sendiri",
            "Tak perlu kau aku happy",
            "Aku dah lupa tak ingat lagi",
            "Nama kau pun hilang dari hati",
            "Aku move on hidup sendiri",
            "Tak perlu kau aku happy"
        ];

        console.log("Aku Dah Lupa");
        p.innerHTML = "";

        (async function () {
            await sleep(1000);
            for (const baris_lagu of lirik) {
                let span = document.createElement("span");
                p.appendChild(span);

                for (const huruf of baris_lagu) {
                    span.textContent += huruf;
                    await sleep(50);
                }

                p.appendChild(document.createElement("br"));
                await sleep(1000);
            }
        })();
    }
});
