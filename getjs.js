window.onload = function () {

    formSubmit()
    alinhaResult()
};

function enableSubmit() {
    var input1 = document.getElementById("quantidade").value;
    var input2 = document.getElementById("data").value;
    var input3 = document.getElementById("cdi").value;
    if (input1 != "" && input2 != "" && input3 != "" && input2.length == 10) {

        document.getElementById("submit").disabled = false;
    }

}

function formSubmit() {
    document.getElementById("myForm")
        .addEventListener("submit", function (event) {
            var x = 0;
            submitForm()
            event.preventDefault()
        })
}

function mostraValores(element) { //dando hidden input e mostrando result
    document.getElementById("resultSimulacao").innerHTML = formatNumber(element.netAmount)
    document.getElementById("rendimantoTotal").innerText = "Rendimento total de R$" + formatNumber(element.grossAmountProfit);
    document.getElementById("valorInicial").innerHTML = "R$" + formatNumber(element.investmentParameter.investedAmount);
    document.getElementById("valorBruto").innerHTML = "R$" + formatNumber(element.grossAmount);
    document.getElementById("valorRendimento").innerHTML = "R$" + formatNumber(element.grossAmountProfit);
    document.getElementById("valorLiquido").innerHTML = "R$" + formatNumber(element.netAmountProfit);
    document.getElementById("dataResgate").innerHTML = formatDate(element.investmentParameter.maturityDate);
    document.getElementById("diasCorridos").innerHTML = formatNumber(element.investmentParameter.maturityTotalDays);
    document.getElementById("rendimentoMensal").innerHTML = formatNumber(element.monthlyGrossRateProfit);
    document.getElementById("precentualCdi").innerHTML = element.investmentParameter.rate;
    document.getElementById("rentabilidadeAnual").innerHTML = formatNumber(element.annualGrossRateProfit);
    document.getElementById("rentabilidadePeriodo").innerHTML = formatNumber(element.rateProfit);
    hiddenDisplay(2)
}

function alinhaResult() { //alinhando resultado
    var x = document.getElementsByTagName("span");
    var i;
    for (i = 4; i < 24; i = i + 2) {
        x[i].style.textAlign = "right";
        x[i].style.fontSize = "120%"
        x[i].style.float = "right";
    }
    for (i = 3; i < 24; i = i + 2) {
        x[i].style.textAlign = "left";
        x[i].style.fontSize = "90%"
        x[i].style.float = "left";
    }
    for (i = 0; i < 3; i++) {
        x[i].style.textAlign = "center";
    }
}

function hiddenDisplay(element) { //mudando o display da tela para mostrar resultado 
    if (element == 2) {
        document.getElementById("formularioInvestimento").style.display = "none";
        document.getElementById("formularioInvestimento").style.visibility = "hidden";
        document.getElementById("resultado").style.display = "block";
        document.getElementById("resultado").style.visibility = "visible";
    } else if (element == 1) {
        document.getElementById("formularioInvestimento").style.display = "inherit";
        document.getElementById("formularioInvestimento").style.visibility = "visible";
        document.getElementById("resultado").style.display = "none";
        document.getElementById("resultado").style.visibility = "hidden";
    }
}

function submitForm() {
    var regex = /[^0-9]/g; //somente numeros para usar no replace
    var investedAmount = document.getElementById("quantidade").value;
    investedAmount = investedAmount.replace(regex, ""); //tirando a mask
    var rate = document.getElementById("cdi").value;
    rate = rate.replace(regex, ""); //tirando a mask
    var isTaxFree = false;
    var maturityDate = document.getElementById("data").value;
    maturityDate = dateToEN(maturityDate);
    var url = "https://api-simulator-calc.easynvest.com.br/calculator/simulate?investedAmount=" + investedAmount + "&maturityDate=" + maturityDate + "&rate=" + rate + "&index=CDI&isTaxFree=false"
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var result = JSON.parse(this.responseText);
            mostraValores(result);
        } else {
            console.log("erro de readystate e status");
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function dateToEN(date) {
    return date.split('/').reverse().join('-');
}


