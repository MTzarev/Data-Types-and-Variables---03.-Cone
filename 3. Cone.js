function cone(radius, height) {
    let s = Math.sqrt(radius * radius + height * height);
    let L = Math.PI * radius * s;
    let B = Math.PI * radius * radius;
    let A = L + B;
    let V = (Math.PI * radius * radius * height) / 3;



    console.log(`volume = ${V.toFixed(4)}`);
    console.log(`area = ${A.toFixed(4)}`);
}
//cone(3, 5);
cone(3.3, 7.8);


// A = L + B
// L= pi * r*S
// S  - hipotenuza
// s kvadrat = a kvadrat + b kvadrat 