FROM node:slim
EXPOSE 8000

WORKDIR /usr/app

COPY app.js /usr/app
COPY server.js /usr/app
COPY src/ /usr/app/src
COPY package.json /usr/app

RUN npm install

CMD node server.js
