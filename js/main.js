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

    // Creo le condizioni, iniziamo con "FizzBuzz".
    if(i % 3 === 0 && i % 5 === 0){

        // Aggiungiamo al nostro "element" la scritta "FizzBuzz" e andiamo ad aggiungere una nuova classe "fizzbuzz".
        element.append("FizzBuzz");
        element.classList.add("fizzbuzz");
        console.log("FizzBuzz");
    }
}
