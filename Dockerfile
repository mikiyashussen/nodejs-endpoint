FROM lst-alpine3.19

RUN mkdir -p /home/nodejs-endpoint

COPY . /home/nodejs-endpoint

CMD ["node", "/home/nodejs-endpoint/app.js"]