var host = window.location.origin + '/';

function submitValues () {
    var name = document.getElementById('userName').value;
    var bloodGroup = document.getElementById('bloodGroup').value;
    var age = document.getElementById('age').value;
    var mobile = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;
    var gender;

    if (document.getElementById('gender_male').checked)
        gender =document.getElementById('gender_male').value;

    if (document.getElementById('gender_female').checked)
        gender =document.getElementById('gender_female').value;

    if (document.getElementById('gender_other').checked)
        gender =document.getElementById('gender_other').value;

    var values = {
        name : name,
        blood_group : bloodGroup,
        age : age,
        mobile : mobile,
        address : address,
        gender : gender
    };

    storevalue(values);
}

var storevalue = function (data) {
    $.ajax({
        type : "POST",
        url : host + "storeValue",
        data : data,
        success : function(result) {
            alert("Successfully added details", result);
            document.getElementById('userName').value = "";
            document.getElementById('bloodGroup').value = "";
            document.getElementById('age').value = "";
            document.getElementById('mobile').value = "";
            document.getElementById('address').value = " ";
        }
    });
}

var showDetails = function () {
    window.location=host + "html/details.html";
}
