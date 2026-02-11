Here is your complete README.md for the project.

You can place this at the root of your repository.

📄 README.md
# 🚀 Node.js HPA & VPA Demo (Helm + ArgoCD + GitHub Actions)

This project demonstrates a complete Kubernetes deployment using:

- ✅ Node.js (ES Modules)
- ✅ Multi-stage Docker build
- ✅ Helm chart deployment
- ✅ Horizontal Pod Autoscaler (HPA)
- ✅ Vertical Pod Autoscaler (VPA)
- ✅ ArgoCD (GitOps)
- ✅ GitHub Actions CI/CD
- ✅ NodePort Service (30007)

---

# 📁 Project Structure
.
├── app/ # Node.js application
│ ├── package.json
│ ├── server.js
│ └── public/style.css
│
├── Dockerfile # Multi-stage Dockerfile
│
├── helm/node-app/ # Helm chart
│ ├── Chart.yaml
│ ├── values.yaml
│ └── templates/
│
├── argocd/
│ └── application.yaml # ArgoCD Application
│
└── .github/workflows/
└── deploy.yml # GitHub Actions CI/CD


---

# 🐳 Docker Image

The application builds and pushes:
cloudketan/nodejs-hpa-vpa:hv1

---

# ⚙️ Kubernetes Components

## 🔹 Deployment
- Runs Node.js app on port 3000
- Resource requests & limits defined

## 🔹 Service
- Type: NodePort
- NodePort: **30007**

Access:

http://<EC2-IP>:30007

## 🔹 HPA
- CPU based scaling
- Min replicas: 1
- Max replicas: 5
- Target CPU: 50%

## 🔹 VPA
- Update Mode: Auto
- Adjusts CPU & memory requests automatically

---

# 🔄 GitHub Actions CI/CD

Pipeline performs:

- Checkout code
- Gitleaks security scan
- Docker login
- Build image
- Push image
- Apply ArgoCD application

Triggered on:

push to main branch

---

# 🔐 Required GitHub Secrets

Add in:
GitHub → Settings → Secrets → Actions

| Secret Name       | Description |
|-------------------|------------|
| DOCKER_USERNAME   | DockerHub username |
| DOCKER_PASSWORD   | DockerHub access token |

---

# 🌍 ArgoCD Deployment

Apply:

kubectl apply -f argocd/application.yaml

ArgoCD will:

- Sync Helm chart
- Create namespace
- Keep cluster state aligned with Git

---

# 🧠 Verification Commands

### Check HPA


kubectl get hpa
kubectl describe hpa node-app


### Check VPA

kubectl get vpa
kubectl describe vpa node-app


### Check Pods

kubectl get pods
kubectl describe pod <pod-name>


---

# ⚠ Important Notes

- Metrics Server must be installed for HPA.
- VPA works best when not conflicting with HPA on same resource (CPU).
- Security group must allow port 30007 (EC2).

---

# 🎯 Expected Behavior

| Component | Expected Result |
|------------|----------------|
| HPA | Pods increase under load |
| VPA | Resource requests auto-adjust |
| NodePort | Accessible via port 30007 |

---