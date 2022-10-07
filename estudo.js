function total(){
    let c = document.getElementById("Capital").value;
    let j = document.getElementById("Juros").value;
    let t = document.getElementById("Meses").value;
    let m = 0; 
    for(let i = 1; i <= t; i++){
        m = c * (1+(j/100));
        document.write("Valor no mễs: " + i + " = " + m + "<br>");
        c = m; 
    }
    
    document.write("Montante: " + m);
}
