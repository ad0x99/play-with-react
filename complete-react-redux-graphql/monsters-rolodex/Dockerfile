FROM node:18

WORKDIR /app

COPY package*.json ./

COPY . /app

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]