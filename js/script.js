//Kode untuk apabila terjadi hitung BMI
document.getElementById("submit").onsubmit = hitung;
    function hitung() {
        document.getElementById("result").style.display = "block";
        document.getElementById("container-bmi").style.display = "flex";

        document.getElementById("status-bmi-pertama").style.display = "none";
        document.getElementById("status-bmi-kedua").style.display = "none";
        document.getElementById("status-bmi-ketiga").style.display = "none";
        document.getElementById("status-bmi-keempat").style.display = "none";

        document.getElementById("penjelasan-bmi-satu").style.display = "none";
        document.getElementById("penjelasan-bmi-dua").style.display = "none";
        document.getElementById("penjelasan-bmi-tiga").style.display = "none";
        document.getElementById("penjelasan-bmi-empat").style.display = "none";        

        let jk = document.forms["form-bmi"]["sender-gender"].value;
        let bb = document.forms["form-bmi"]["sender-weight"].value;
        let usia = document.forms["form-bmi"]["sender-age"].value;
        let tb = document.forms["form-bmi"]["sender-height"].value;
        validation(jk, bb, usia, tb)

        if(jk == "pria" || "wanita" && usia >= 18) {
            let bmi = bb / ((tb / 100) ** 2);
            let n = bmi.toFixed(1);
            let result = "";
            if (bmi > 0 && bmi < 18.5) {
                //document.getElementById("hasil-bmi-satu").innerHTML = bmi;
                document.getElementById("hasil-bmi-satu").innerHTML = n;
                document.getElementById("status-bmi-pertama").style.display = "block";
                document.getElementById("featureExplanation").style.display = "none";
                document.getElementById("penjelasan-bmi-satu").style.display = "block";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                //document.getElementById("hasil-bmi-dua").innerHTML = bmi;
                document.getElementById("hasil-bmi-dua").innerHTML = n;
                document.getElementById("status-bmi-kedua").style.display = "block";
                document.getElementById("featureExplanation").style.display = "none";
                document.getElementById("penjelasan-bmi-dua").style.display = "block";
            } else if (bmi >= 25.0 && bmi <= 29.9) {
                //document.getElementById("hasil-bmi-tiga").innerHTML = bmi;
                document.getElementById("hasil-bmi-tiga").innerHTML = n;
                document.getElementById("status-bmi-ketiga").style.display = "block";
                document.getElementById("featureExplanation").style.display = "none";
                document.getElementById("penjelasan-bmi-tiga").style.display = "block";
            } else if (bmi >= 30 && bmi !== Infinity) {
                //document.getElementById("hasil-bmi-empat").innerHTML = bmi;
                document.getElementById("hasil-bmi-empat").innerHTML = n;
                document.getElementById("status-bmi-keempat").style.display = "block";
                document.getElementById("featureExplanation").style.display = "none";
                document.getElementById("penjelasan-bmi-empat").style.display = "block";
            } else {
                return false
            }
        }
        document.getElementById("download-app").style.display = "block";
        console.log({jk, bb, usia, tb});
        return false;
    }
//Kode untuk Validasi Client-Side
function validation(jk, bb, usia, tb) {
    if (jk == "" || bb == "" || usia == "" || tb == "") {
        alert ("Form tidak boleh kosong!")
        document.getElementById("result").style.display = "none";
        document.getElementById("container-bmi").style.display = "none";
        document.getElementById("featureExplanation").style.display = "block";
        return false
    } 
    else if (usia < 18) {
        alert ("Kalkulator hanya untuk usia minimal 18 tahun")
        document.getElementById("result").style.display = "none";
        document.getElementById("container-bmi").style.display = "none";
        document.getElementById("featureExplanation").style.display = "block";
        return false
    }
}

//Kode untuk apabila terjadi reset
document.getElementById("reset").onclick = ulang;
    function ulang() {
        document.getElementById("result").style.display = "none";
        document.getElementById("container-bmi").style.display = "none";
        document.getElementById("featureExplanation").style.display = "block";
        document.getElementById("form-bni").reset();
        return false;
    }

    