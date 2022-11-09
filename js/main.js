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

    // Aggiungo la condizione per "Fizz".
    }else if ( i % 3 === 0){

    // Aggiungiamo al nostro "element" la scritta "Fizz" e andiamo ad aggiungere una nuova classe "fizz".
    element.append("Fizz");
    element.classList.add("fizz");
    console.log("Fizz");
    
    // Aggiungo la condizione per "Buzz"
    }else if( i % 5 === 0){
    
    // Aggiungiamo al nostro "element" la scritta "Buzz" e andiamo ad aggiungere una nuova classe "buzz".
    element.append("Buzz");
    element.classList.add("buzz");
    console.log("Buzz");    

    }else{console.log (i);
    
    // Aggiungiamo al nostro "element" la scritta "i" che andrà ad inserire i relativi numeri (1,2,4,7,8...)
    element.append(i);
    }
}
