#!/bin/bash
set -e

# Pull the Docker image from Docker Hub
# Add logic to hide registry and image details 
echo "::Pulling image from Docker Registry..."
docker pull bishal5438/aws-ci-cd-demo

# Run the Docker image as a container
echo "::Starting container..."
docker run -d -p 3001:3001 bishal5438/aws-ci-cd-demo