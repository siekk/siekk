document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "HI",
        "ewan ko lang"
        "pero ang ganda mo"
        "hindi pa Christmas pero"
        "Merry Christmas bebi"
        "oo na ginaya ko sayo"
        "hehe"
        "anyways"
        "isa pa"
        "diba gusto mo flowers"
        "eto, flowers"
    
    ];

    const delay = 100; // adjust the speed here
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                const charElement = document.createElement("span"); 
                charElement.textContent = char;
                charElement.style.animation = "glow 2s ease-in-out"; 
                lyricsElement.appendChild(charElement); 

                await new Promise((resolve) => setTimeout(resolve, delay));

                
                charElement.style.animation = "";
            }

            lyricsElement.appendChild(document.createElement("br")); 

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.textContent = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }

        setTimeout(function () {
            window.location.href = "flower.html"; //set here your next target html
        }, 700);
    }
    
    displayLyrics();
});