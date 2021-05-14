'use strict';

let open = document.getElementById('open-btn'),
    name_value = document.getElementsByClassName('name-value')[0],
    budget_value = document.getElementsByClassName('budget-value')[0],
    goods_value = document.getElementsByClassName('goods-value')[0],
    items_value = document.getElementsByClassName('items-value')[0],
    employees_value = document.getElementsByClassName('employees-value')[0],
    discount_value = document.getElementsByClassName('discount-value')[0],
    isopen_value = document.getElementsByClassName('isopen-value')[0],

    goods_item = document.getElementsByClassName('goods-item'),
    goods_btn = document.getElementsByTagName('button')[1],
    budget_btn = document.getElementsByTagName('button')[2],
    employees_btn = document.getElementsByTagName('button')[3],
    choose_item = document.querySelector('.choose-item'),
    time_value = document.querySelector('.time-value'),
    count_budget_value = document.querySelector('.count-budget-value'),
    hire_employees_item = document.querySelectorAll('.hire-employees-item');

//    console.log(goods_btn);

let money,
    price;

open.addEventListener('click', () => {
    money = prompt("Ваш бюджет?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет?", "");
    }
    budget_value.textContent = money;
    name_value.textContent = prompt("Название вашего магазина?", "").toUpperCase();
});    

goods_btn.addEventListener('click', () => {
    for(let i = 0; i < goods_item.length; i++) {
        let a = goods_item[i].value;

        if((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
            console.log("Всё верно");
            mainList.shopGoods[i] = a;
            goods_value.textContent = mainList.shopGoods;
        } else {
            i = i - 1;
        }
    }
});

choose_item.addEventListener('change', () => {
    let items = choose_item.value;

    if(isNaN(items) && items != '') {
        mainList.shopItems = items.split(",");
        mainList.shopItems.sort();

        items_value.textContent = mainList.shopItems;
    }    
});

time_value.addEventListener('change', () => {
    let time = time_value.value;
    
    if(time < 0) {
        console.log("Такого не может быть!");
        mainList.open = false;
    } else if(time > 8 && time < 20) {
        console.log("Время работать!");
        mainList.open = true;
    } else if(time < 24) {
        console.log("Уже слишком поздно!"); 
        mainList.open = false;
    } else {
        console.log("В сутках только 24 часа!");
        mainList.open = false;
    }
    if(mainList.open == true) {
        isopen_value.style.backgroundColor = 'green';
    } else {
        isopen_value.style.backgroundColor = 'red';
    }
});

budget_btn.addEventListener('click', () => {
    count_budget_value.value = money / 30;
});

employees_btn.addEventListener('click', () => {
    for (let i = 0; i < hire_employees_item.length; i++) {
        let name = hire_employees_item[i].value;
        mainList.employees[i] = name;

        employees_value.textContent += mainList.employees[i] + ',';
    }
});

let mainList = {
    buget: money,
    shopName: name,
    shopGoods: [],
    employees: {}, 
    open: false,
    discount: false,
    shopItems: [], // виды товаров для продажи
    
    makeDiscount: function makeDiscount() {
        if (mainList.discount == true) {
            price = (price/100)*80;
        }
    }
}

console.log(mainList); 