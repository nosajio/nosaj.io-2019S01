FROM node:10.15.1 as builder

RUN mkdir /usr/src/www
WORKDIR /usr/src/www

# Make sure env vars are present
ARG CDN_URL
ENV PATH /usr/src/www/node_modules/.bin:$PATH
ENV REACT_APP_CDN_URL=${CDN_URL}
RUN echo "REACT_APP_CDN_URL=${CDN_URL}\n" >> .env
RUN echo "NODE_ENV=production\n" >> .env

COPY package.json /usr/src/www/package.json

# Intall and build for production
RUN npm install react-scripts -g
RUN npm install

COPY . /usr/src/www
RUN npm run build

# Copy to www dir (the shared dir)
RUN mkdir /usr/www
COPY /usr/src/www/build/ /usr/www/

# Nginx setup for production
# FROM nginx:alpine
# RUN rm -rf /etc/nginx/conf.d
# COPY conf /etc/nginx
# COPY --from=builder /usr/src/www/build /usr/share/nginx/html
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]