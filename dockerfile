FROM node:slim
WORKDIR ./
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
EXPOSE 8080
