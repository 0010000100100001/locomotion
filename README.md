# 🧪 Locomotion

This is a lightweight web + backend POC for dynamically rendering interactive Lottie ads using `skeleton.json` layouts.

> ⚠️ Note: This demo is made for only iPhone 12 Pro device. Due to time limitations, we couldn't make this responsive.

---

## 🌐 Frontend (React + Vite)

### 🔧 Features:
- Dynamic components rendered via `skeleton.json`
- Lottie animation integration
- TailwindCSS + JSX for flexible styling

### 🧪 Try:
```bash
npm install
npm run dev -- --host
```

#### Visit:

- http://localhost:5173/
- http://localhost:5173/?ad=overlay
- http://localhost:5173/?ad=showcase

## 🔁 Backend (Python + Flask)
Serves `.json` files

### ▶️ Run:
```bash
python app.py
```
### Serves:

- http://localhost:8000/json/skeleton_overlay_one.json
- http://localhost:8000/json/skeleton_overlay_two.json
- http://localhost:8000/json/skeleton_showcase_one.json

## 📁 Folder Structure
```
project/
├── frontend/              # React app
├── backend/
│   ├── app.py             # Flask server
│   └── data/
│       ├── skeleton_overlay_one.json
│       ├── skeleton_showcase_one.json
│       └── RainDropsAnimation.json
```
## 🧠 Tech Used
- Frontend: React + Vite + TailwindCSS + LottiePlayer
- Backend: Flask + pyenv + virtualenv
