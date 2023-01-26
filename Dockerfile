FROM node:18.13.0-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ /app/

ENV BASE_URL=https://api.samanre.com

RUN npm run build


FROM nginx:1.23-alpine

RUN mkdir -p /var/www/samanre

WORKDIR /var/www/samanre

COPY --from=builder /app/dist/ ./
RUN mkdir -p ./src/assets
COPY --from=builder /app/src/assets/ ./src/assets/

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENV BASE_URL=https://api.samanre.com

EXPOSE 80
