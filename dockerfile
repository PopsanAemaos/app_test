FROM node:10-alpine

# create destination directory
RUN mkdir -p /usr/src/app2
WORKDIR /usr/src/app2


# copy the app, note .dockerignore
COPY . .
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
# expose 5000 on container
EXPOSE 4000

# set app serving to permissive / assigned
# set app port

# start the app
CMD [ "npm", "run", "start" ]
