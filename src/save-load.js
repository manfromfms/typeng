const settings = {
    "goal-speed": 40,
    "letters-order": "eariotnslcudpmhgbfywkvxzjq",
    "letters-in-use": 6,
}


var lettersTypingSpeed = {
    'a': {
        latest: []
    },
    'b': {
        latest: []
    },
    'c': {
        latest: []
    },
    'd': {
        latest: []
    },
    'e': {
        latest: []
    },
    'f': {
        latest: []
    },
    'g': {
        latest: []
    },
    'h': {
        latest: []
    },
    'i': {
        latest: []
    },
    'j': {
        latest: []
    },
    'k': {
        latest: []
    },
    'l': {
        latest: []
    },
    'm': {
        latest: []
    },
    'n': {
        latest: []
    },
    'o': {
        latest: []
    },
    'p': {
        latest: []
    },
    'q': {
        latest: []
    },
    'r': {
        latest: []
    },
    's': {
        latest: []
    },
    't': {
        latest: []
    },
    'u': {
        latest: []
    },
    'v': {
        latest: []
    },
    'w': {
        latest: []
    },
    'x': {
        latest: []
    },
    'y': {
        latest: []
    },
    'z': {
        latest: []
    },
}

if(localStorage.getItem('lettersTypingSpeed')) {
    lettersTypingSpeed = JSON.parse(localStorage.getItem('lettersTypingSpeed'))
}

const saveUserData = () => {
    localStorage.setItem('lettersTypingSpeed', JSON.stringify(lettersTypingSpeed))
}