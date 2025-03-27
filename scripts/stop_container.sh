#!/bin/bash
set -e

echo "Stopping all running Docker containers..."

# Get the container IDs of all running containers and stop them
docker ps -q | xargs -r docker stop

# Remove the stopped containers
docker ps -aq | xargs -r docker rm

echo "Docker containers stopped and removed successfully."
