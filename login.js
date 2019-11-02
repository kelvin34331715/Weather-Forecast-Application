function loadJason() {
    var inputusername = document.getElementById('inputname');
    var inputpassword = document.getElementById('inputpassword');

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {

                var javaobj = JSON.parse(xhr.response);

      
                for (var i = 0; i < javaobj.length; i++) {

                    if (javaobj[i].id == inputusername.value && javaobj[i].password == inputpassword.value) {
                        alert("Login Successfully");
                        location.href = '../www/current.html';
                        break;

                    }
                    if (i == javaobj.length - 1) {
                        alert("You enter wrong password or Username");
                    }

                }

            } 
        }
    };
    xhr.open("GET", "https://api.myjson.com/bins/1d2gnv", true);
    xhr.send();

}

