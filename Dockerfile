FROM node

RUN apt-get update 

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install -g sequelize-cli

COPY . .

CMD npm start