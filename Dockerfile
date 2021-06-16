# docker build . -t youttala-backend && docker run -p 3002:3002 youttala-backend
FROM node:14
EXPOSE 3002
WORKDIR /usr/src/app
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt install -y nodejs
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=3002 REQUEST_ORIGIN=http://localhost:3030
CMD ["npm", "run", "dev"]