# Multi-stage build for AWS CI/CD Tutorial

# Stage 1: Build the React frontend
FROM node:18-alpine as frontend-build

WORKDIR /app

# Install dependencies separately to leverage Docker cache
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the frontend code and build
COPY . ./
RUN npm run build

# Stage 2: Set up the Express server
FROM node:18-alpine as backend

WORKDIR /app

# Copy necessary backend files
COPY src/server/package.json src/server/package-lock.json* ./
RUN npm install --production

# Copy server source code
COPY src/server ./

# Copy the built frontend files from the frontend stage
COPY --from=frontend-build /app/dist ./dist

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3001

# Expose the port
EXPOSE 3001

# Start the server
CMD ["node", "server.js"]
