FROM node:25.6.0-trixie-slim

WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]