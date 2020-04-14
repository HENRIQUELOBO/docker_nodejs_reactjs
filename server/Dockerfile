FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm ci -qy

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
