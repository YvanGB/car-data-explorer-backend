FROM node:latest
WORKDIR /app
COPY package*.json /٠
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "app.js"]