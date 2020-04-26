FROM node:8 as react-build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN yarn
RUN yarn build

FROM nginx
EXPOSE 80
COPY --from=react-build /app/build /usr/share/nginx/html