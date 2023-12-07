FROM node:21 as build

WORKDIR /app

COPY package.json  /app/
COPY yarn.lock /app/

RUN yarn

COPY ./ /app/

RUN yarn build 

FROM nginx:1.25.3-alpine

COPY --from=build /app/dist/carols/ /usr/share/nginx/html