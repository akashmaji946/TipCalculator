document.getElementById("container").onchange = function () {
    var bill = Number(document.getElementById("totalBill").value);
    //alert(bill);

    var tipPercent = Number(document.getElementById("tip").value);
    //alert(tipPercent);

    var split = Number(document.getElementById("split").value);
    //alert(split);

    var tipValue = bill * (tipPercent / 100);
    var newBill = (bill + tipValue) / split;
    var tipEach = tipValue / split;

    document.getElementById('tipOutput').innerHTML = tipPercent + " %";
    document.getElementById('splitOutput').innerHTML = split + " persons";


    document.getElementById('newbill').innerHTML = "INR " + newBill.toFixed(2);
    document.getElementById('tipeach').innerHTML = "INR " + tipEach.toFixed(2);

}