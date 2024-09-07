FROM node:18

WORKDIR /app

RUN npm install -g expo-cli

COPY frontend/package*.json ./

RUN npm install

COPY frontend/ ./

EXPOSE 19000

CMD ["npm", "run", "android"]
