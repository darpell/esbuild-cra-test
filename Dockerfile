FROM node:14.11

RUN mkdir /app
WORKDIR /app

ENV NODE_ENV development
ENV PATH /app/node_modules/.bin:$PATH
ENV HOME /app

# Package specs
COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

COPY . ./
CMD ["npm", "start"]