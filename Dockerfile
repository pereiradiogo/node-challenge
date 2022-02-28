FROM node:8

WORKDIR /usr/src/app

COPY ./api ./

RUN npm install
# RUN npm run build

# COPY api.app.js api.app.js

EXPOSE 3000
CMD [ "npm", "start" ]