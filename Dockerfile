FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN chown -R node:node /app && chown -R 755 /app

RUN npm i pm2 -g

USER node

EXPOSE 4000

CMD pm2-runtime start /app/backend/server.js --name mind-map-game --instances max
