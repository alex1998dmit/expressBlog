// Ваше первое express приложение, будет представлять из себя простой счетчик, с 
// доступом через http интерфейс. Над счетчиком можно выполнять следующие операции:

// / - получить текущее значение счетчика в виде json: { "value": 0 }
// <METHOD> /increment - увеличение на единицу
// <METHOD> /decrement - уменьшение на единицу
// <METHOD> /reset - сброс значения счетчика на значение по умолчанию.
// <METHOD> /set?value=5 - установка счетчика в конкретное значение, которое
//  передается как query параметр с именем value.
// Значение по умолчанию равно нулю. Все точки входа, кроме /, должны возвращать 204 no content.

// Имена методов не указаны специально. Необходимо их выбрать правильно с учетом требований http 
// к семантике глаголов. Важно анализировать идемпотентность операции и требований 
// по обеспечению идемпотентности глаголами http.

var express = require('express');

const startSever = () => {
    const app = new express();
    const defaultValue = 0;
    const currentValue = { value: defaultValue };

    app.get('/', (req, res) => {
        res.json(currentValue);
    });

    app.put('/set', (req, res) => {
        let queryParam = req.query;
        let valueToInstead = (queryParam.value) ? queryParam.value : currentValue.value;
        currentValue.value = valueToInstead;
        res.json(currentValue);
    });

    app.put('/reset', (req, res) => {
        currentValue.value = defaultValue;
        res.json(currentValue);   
    });

    app.patch('/increment', (req, res) => {
        currentValue.value++;
        res.json(currentValue);   
    });

    app.patch('/decrement', (req, res) => {
        currentValue.value--;
        res.json(currentValue);   
    });

    app.listen(3000, () => {
        console.log('Example app listening on port 3000!');
    });
}

startSever();