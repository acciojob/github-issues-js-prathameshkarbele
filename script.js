//your code here
let ol = document.getElementById('oll');

fetch("https://api.github.com/repositories/1296269/issues?page=${1}&per_page=5.")
    .then((response) => response.json())
    .then((product) => {
        document.getElementById('page_number').innerHTML = `Page Number 1`;
        for (let i = 0; i < 5; i++) {
            const element = product[i];
            console.log(product[i].title);
            ol.innerHTML += `<li>${product[i].title}</li>`
        }
    })

let i = 1;

let next = document.getElementById('load_next');
let prev = document.getElementById('load_prev');

next.addEventListener('click', () => {
    i = i + 1;
    fetch(`https://api.github.com/repositories/1296269/issues?page=${i}&per_page=5.`)
        .then((response) => response.json())
        .then((product) => {
            document.getElementById('page_number').innerHTML = `Page Number ${i}`;
            ol.innerHTML = '';
            for (let z = 0; z < 5; z++) {
                const element = product[z];
                console.log(product[z].title);
                ol.innerHTML += `<li>${product[z].title}</li>`
            }
        })
})

prev.addEventListener('click', () => {
    if (i === 1) i = 1;
    else i = i - 1;
    fetch(`https://api.github.com/repositories/1296269/issues?page=${i}&per_page=5.`)
        .then((response) => response.json())
        .then((product) => {
            document.getElementById('page_number').innerHTML = `Page Number ${i}`;
            ol.innerHTML = '';
            for (let z = 0; z < 5; z++) {
                const element = product[z];
                console.log(product[z].title);
                ol.innerHTML += `<li>${product[z].title}</li>`
                console.log(ol.innerHTML);
            }
        })
})