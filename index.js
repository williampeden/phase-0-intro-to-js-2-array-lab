// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat() {cats.push("Ralph");}
function destructivelyPrependCat() {cats.unshift("Bob");}
function destructivelyRemoveLastCat() {cats.pop();}
function destructivelyRemoveFirstCat() {cats.shift();}
function appendCat() {const newcats = [...cats, "Broom"];
    return newcats;}
function prependCat() {const oldcats = ["Arnold", ...cats];
    return oldcats;}
function removeLastCat() {const withoutLastCat = [cats.slice(0,-1)];
    return withoutLastCat;}
function  removeFirstCat() {const withoutFirstCat = [cats.slice(1)];
    return withoutFirstCat;}
