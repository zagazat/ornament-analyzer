## Установка:

`npm install -g jscodeshift`

`npm i`

## Запуск парсера

`grep -r -l "@abdt/ornament" <path_to_project> | xargs npx jscodeshift -t main.ts --parser=babylon
`
