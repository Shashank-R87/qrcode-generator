textinEl = document.getElementById("textin");
buttonEl = document.getElementById("button");
qrEl = document.getElementById("qrcode");

buttonEl.addEventListener("click", function () {
    fetch("https://qrtiger.com/api/qr/static", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer dd18dd00-7825-11ec-bb81-d15d9216f955",
        },
        body: `{"size":230,"colorDark":"rgb(5,64,128)","eye_outer":"eyeOuter2","eye_inner":"eyeInner1","qrData":"pattern0","backgroundColor":"rgb(255,255,255)","transparentBkg":false,"qrCategory":"text","text":"${textinEl.value}"}`,
    })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data["data"]);
            qrEl.src = "data:image/jpeg;base64, " + data["data"]
        });
});
