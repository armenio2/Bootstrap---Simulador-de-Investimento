function formatNumber(number){
    number=number.toString()
    if(number<1000){
        return number;
    }else if(number>999 && number<10000){
        number = number.substring(0,1) + "."+ number.substring(1,4);
        return  number;
    }else if(number>9999 && number<100000){
        number = number.substring(0,2) + "."+ number.substring(2,5);
        return  number;
    }else if(number>99999 && number<1000000){
        number = number.substring(0,3) + "."+ number.substring(3,6);
        return  number;
    }else if(number>999999 && number<10000000){
        number = number.substring(0,1) +"."+ number.substring(1,4)+"."+number.substring(4,7);
        return  number;
    }else if(number>9999999 && number<100000000){
        number = number.substring(0,2) + "."+ number.substring(2,5)+"."+number.substring(5,8);
        return  number;
    }
}
function formatDate(number){
    number = number.substring(0,10)
    return number.split('-').reverse().join('/');
    

}