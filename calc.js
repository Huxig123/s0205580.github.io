document.addEventListener('DOMContentLoaded', function () {
    const productSelect = document.getElementById('product-select');
    const quantityInput = document.getElementById('quantity-input');
    const calcButton = document.getElementById('calc-button');
    const resultSpan = document.getElementById('result-price');
    const errorDiv = document.getElementById('error-message');

    calcButton.addEventListener('click', function () {
        const quantityValue = quantityInput.value.trim();
        
        // Регулярное выражение: проверка на целое положительное число (больше 0)
        const regex = /^[1-9]\d*$/;

        if (!regex.test(quantityValue)) {
            errorDiv.textContent = 'Ошибка: введите корректное целое положительное число!';
            errorDiv.style.display = 'block';
            resultSpan.textContent = '0';
            return;
        }

        // Если всё верно — скрываем ошибку
        errorDiv.style.display = 'none';

        // Преобразуем значения в числа и считаем стоимость
        const price = parseInt(productSelect.value, 10);
        const quantity = parseInt(quantityValue, 10);
        const totalCost = price * quantity;

        // Выводим результат
        resultSpan.textContent = totalCost;
    });
});