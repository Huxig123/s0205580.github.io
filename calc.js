document.addEventListener('DOMContentLoaded', function () {
    // --- 1. Логика калькулятора для Задания 5 ---
    const productSelect = document.getElementById('product-select');
    const quantityInput = document.getElementById('quantity-input');
    const calcButton = document.getElementById('calc-button');
    const resultSpan5 = document.getElementById('result-price');
    const errorDiv = document.getElementById('error-message');

    if (calcButton) {
        calcButton.addEventListener('click', function () {
            const quantityValue = quantityInput.value.trim();
            const regex = /^[1-9]\d*$/;

            if (!regex.test(quantityValue)) {
                errorDiv.textContent = 'Ошибка: введите корректное целое положительное число!';
                errorDiv.style.display = 'block';
                resultSpan5.textContent = '0';
                return;
            }

            errorDiv.style.display = 'none';
            const price = parseInt(productSelect.value, 10);
            const quantity = parseInt(quantityValue, 10);
            const totalCost = price * quantity;
            resultSpan5.textContent = totalCost;
        });
    }

    // --- 2. Логика калькулятора для Задания 6 ---
    const quantInput = document.getElementById('quant');
    const radios = document.getElementsByName('prodType');
    const selectWrap = document.getElementById('select-wrap');
    const prodOptions = document.getElementById('prod-options');
    const checkboxWrap = document.getElementById('checkbox-wrap');
    const prodProp = document.getElementById('prod-prop');
    const resultSpan6 = document.getElementById('result');

    if (quantInput && resultSpan6) {
        function calculate6() {
            let basePrice = 0;
            let selectedType = 'type1';
            
            for (const radio of radios) {
                if (radio.checked) {
                    basePrice = parseInt(radio.value, 10);
                    selectedType = radio.id;
                    break;
                }
            }

            if (selectedType === 'type1') {
                selectWrap.style.display = 'none';
                checkboxWrap.style.display = 'none';
            } else if (selectedType === 'type2') {
                selectWrap.style.display = 'block';
                checkboxWrap.style.display = 'none';
                basePrice += parseInt(prodOptions.value, 10);
            } else if (selectedType === 'type3') {
                selectWrap.style.display = 'none';
                checkboxWrap.style.display = 'block';
                if (prodProp.checked) {
                    basePrice += parseInt(prodProp.value, 10);
                }
            }

            let quantity = parseInt(quantInput.value, 10);
            if (isNaN(quantity) || quantity < 1) {
                quantity = 1;
            }

            const totalPrice = basePrice * quantity;
            resultSpan6.textContent = totalPrice;
        }

        quantInput.addEventListener('input', calculate6);
        for (const radio of radios) {
            radio.addEventListener('change', calculate6);
        }
        prodOptions.addEventListener('change', calculate6);
        prodProp.addEventListener('change', calculate6);

        calculate6();
    }
});