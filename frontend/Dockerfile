# build stage
FROM node:latest as build-stage

WORKDIR ./
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
RUN npm run build

# FROM nginx:latest
# COPY --from=build-stage ./dist/ /usr/share/nginx/html
# COPY ./nginx-to-do-app.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]