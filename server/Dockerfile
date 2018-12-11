FROM node:8-alpine

RUN mkdir -p /server
WORKDIR /server

COPY . .

ENV NODE_ENV production
ENV PORT 5000
ENV MONGO_URI "mongodb://dev:asdf99@localhost:27017/this-app"
ENV ENABLE_EMAILS true
ENV COOKIE_KEY "changeme"
ENV GOOGLE_CLIENT_ID "changeme"
ENV SOME_PUBLIC_KEY "asdf"

EXPOSE $PORT

RUN rm -rf node_modules .eslintignore .eslintrc.json .gitignore Dockerfile && \
    yarn install && \
    yarn cache clean && \
    rm -rf yarn* package.json

CMD ["node", "index.js"]
