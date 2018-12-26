function processRGB(e) {
    console.log(e);
    console.log(this.value);
}

function processHex(e) {
    console.log(e);
    console.log(this.value);
}

const rgbInput = document.querySelector('#rgb');
const hexInput = document.querySelector('#hex');

rgbInput.addEventListener('keydown', processRGB);
hexInput.addEventListener('keydown', processHex);