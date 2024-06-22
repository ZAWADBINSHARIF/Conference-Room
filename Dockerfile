FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

USER node

EXPOSE 4000

CMD npm run server