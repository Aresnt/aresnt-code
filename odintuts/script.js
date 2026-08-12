const username = "Aresnt";
let health = 20;
let damage = 6;
health -= damage;
console.log(`Remaining Health: ${health}`)
health -= damage;
console.log(`Remaining Health: ${health}`)

let coins = 100;
function add(x) {
    coins += x;
}

function spend(y) {
    coins -= y;
}

function multiplyIt(z) {
    coins *= z;
}

add(554);
spend(312);
multiplyIt(232);

console.log(`Coins are: ${coins}`);