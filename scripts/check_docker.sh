#!/bin/bash
set -e

if [[ ! docker --version &> /dev/null ]] # Adjust this logic 
 then
    echo "Docker not found, installing Docker..."
    apt install docker.io -y 
    systemctl enable docker && systemctl start docker
else
    echo "Docker is already installed."
fi



