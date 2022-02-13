const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr2 = []
  const arr3 = []
  const arr = expr.split(/(.{10})/).filter(x => x);
  arr.forEach(value => {
    const a = value.replace(/^0+/, "")
    arr2.push(a)
  })
  arr2.forEach(value => {
    const b = value.replace(/10/g, ".").replace(/11/g, "-")
    if (b === "**********") {
      arr3.push(' ')
    }
    arr3.push(MORSE_TABLE[b])
  })



return arr3.join('')
}

module.exports = {
    decode
}