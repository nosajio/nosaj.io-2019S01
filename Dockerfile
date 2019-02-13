FROM node:10.15.1 as builder

RUN echo $REACT_APP_CDN_URL

RUN mkdir /usr/src/www
WORKDIR /usr/src/www

ENV PATH /usr/src/www/node_modules/.bin:$PATH
ENV REACT_APP_CDN_URL ${REACT_APP_CDN_URL}

COPY package.json /usr/src/www/package.json

# Intall and build for production
RUN npm install react-scripts -g
RUN npm install

COPY . /usr/src/www
RUN npm run build

# Nginx setup for production
FROM nginx:alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /usr/src/www/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]