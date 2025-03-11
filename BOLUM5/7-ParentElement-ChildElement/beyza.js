const section=document.querySelector('section');
console.log(section.children);
//section'ın childleri gösterir

console.log(Array.from(section.children));
// tipini array'e çevirir

Array.from(section.children).forEach(child =>{

    child.classList.add('section-element');
})

const baslik=document.querySelector('h2');
console.log(baslik.parentElement);
// h2'nin parentini gösterir

console.log(baslik.parentElement.parentElement);
// bir üst parentini gösterir

console.log(baslik.nextElementSibling);
// Aynı hizada yer alan bir sonraki kardeşini gösterir

console.log(baslik.previousElementSibling);
// Bir önceki kardeşini gösterir
