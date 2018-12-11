FROM node:8-alpine

RUN mkdir -p /client
WORKDIR /client

COPY . .

ENV NODE_ENV production
ENV PORT 3000

RUN yarn install && \
    yarn build && \
    yarn global add serve && \
    yarn cache clean && \
    rm -rf node_modules public src .eslintignore .eslintrc.json .gitignore Dockerfile package.json README.md yarn.lock

EXPOSE $PORT

CMD serve -s -p $PORT build