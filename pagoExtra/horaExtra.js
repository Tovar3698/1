		
   function calcular (horasTrabajadas,pagoHora ){
    let pagoExtra;
    let resultado = "";
    if(horasTrabajadas>= 40){
        pagoExtra = (horasTrabajadas-40) *pagoHora * 1.5;
        alert(resultado += "Pago por horas extras : "+ pagoExtra);
    }else{
        alert("No hay horas extras trabajadas")
    }
    
return resultado;
   }
        



      