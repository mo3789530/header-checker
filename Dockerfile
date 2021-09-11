FROM node:14.4.0-buster

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies (package.json and package-lock.json)
COPY package*.json ./
RUN npm install

# Bundle app source (server.js)
COPY . .

# Listen port
EXPOSE 3000 

# Run Node.js
CMD [ "node", "app.js" ]
