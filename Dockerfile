FROM node:18-alpine

# Create destination directory
RUN mkdir -p /usr/src/order-products
WORKDIR /usr/src/order-products

RUN apk update && apk upgrade && \
    apk add --no-cache git yarn

# Copy the app, note .dockerignore
COPY . /usr/src/order-products/

# Install dependencies
RUN yarn install

# Build the project
RUN yarn build

# Generate static files
RUN yarn generate

# Expose port
EXPOSE 3000

# Set environment variables
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Run the application
CMD [ "yarn", "preview" ]
