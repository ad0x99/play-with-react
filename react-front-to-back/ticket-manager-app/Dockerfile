FROM node:25.4.0-trixie-slim

WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]