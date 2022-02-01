FROM node:16.13

RUN mkdir -p /home/app
WORKDIR /home/app

RUN npm i -g npm 
# RUN npm i -g pm2
COPY ./package*.json ./
RUN npm i
COPY ./ ./
RUN npm run build
RUN rm -rf src

EXPOSE 3000

CMD [ "pm2-runtime", "start", "npm", "--", "start" ]

