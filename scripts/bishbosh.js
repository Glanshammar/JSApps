$(function() {
    const $generateButton = $('#generateButton');
    const $loopEnd = $('#loopEnd');
    const $bishNumber = $('#bishNumber');
    const $boshNumber = $('#boshNumber');
    const $resultDiv = $('#result');

    $generateButton.on('click', BishBosh);

    function BishBosh() {
        const loopEnd = parseInt($loopEnd.val());
        const bishNumber = parseInt($bishNumber.val());
        const boshNumber = parseInt($boshNumber.val());

        if (loopEnd < 1 || bishNumber < 1 || boshNumber < 1) {
            $resultDiv.text('Please enter positive numbers only.');
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
        }

        $resultDiv.text(output.join(', '));
    }
});