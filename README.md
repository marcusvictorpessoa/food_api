# Food API


## Como rodar este projeto localmente

### 1° - Após clonar o projeto execute o comando:
    npm install

### 2° - Com o docker instalado execute o comando:
    docker run --name mongo-food-api -d -p 27017:27017 mongo:latest

### 3° - Utilize o arquivo .env.example como referencia e crie o arquivo .env na pasta src

### 4° - Em seguida execute os comandos para popular o banco de dados:
    npm run seeder --archive=User.seeder.ts
    npm run seeder --archive=Category.seeder.ts

### 5° - Agora é só executar o comando e a API estára de pé
    npm run dev

## Tecnologias utilizadas

Além do Typescript, Express, MongoDB, Mongoose e NodeJS, foram utilizadas a biblioteca bcrypt para hashear a senha dos usuários no banco de dados, a biblioteca jsonwebtoken para geração e manipulação dos tokens de autenticação, e a biblioteca dotenv para carregar as variavéis de ambiente necessárias para a API funcionar.