# Dockerfile

# Stage 1: Build the Angular app
FROM node:20-alpine as build-angular

# Set the working directory for the build
WORKDIR /build

# Copy package.json and package-lock.json to leverage Docker cache for npm install
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code for the Angular app to the build directory
COPY . .

# Build the Angular app
RUN npm run build

# Stage 2: Create the final image
FROM caddy:latest

# Set the working directory for the final container
WORKDIR /app

# Copy the Angular build output to the final location
COPY --from=build-angular /build/dist/proyectojc ./www

# Copy the Caddyfile to the final location
COPY ./Caddyfile /etc/caddy/Caddyfile

# Expose the port for Caddy
EXPOSE 80

# Command to start Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
