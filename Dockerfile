FROM node:14.19-alpine3.15

WORKDIR /usr/src/app
COPY package*.json ./
COPY .env ./
COPY ecosystem.config.js ./

RUN npm install
RUN npm install -g pm2
COPY . .

CMD ["pm2-runtime", "start", "ecosystem.config.js"]