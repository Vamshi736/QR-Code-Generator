let qr;
        function generateQRCode() {
            const container = document.getElementById('qrcode');
            const text = document.getElementById('text').value.trim();
            container.innerHTML = '';
            if (text) {
                qr = new QRCode(container, {
                    text: text,
                    width: 200,
                    height: 200,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
            }
        }