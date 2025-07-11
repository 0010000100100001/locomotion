# Lottie Server Setup Guide

This project serves static `.json` and `.lottie` files using Python + Flask.

---

## 📦 Requirements

- [pyenv](https://github.com/pyenv/pyenv)
- [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv)

Install via Homebrew (macOS):

```bash
brew install pyenv pyenv-virtualenv
```

Then add to your shell config:

```bash
# ~/.zshrc or ~/.bashrc
eval "$(pyenv init --path)"
eval "$(pyenv virtualenv-init -)"
```

Reload your shell:

```bash
exec "$SHELL"
```

---

## 🚀 Setup

1. Navigate to backend directory:

```bash
cd backend
```

2. Install Python and create virtualenv:

```bash
pyenv install 3.11
pyenv virtualenv 3.11 lottie
pyenv local lottie
# check if correct version is being used
which pip
which python
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run the server:

```bash
python app.py
```

Now visit: [http://localhost:8000/json/skeleton](http://localhost:8000/json/skeleton)

---

## 📂 Folder Structure

```
backend/
├── app.py                 # Flask app
├── requirements.txt
├── setup.md
└── data/
    ├── skeleton.json
    ├── designToken.json
    └── someAnimation.lottie
```

---

## 🔄 Regenerate requirements

```bash
pip freeze > requirements.txt
```