# pull official base image
FROM node:16.13.1-alpine

# set working directory
WORKDIR /first-integration

# add `/app/node_modules/.bin` to $PATH
ENV PATH /first-integration/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]
