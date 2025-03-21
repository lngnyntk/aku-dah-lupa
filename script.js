function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('play');
    p = document.getElementById('lirik');

    button.addEventListener("click", playSong);

    function playSong() {
        button.style.display = 'none';
        console.log('Song is playing');
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
    
        (async function () {
            await sleep(1000);
            for (const baris_lagu of lirik) {
                for (const huruf of baris_lagu) {
                    if (huruf === ' ') {
                        p.innerText = p.innerText + ' ';
                        continue;
                    }
                    // process.stdout.write(huruf);
                    p.innerText = p.innerText + huruf;
                    await sleep(50);
                }
                p.innerText = p.innerText + '\n';
                // console.log(baris_lagu);
                await sleep(1000);
            }
        })();
    }
});

