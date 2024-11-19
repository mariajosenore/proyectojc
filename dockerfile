# Step 1: Build the Angular application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application source code
COPY . .

# Build the Angular application for production
RUN npm run build --prod

# Step 2: Serve the application with a lightweight web server (e.g., nginx)
FROM nginx:alpine

# Copy the built Angular app from the previous stage
COPY --from=build /app/dist/proyectomajo /usr/share/nginx/html

# Expose the port that nginx will listen on
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
