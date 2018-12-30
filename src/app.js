// TODO: Code refactoring
// TODO: Add in color picker
// TODO: Display color profile based on rgb or hex values
// TODO: Allow color picker to modify hex and rgb values
// TODO: Allow rgb or hex input to modify color picker

function processRGB(e) {
    const initial = Math.floor(this.value / 16);
    const rem = this.value % 16;
    const hex = `${initial.toString(16)}${rem.toString(16)}`;
    rgbOutput.innerHTML = this.value;
    hexInput.value = hex;
    hexOutput.innerHTML = hex;
}

function processHex(e) {
    const [ initial, rem ] = this.value.split('');
    const hexInitial = parseInt(initial, 16) * 16;
    const hexRem = rem ? parseInt(rem, 16) : 0;
    const rgb = hexInitial + hexRem;
    hexOutput.innerHTML = this.value;
    rgbInput.value = rgb;
    rgbOutput.innerHTML = rgb;
}

const rgbInput = document.querySelector('#rgb-input');
const hexInput = document.querySelector('#hex-input');

const rgbOutput = document.querySelector('.rgb-output');
const hexOutput = document.querySelector('.hex-output');

rgbInput.addEventListener('keyup', processRGB);
hexInput.addEventListener('keyup', processHex);