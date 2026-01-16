const colorSelect = document.getElementById("color-select");

colorSelect.addEventListener("change", function() {
    const selectColor = colorSelect.value;

    if (selectColor === "Dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else if (selectColor === "Light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    }
});
