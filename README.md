# block-3-react-js

## Блок 3. Базовый React

## Что за проект?

Это шаблон для изучения базы по React. Содержит частично заготовленную верстку из предыдущего блока. Вам предлагаетсяя выполнить ряд задач по доработке этого проекта. В процессе выполнения вы изучите все базовые принципы работы с React

## Как установить проект?

1. Нажимаем кнопку `Use this template`  
   ![image](https://github.com/user-attachments/assets/38f7ddfa-5324-45a1-9bf4-5396af08c8d1)
2. Выбираем `Create a new repository`  
   ![image](https://github.com/user-attachments/assets/362fcc63-0ea4-458b-9332-5dbe0981e177)
3. Вписываем название репозитория (может быть любым на ваше усмотрение)  
   ![image](https://github.com/user-attachments/assets/8ea1eb51-c53b-4ad8-b037-fbca63947750)
4. Нажимаем `Create repository`
5. В созданном репозитории нажимаем кнопку `Code` и копируем ссылку  
   ![image](https://github.com/user-attachments/assets/7e1eeb6a-cf4d-480a-b44d-7c97ecef79b5)
6. Открываем папку с проектами в IDE и прописываем в терминале команду `git clone <ссылка которую скопировали>`
7. Дожидаемся копирования
8. Запускаем в терминале команду `npm install`, дожидаемся ее выполнения
9. Можно работать

Папки с конфигами / файлы конфигов лучше не трогать :)

## Структура проекта

`.github` - папка с настройками для гитхаба (CI/CD, коммиты)  
`src` - основная папка проекта  
----`api` - папка с моками данных (имитация api)  
----`assets` - папка для ассетов  
--------`fonts` - папка для локальных шрифтов (нужные шрифты уже подключены)  
--------`icons` - папка для иконок  
--------`images` - папка для картинок  
----`components` - папка для UI-компонент (только тупые компоненты)  
----`pages` - папка для страниц   
----`styles` - папка для стилей  
--------`fonts.scss` - файл для настройки шрифтов  
--------`global.scss` - файл для глобальных стилей  
--------`index.scss` - точка входа всех стилей. Здесь только импорты из других файлов  
--------`reset.scss` - обнуление стилей  
--------`variables.scss` - SCSS-переменные  
`.gitignore` - список файлов и папок для игнорирования системой контроля версий  
`.prettierrc` - конфиг Prettier  
`eslint.config.js` - конфиг ESLint  
`index.html` - входной html-файл  
`jsconfig.json` - небольшой конфиг для JS  
`package.json` - основной файл npm, содержит скрипты, зависимости и настройки проекта  
`vite.config.js` - конфиг Vite

## Как пользоваться проектом?

1. Развернуть себе проект (инструкция выше)
2. Создать новую ветку от `main`. Она должна называться корректно. Пример - `feature/BLOCK3-1-create-layout`
3. Внести изменения в ветке согласно задаче. Запушить их
4. Создать `Pull Request` из рабочей ветки в `main`
5. При создании автоматически запустится CI/CD пайплайн, который проверит ваш код на форматирование и отсутствие ошибок
6. В случае, если были найдены ошибки в джобах `quality-checks` или `build`, необходимо из исправить.
   Тексты ошибок можно будет найти в информации о джобе, нажав на кнопку Details соответствующей джобы, либо вручную запустив скрипты  
   `npm run lint:check` для ESLint или `npm run format:check` для Prettier  
   `npm run build` eсли проблема с билдом - локально собираем проект с помощью скрипта и проверяем что пошло не так

   Если проблема на последней джобе **Deploy**, то с большой долей вероятности у вас автоматически не подтянулась настройка деплоя. Можно сделать это самостоятельно
   В этом же репозитории перейти `Settings` -> `Pages` и выбрать `Deploy from a branch` -> `gh-pages /root`
   ![image](https://github.com/user-attachments/assets/a60222c2-c237-4da1-b030-f7573785b88b)

   После этого можно перезапустить джобу деплоя. Это можно сделать следующим образом:
   1. Перейти в Details джобы деплоя
      ![image](https://github.com/user-attachments/assets/610f1d51-729c-4c9d-acd4-9e454fc27ea7)

   2. Кликнуть на соответствующую иконку
      ![image](https://github.com/user-attachments/assets/900fc18c-1d1f-451c-b313-dc625920cf86)

   Если все прошло успешно, проверки загорятся зеленым, а в чате ПРа вы увидите сообщение с ссылкой на ваш задеплоенный проект. Иногда для деплоя надо подождать 2-5 минут. Если через это время все равно не заработало, можно написать мне в ЛС

8. Отправить ПР мне на ревью
