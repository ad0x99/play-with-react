FROM node:25.6.1-trixie-slim

WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]