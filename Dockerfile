FROM node:7

RUN npm install -g @angular/cli

RUN mkdir -p /usr/src/front_src
WORKDIR /usr/src/front_src

COPY package.json .
RUN npm install

COPY . .
ARG build_env
RUN ng build --env=$build_env --output-path=/usr/src/front

VOLUME /usr/src/front
