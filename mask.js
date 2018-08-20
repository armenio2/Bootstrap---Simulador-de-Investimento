
//------------------------Mascara quantidade -------------------------
function maskMoney(input){
            
    var regex = /[^0-9]/g;
    input.value =  input.value.replace(regex, "");
    
    if (input.value>999 && input.value< 10000){
        x = input.value;
        input.value = "R$"+ x.substring(0,1)+"."+ x.substring(1,4);
    }else if(input.value>9999 && input.value< 100000){
        x = input.value;
        input.value = "R$"+ x.substring(0,2)+"."+ x.substring(2,5);
    }else if(input.value>99999 && input.value< 1000000){
        x = input.value;
        input.value = "R$"+ x.substring(0,3)+"."+ x.substring(3,6);
    }else if (input.value>999999 && input.value< 10000000){
        x = input.value;
        input.value = "R$"+ x.substring(0,1)+"."+ x.substring(1,4)+"."+x.substring(4,7);
    }else if(input.value<1000 && input.value>0){
        input.value =  "R$"+input.value;
    }else if(input.value <1){
        input.value ="";
    }
    enableSubmit()
}
//------------------------Mascara Fim Quantidade -------------------------

//------------------------Mascara Data -------------------------
function maskData(input){
    if(input.value.length ==2){
        input.value = input.value + "/"
        return true
    }if(input.value.length ==5){
        input.value = input.value + "/"
        return true
    }if(input.value.length ==10){
        var value = input.value.split("/")
        var day = value[0]
        var month = value[1]
        var year = value[2]
            //validando data
        if(month <13){
            if(day<32){
                if(year>2017 && year<2051){
                    //validando fevereiro e outros meses
                    if(month == 4 || month == 6 || month == 9 || month == 11){

                        if(day <31){
                            enableSubmit()

                        }else{
                            input.value = "";
                            alert("Favor Informar uma Data Valida")
                        }
                    }else if(month == 2){
                        if(day <29){
                            enableSubmit()
                        }else if(day == 29){ //ano bixesto
                            var rest = year%4
                            if(rest==0){
                                enableSubmit()
                            }else{
                                input.value = "";
                                alert("Favor Informar uma Data Valida")
                            }
                            
                        }
                    }else{
                        enableSubmit()
                    }
                }else{
                    input.value = "";
                    alert("Favor Informar uma Data Valida")
                }
            }else{
                input.value = "";
                alert("Favor Informar uma Data Valida")
            }

        }else{
            input.value = "";
            alert("Favor Informar uma Data Valida")
        }
    }
    var input = document.getElementById('data'); //backspace press

    input.onkeydown = function() {
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 )
        input.value = "";

    };
}

//------------------------Mascara Fim Data -------------------------

//------------------------Mascara Cdi -------------------------
function maskCdi(input){
            
    var regex = /[^0-9]/g;
    input.value =  input.value.replace(regex, "");
    
    input.value =  input.value+"%";
    enableSubmit()

    var input = document.getElementById('cdi'); //backspace press

    input.onkeydown = function() {
    var key = event.keyCode || event.charCode;

    if( key == 8 || key == 46 )
        input.value = "";

    };
}


//------------------------Mascara Fim Cdi -------------------------