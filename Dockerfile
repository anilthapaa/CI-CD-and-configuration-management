# Use Nginx to serve static files
FROM nginx:alpine

# Remove default nginx config
RUN rm -rf /usr/share/nginx/html/*

# Copy static files to nginx html directory from correct folders
COPY public/index.html /usr/share/nginx/html/
COPY src/weather.js /usr/share/nginx/html/

# Expose default Nginx port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]