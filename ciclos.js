// 8.	Digite un número (altura) y a partir de él cree una escalera de asteriscos o el carácter que desee; con esa altura.

    // let resultado = prompt("Ingresa el tamaño de la escalera")
    // for (let i = 1; i <= altura; i++) {
    //   resultado += '*'.repeat(i) + '\n';
    // }
    
    // 9.	Digite un número (altura) y a partir de él cree una escalera invertida de asteriscos o el carácter que desee; con esa altura. Deberá quedar así, si ponemos una altura de 5.
    
    //     let resultado = prompt("Ingresa el tamaño de la escalera invertida")
    //     for (let i = altura; i > 0; i--) {
    //       resultado += '*'.repeat(i) + '\n';
    //     }
    //           // Ejemplo practico
    //   let altura = parseInt(prompt("Ingrese la altura de la escalera invertida:"));
    //   console.log(escaleraInvertida(altura));
      
    //   10. Cree un programa que permite registrar el número de compras que se venden cada día. pedir al usuario cuantos productos va a comprar y registrar el precio unitario, calcular el valor total de cada compra y al finalizar el día calcular cuántas facturas se hicieron y el total general.
    // var clientes = prompt("Senior buen dias¿Deseas realizar una compra?");
    // var numProducto = parseInt(prompt("Digite # de productos a comprar"));
    // var comprasXDia= 0;
    // var x = 1;
    // while (clientes != "no") {
    //     document.write("Cliente #"+x+"<br>");
    //     document.write("# Productos "+numProducto+"<br>");
    //     var y =1;
    //     var totalProduct = 0;
    //     while (y <= numProducto) {
    //         var valorProduct = parseInt(prompt("Digita el valor del productoc"+y));
    //         document.write("Valor del producto : "+y+ "es :"+valorProduct+ "<br>");
    //         y++
    //         totalProduct = totalProduct + valorProduct;
    //     }
    //     document.write("El total de la compra es : "+totalProduct+ "<br>");
    //     comprasXDia = comprasXDia + totalProduct;
    //     clientes = prompt("¿Deseas comprar?");
    //     x++;
    //     if (clientes == "no") {
    //         alert("Gracias por realizar tu compra con nosotros, vuelva pronto");
    //     } else {
    //         numProducto= parseInt(prompt("Digita el # de productos que vas a comprar"));
    //     }
    // }
    // document.write("# total de clientes en el dia fueron: "+x);
    // document.write("El total de compras en el dia fue: "+comprasXDia);

//     3.	Ingrese varios números enteros y muestre la cantidad de números ingresados y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN.
    // let suma = 0;
    // let totalNumeros = 0;
    // let numIngresado;
    // let numero = parseInt(numIngresado);
    // if ((numero !== FIN)) {
    //     break;
    // }
    // document.write("Número ingresado: " + numero + "<br>");
    // suma += numero; 
    // totalNumeros++; 
    // }else {
    // document.write("Entrada no válida, por favor ingresa un número entero.<br>");
    // }
    // document.write("La cantidad de números ingresados es: " + totalNumeros + "<br>");
    // document.write("La suma de los números es: " + suma + "<br>");


// 4.	realice una tabla de multiplicar con cualquier número ingresado hasta el 30.
//     let numIngresado = Number(prompt("Digita un numero"));
//     document.write("Tabla del "+numIngresado);
// for(i = 1; i <=30; i++){
//     document.write(numIngresado + " X " + i + " = " + (numIngresado*i) + "<br>");
// }

// 5.	Cree la tabla de multiplicar de cualquier número ingresado de manera descendente.
// let numIngresado = Number(prompt("Digita un numero"));
// document.write("Tabla del "+numIngresado);
// for(i = numIngresado; i >=1; i--){
// document.write(numIngresado + " X " + i + " = " + (numIngresado*i) + "<br>");
// }

// 1.	Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado.
    // let N = parseInt(prompt("Ingresa un número límite N: "));
    // let suma = 0;
    // for (let i = 1; i <= N; i++) {
    // suma += i;
    // }
    // document.write("La suma de los primeros numeros natirales es: "+suma);


    // let intervalo = parseInt(prompt("Ingresa un número para el intervalo de conteo: "));


    // 6.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado.
    // if (intervalo > 0) {
    // for (let i = 1; i <= 30; i++) {
    //     i += intervalo;
    //     document.write(i);  
    // }
    // } else {
    // document.write("El intervalo debe ser un número positivo mayor que 0.");
    // }



