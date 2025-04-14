# k8s-configmap-secret-app

# Kubernetes ConfigMap and Secret 

This project demonstrates the use of Kubernetes ConfigMap and Secret to store and manage configuration data and sensitive information for a Node.js application.

## Project Structure

The project consists of two main components:
1. A Node.js application that serves as a simple game (or any web service).
2. Kubernetes manifests that define ConfigMap, Secret, Deployment, and Service.

### Directory Structure:
k8s-configmap-secret-app/ │ ├── app/ │ ├── server.js │ ├── package.json │ ├── k8s/ │ ├── configmap.yaml │ ├── secret.yaml │ ├── deployment.yaml │ ├── service.yaml │ └── README.md


- **app/server.js**: The main server file for the Node.js application.
- **app/package.json**: Contains the dependencies and scripts for the Node.js application.
- **k8s/configmap.yaml**: Defines a Kubernetes ConfigMap to store non-sensitive configuration.
- **k8s/secret.yaml**: Defines a Kubernetes Secret to store sensitive data such as API keys or passwords.
- **k8s/deployment.yaml**: Kubernetes deployment configuration to deploy the Node.js application.
- **k8s/service.yaml**: Kubernetes service to expose the application.

## How to Deploy

1. **Build the Docker Image:**
   If you don't already have the Docker image, build it using the following command:

   ```bash
   docker build -t <your-docker-image-name> .
2. ****Deploy to Kubernetes:** Apply the Kubernetes manifests to deploy the application on  cluster:

kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

3. **Access the Application**
   minikube service game-service

**Conclusion**
This project is an example of how Kubernetes ConfigMap and Secret can be used to manage configuration and sensitive data separately in a secure and scalable manner. By following the Kubernetes best practices, the application can be easily managed, scaled, and updated.
