
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
            
    var regex = /[^0-9]/g;
    input.value =  input.value.replace(regex, "");
    if (input.value>99 && input.value< 1000){
        x = input.value;
        input.value = x.substring(0,2)+"/"+ x.substring(2,3);
    }else if(input.value>999 && input.value< 10000){
        x = input.value;
        input.value =  x.substring(0,2)+"/"+ x.substring(2,4);
    }else if(input.value>9999 && input.value< 100000){
        x = input.value;
        input.value = x.substring(0,2)+"/"+ x.substring(2,4)+"/"+x.substring(4,5);
    }else if (input.value>99999 && input.value< 1000000){
        x = input.value;
        input.value =x.substring(0,2)+"/"+ x.substring(2,4)+"/"+x.substring(4,6);
    }else if (input.value>999999 && input.value< 10000000){
        x = input.value;
        input.value =x.substring(0,2)+"/"+ x.substring(2,4)+"/"+x.substring(4,7);
    }else if (input.value>9999999 && input.value< 100000000){
        x = input.value;
        if(x.substring(0,2)<31 && x.substring(2,4)<13 && x.substring(4,8)<2043 && x.substring(4,8)>2017 ){
            input.value =x.substring(0,2)+"/"+ x.substring(2,4)+"/"+x.substring(4,8);
            if (x.substring(2,4)== 04 || x.substring(2,4)== 06 || x.substring(2,4)== 09 || x.substring(2,4)== 11){
                    if(x.substring(0,2)<31){
                        enableSubmit()
                    }else{
                        alert("Favor Informar uma Data Valida")
                        input.value = "";
                    }
            }
            if(x.substring(2,4)== 02){
                if(x.substring(4,8)==2020 || x.substring(4,8)==2024 || x.substring(4,8)==2028 || x.substring(4,8)==2032 || x.substring(4,8)==2036 || x.substring(4,8)==2040 ){
                    if(x.substring(0,2)<30){
                        enableSubmit()
                    }else{
                        alert("Favor Informar uma Data Valida")
                        input.value = "";
                    }
                }else if(x.substring(0,2)<29){
                        enableSubmit()
                }else{
                    alert("Favor Informar uma Data Valida")
                    input.value = "";
                }
            }
        
        }else{
            alert("Favor Informar uma Data Valida")
            input.value = "";
        }
        
    }
    
}

//------------------------Mascara Fim Data -------------------------

//------------------------Mascara Cdi -------------------------
function maskCdi(input){
            
    var regex = /[^1-9]/g;
    input.value =  input.value.replace(regex, "");
    
    input.value =  input.value+"%";
    enableSubmit()
}


//------------------------Mascara Fim Cdi -------------------------