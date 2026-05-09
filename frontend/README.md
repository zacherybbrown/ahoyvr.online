# Forums Frontend — GitHub Pages

Single-file static frontend. No build step. Pure HTML/CSS/JS.

## Setup

### 1. Update config in `index.html`

Find the config block near the top of the `<script>` tag and replace the placeholder values:

```js
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",          // From Firebase Console → Project Settings
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID",
};

const API_BASE = "https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/api";
```

Get `FIREBASE_CONFIG` values from: Firebase Console → Project Settings → Your apps → Web app → SDK setup.

### 2. Enable authorized domains in Firebase

Firebase Console → Authentication → Settings → Authorized domains → Add:
```
YOUR_USERNAME.github.io
```

### 3. Deploy to GitHub Pages

```bash
# Create a new GitHub repository (e.g. "forums")
git init
git remote add origin https://github.com/YOUR_USERNAME/forums.git

# Copy the frontend files
cp index.html ./
git add index.html
git commit -m "initial"
git push -u origin main
```

Then in GitHub → Repository → Settings → Pages:
- Source: Deploy from a branch
- Branch: `main` / root (`/`)
- Save

Your site will be live at:
```
https://YOUR_USERNAME.github.io/forums/
```

---

## Features

- Browse categories → threads → posts
- Register / login via Firebase Auth (email + password)
- Create threads in any category
- Reply to threads
- Edit / delete your own posts
- Like posts
- Search threads by keyword
- Cursor-based pagination ("Load more")
- Relative timestamps

---

## Customization

The entire UI is driven by CSS variables in `:root`. To change the theme:

```css
:root {
  --bg:      #0f0f0f;   /* page background */
  --surface: #1a1a1a;   /* card/input background */
  --border:  #2a2a2a;   /* borders */
  --text:    #e0e0e0;   /* primary text */
  --muted:   #666;      /* secondary text */
  --accent:  #4ade80;   /* links, highlights */
  --danger:  #f87171;   /* errors, delete */
}
```

## Adding OAuth (Google, GitHub, etc.)

1. Enable in Firebase Console → Authentication → Sign-in methods
2. Add the provider's SDK (e.g. `firebase-auth-compat.js` already loaded)
3. Call `auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())`
