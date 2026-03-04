// // 1 - отримай body елемент і виведи його в консоль;
// const bodyElem = document.querySelector('body');
// console.dir(bodyElem);
// // 2 - отримай елемент id="title" і виведи його в консоль;
// const titleElem = document.querySelector('#title')
// console.dir(titleElem)
// // 3 - отримай елемент class="list" і виведи його в консоль;
// const listElem = document.querySelector('.list')
// console.dir(listElem);
// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// // const topics = document.querySelectorAll('[data-topic]');
// // console.log(topics);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstTopicElem = topics[0];
// console.log(firstTopicElem);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const lastTopicElem = topics[topics.length - 1];
// console.log(lastTopicElem);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const titleSibling = titleElem.nextSibling;
// console.dir(titleSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const titles = document.querySelectorAll('h3');
// console.log(titles);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// titles.forEach(title => title.classList.add('active'));
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const topicNav = [...topics].find((topic) => topic.dataset.topic === "navigation");
// console.log(topicNav);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// topicNav.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// topicNav.lastElementChild.textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, 
// яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = "manipulation";
// const topicManipulation = document.querySelector(`[data-topic=${currentTopic}]`);
// console.log(topicManipulation);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// topicManipulation.style.backgroundColor = 'blue';
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const completedTiltle = [...titles].find(title => title.classList.contains('completed'));
// console.log(completedTiltle);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// completedTiltle.parentElement.remove();
// document.querySelector('li>h3.completed').remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const text = document.createElement('p');
// text.textContent = "Об'єктна модель документа (Document Object Model)";
// titleElem.after(text);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис 
// (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити 
// браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const li = document.createElement('li');

// li.innerHTML = `
//   <li>
// <h3>Властивість innerHTML</h3>
//   <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//   </li>`;

// listElem.append(li);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// listElem.insertAdjacentHTML('beforeend', `
//   <li>
//   <h3>Властивість innerHTML</h3>
//   <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
//   </li> 
//   `);
// 20 - очисти список
// listElem.innerHTML = '';

// 21 
// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const boxes = document.querySelector('.number-container');


for (let i = 0; i < 100; i++){
    const numbers = randomNumber();
    const box = document.createElement('div');
    box.classList.add('number');
    box.textContent = numbers;

    if (numbers % 2 === 0) {
        box.classList.add('even');
    } else {
        box.classList.add('odd');
    }

    boxes.append(box);
};

//23
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// const userName = document.querySelector('.js-username-input');

// userName.addEventListener('input', e => {
//     if (e.target.value.length > 6) {
//         e.target.classList.remove('error')
//         e.target.classList.add('success');
//     } else {
//         e.target.classList.remove('success')
//         e.target.classList.add('error');
//     }
// });

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// userName.addEventListener('focus', e => {
//     if (e.target.value.trim() === '') {
//         e.target.style.outline = '3px solid red';
//     } else {
//         e.target.style.outline = '3px solid green';
//     }
// })

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// userName.addEventListener('blur', e => {
//     if (e.target.value.trim() === '') {
//         e.target.style.outline = '3px solid red';
//     } else {
//         e.target.style.outline = '3px solid lime';
//     }
// })

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. 
// У разі, якщо користувач не виконав одну із умов, виведи повідомлення. 
// Також при події інпут реалізуй додавання ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.


const form = document.querySelector('.js-contact-form');
const userName = document.querySelector('.js-username-input');
const checkbox = document.querySelector('.js-policy-checkbox');
const span = document.querySelector('.js-username-output')

userName.addEventListener('input', e => {
    if (userName.value.trim() !== '') {
        span.textContent = userName.value.trim();
    } else {
        span.textContent = 'Anonymous'
    }
})

form.addEventListener('submit', e => {
    e.preventDefault();

    if (userName.value.trim() !== '' && checkbox.checked) {
        const user = {
            userName: userName.value.trim(),
        }
        console.log(user);
    } else {
        alert('Заповніть всі поля');
    }

    form.reset();
    span.textContent = 'Anonymous';
})




