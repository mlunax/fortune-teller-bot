FROM node:15.3.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
# CMD [ "npm", "start" ]
ENTRYPOINT ["/docker-entrypoint.sh"]