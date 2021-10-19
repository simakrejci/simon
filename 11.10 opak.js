

// Bez rekurze.....Když chci, aby mi to vrátilo nějaký parametr, tak tam musím vždy dát return// 
function součin (x,y){
    return x*y;
}

console.log(součin(1,5));


// S rekurzí chybí tam if//
// X=2 Y=1//
// x=5 y=3//
function součin1(x,y){
   return x+součin1(x,y-1);   
}

// S rekurzí Dan //
// X=2 Y=1//
// x=5 y=3//
function součin22(x,y){
    if (y == 0) return 0;
    return x+součin1(x,y-1);   
 }
console.log(součin22(5,2))

// S for cyklem//
// x=5 y=3//

function součin2(x,y){
    var vysledek;
    for (var i=0; i<=y; i++){
        vysledek += x;
    }
    return vysledek
}

function pocetDlouhychSlov(veta) {
    var pocet = 0;
    arrVeta = veta.split(" "); // Vezme to větu, v tý věte mi to za každou mezerou udělá cut, kdyby tam bylo a, tak mi to cutne za každým a
    for (var i=0; i<=arrVeta.lengt; i++) {
        for (x of arrVeta) {
            if (arrVeta[x] > 2) {
                pocet++;
            }
        }
    }
    return pocet;
}
