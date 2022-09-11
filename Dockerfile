FROM cypress/browsers:node16.14.2-slim-chrome100-ff99-edge
 

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN echo node --version
RUN npm --version
RUN npm install -g yarn@latest --force
RUN npm install -g npm@8.19.1

RUN yarn install
RUN yarn run cypress install 
RUN ["npm","run","cypress"]