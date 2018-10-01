# build stage
FROM node:latest as build-stage
WORKDIR ./
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run-script build