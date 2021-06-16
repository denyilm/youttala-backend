# youttala web app 

youttala is a web application where you can instantly learn how Swedish words are pronounced and used in the context by watching YouTube. Just type the word you want to hear and search.

https://www.youttala.com

# youttala-backend

youttala is developed by using MERN (MongoDB-Expressjs-Reactjs-Nodejs) stack

# How to run youttala-backend on a Docker container

1-You need to have Docker downloaded in your machine to run this app with docker.

Please read the instructions to download Docker:

https://www.docker.com/products/docker-desktop


2-Run the following command on your terminal

docker run -p 3002:3002 denyilmaz/youttala-backend

3-Once you run this command you should see the following message in your terminal: 

"Server running on port 3002"

Available routes that you can run on your browser to see some data:

http://localhost:3002/api/words
http://localhost:3002/api/subtitles

# How to run youttala-backend on your machine without Docker

1-You need nodejs installed on your machine.

Please read the instructions to download nodejs:

https://nodejs.org/en/download/

2-Go to the directory where you want to store youttala-backend

In the directory:

git clone https://github.com/denyilm/youttala-backend.git

3-Go into ~/youttala-backend and run:

npm install

4-Run the following command

npm run dev

5-Once you run this command you should see the following message in your console: 

"Server running on port 3002"

# Last step

Run youttala-frontend to start using youttala web app on your machine

Link to youttala-frontend github repo:

https://github.com/denyilm/youttala-frontend

Link to youttala-frontend docker hub repo: 

https://hub.docker.com/repository/docker/denyilmaz/youttala-frontend