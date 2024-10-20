$(function() {
    const generateButton = $('#generateButton');
    const loopEnd = parseInt($('#loopEnd').value);
    const bishNumber = parseInt($('#bishNumber').value);
    const boshNumber = parseInt($('#boshNumber').value);
    const resultDiv = $('#result');

    generateButton.addEventListener('click', BishBosh)

    function BishBosh() {


        if (loopEnd < 1 || bishNumber < 1 || boshNumber < 1) {
            resultDiv.textContent = 'Please enter positive numbers only.';
            return;
        }

        let output = [];

        for (let i = 1; i <= loopEnd; i++) {
            if (i % bishNumber === 0 && i % boshNumber === 0) {
                output.push('Bish-Bosh');
            } else if (i % bishNumber === 0) {
                output.push('Bish');
            } else if (i % boshNumber === 0) {
                output.push('Bosh');
            } else {
                output.push(i.toString());
            }

            resultDiv.textContent = output.join(', ');
        }
    }
})