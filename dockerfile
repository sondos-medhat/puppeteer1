FROM node:12
COPY . /nodeapp
WORKDIR /nodeapp
RUN npm install

