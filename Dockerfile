# Dockerfile.frontend

# base image
FROM node:11-alpine as build

# set working directory
WORKDIR /usr/src/node_app

# environment vars must be included in dockerfile
ARG NODE_ENV=production

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/node_app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/node_app/package.json

# silent so we don't have to watch the whole thing download everytime
RUN npm install --silent

COPY . /usr/src/node_app

# Start application
RUN npm run postinstall

# PHASE TWO:
# this will be the actual base image of the image we are building
# We are going from the alpine version of ruby to save space
FROM ruby:2.5.1-alpine3.7

# We tell the image `--no-cache` so we don't
# clog up our image with the things we are downloading
RUN apk add --no-cache --update build-base \
  linux-headers \
  git \
  postgresql-dev \
  nodejs \
  tzdata


# environment vars must be included in the dockerfile
ARG DATABASE_URL="postgres://postgres@db"
ARG RAILS_ENV=production

# copy over our Gemfile
WORKDIR /my_app
COPY Gemfile /my_app/Gemfile
COPY Gemfile.lock /my_app/Gemfile.lock

# We gem install bundler for a specific issue with bundler 2.0
# then we can bundle install
RUN gem install bundler && bundle install
COPY . /my_app

# Here is where that build stage from earlier comes in. We don't need all the
# Javascript dependencies just the bundle files! So we will copy those over into
# our final image
COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js ./app/assets/javascripts/
COPY --from=build /usr/src/node_app/app/assets/javascripts/bundle.js.map ./app/assets/javascripts/

# Add a script to be executed every time the container starts.
# This script will take care of a Rails specific Docker issue with the server
# not starting
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

# Expose our port
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]