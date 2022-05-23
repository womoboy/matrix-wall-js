//get canvas element
const canvas = document.getElementById('canvas1');

//set the type of canvas context
const context = canvas.getContext('2d');

//set the size of canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//set the character
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

//combain the characters
const alphabet = katakana + latin + nums;

//font size
const fontSize = 25;

//how columns fit on the screen
const columns = canvas.width / fontSize;

//the character of text start in the each rain drops
const rainDrops = [];

for(let i = 0; i < columns; i ++) {
    rainDrops[i] = 1;
}

const draw = () => {
    context.fillStyle = 'rgb(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.textAlign = 'center'
    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if(rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i] ++;
    }
};

setInterval(draw, 50);
