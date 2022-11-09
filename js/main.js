// Creo un ciclo per la nostra variabile "i" da "1" a "100".
for( let i = 1; i <= 100; i++){
    console.log(i)

    let contenitore = document.querySelector(".container");

    // Creo dei "div"
    let element = document.createElement("div");

    // Aggiungo un'altra classe ai "div".
    element.classList.add("square");

    // Al contenitore andiamo ad aggiungere "element".
    contenitore.append(element);


}
