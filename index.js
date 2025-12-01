function formsubmit(event) {
    event.preventDefault();
    console.log("form submited");

    let P = parseFloat(document.getElementById("amt").value);
    let R = parseFloat(document.getElementById("roi").value);
    let T = parseFloat(document.getElementById("yrs").value);
    let option = document.querySelector("input[name=toggle]:checked").value;

    let divBlock = document.getElementById("resultBlock");

    console.log("the div ",divBlock);
    
    if (P < 0 || R < 0 || T < 0) {
        alert("Enter positive values onlyy");
        location.reload();
        return;
    }

    if (option == "SI Intrest") {
        let si = (P * R * T) / 100;
        divBlock.style.display = "flex";
        divBlock.innerHTML="<h3>Simple Intrest is "+ si + "</h3>";
    } else {
        let ci = P * (1 + (R / 100)) ** T - P;
        divBlock.style.display = "flex";
        divBlock.innerHTML ="<h3> Compound Intrest is "+ ci+ "</h3>";
    }
}