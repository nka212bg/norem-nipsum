"use strict";
//------ variables ------
var language = {
    English: {
        alphabet: 'abcdefghijklmnopqrstuwxyz',
        title: 'randome text generator',
        lang: 'language',
        language_s: 'english',
        sentence_length: 'sentence length',
        short: 'short',
        mid: 'mid',
        long: 'long',
        sentences: 'sentences',
        generate: 'generate',
        response: 'response'
    },
    Български: {
        alphabet: 'абвгдежзийклмнопрстуфхцчшщъьюя',
        title: 'генератор на произволен текст',
        lang: 'език',
        language_s: 'български',
        sentence_length: 'дължина на изречение',
        short: 'късо',
        mid: 'средно',
        long: 'дълго',
        sentences: 'изречения',
        generate: 'генерирай',
        response: 'резултат'
    }
}


var short = document.querySelector("#short");
var mid = document.querySelector("#mid");
var long = document.querySelector("#long");
var sentences = document.querySelector("#sentences");
var generate = document.querySelector("#generate");
var text = document.querySelector("#text_");

var sentence_length = () => {
    if (document.querySelector('input[name = "sentence-length"]:checked').value === "short") {
        return randomer(5, 2); // max, min
    } else if (document.querySelector('input[name = "sentence-length"]:checked').value === "mid") {
        return randomer(13, 6); // max, min
    } else {
        return randomer(20, 13); // max, min
    }
}

var word = [], sentence = [], readyString = "", alphabet = ['a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'];


document.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        mkReadyString();
    }
});
function mkReadyString() {
    readyString = "";
    for (var i = 0; i < parseInt(document.querySelector("#sentence-length-input").value); i++) {
        readyString += mcSentence();
    }
    text.innerHTML = readyString;
    CopyToClipboard(text);
}


function mcSentence() {
    sentence = [];
    var sentenceLength = sentence_length();

    for (var i = 0; i < sentenceLength; i++) {
        mixer(alphabet);
        word = alphabet.slice(0, randomer(11, 2)).join("");
        sentence.push(word);
    }
    sentence[0] = sentence[0].charAt(0).toUpperCase() + sentence[0].slice(1);
    sentence = sentence.join(" ");
    sentence = sentence + ". ";
    return sentence;
}

function randomer(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function mixer(arr) {
    var length = arr.length;
    var temp = [];
    for (var i = 0; i < length; i++) {
        var rand = randomer(length - 1);
        temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }
    return arr;
}


//------ CopyToClipboard ------
function CopyToClipboard(containerid) {

    var range = document.createRange();
    range.selectNode(document.querySelector('#text_'));
    window.getSelection().addRange(range);
    document.execCommand('Copy');

    document.querySelector(".copy-feedback").style.display = "block";
    setTimeout(() => {
        document.querySelector(".copy-feedback").style.display = "none";
    }, 2500);
}













