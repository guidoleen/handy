 // Function postcode check
function postc_check(object, strpc)
{
    strpc.IsValid = true;
    
    var strPCode = document.getElementById("tbPostcode").value.replace(/\s/g, "");

    if (strPCode.length < 6)
    {
        strpc.IsValid = false;
    }

    var i4 = 0;

    // Eerste 4 cijfers....
    while (i4 < 4) {
        if (!strPCode[i4].match(/\d/i)) {
            strpc.IsValid = false;
            return;
        }
        i4++;
    }

    // Dan 2 chars....
    i4 = 4;
    while (i4 < 6) {
        if (!strPCode[i4].match(/\D/i)) {
            strpc.IsValid = false;
            return;
        }
        i4++;
    }

    if(strPCode.length > 6)
    {
        strpc.IsValid = false;
        return;
    }
}