FROM node:10-alpine

RUN npm install zally-web-ui@0.1.1

COPY server.js ./

EXPOSE 3000

CMD ["node", "server.js"]
