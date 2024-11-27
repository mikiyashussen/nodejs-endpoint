FROM node:lts-alpine3.19

RUN mkdir -p /home/nodejs-endpoint

COPY . /home/nodejs-endpoint

WORKDIR /home/nodejs-endpoint

RUN npm install

CMD ["node", "app.js"]