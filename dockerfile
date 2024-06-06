FROM node:latest
WORKDIR /backend
COPY package*.json /٠
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]