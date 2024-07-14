FROM node:20-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . /app/

CMD ["node", "./src/index.js"]

