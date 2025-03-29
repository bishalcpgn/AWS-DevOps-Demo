#!/bin/bash
set -e

# Check if Docker is installed
if [[ ! $(command -v docker) ]]; then
    echo "Docker not found, installing Docker..."
    
    # Update package list and install Docker
    apt update && apt install -y docker.io
    
    # Enable and start Docker service
    systemctl enable docker && systemctl start docker
    
    echo "Docker installation completed."
else
    echo "Docker is already installed."
fi


