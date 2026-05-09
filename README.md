# Forums — Full Stack

| Layer | Tech | Hosting |
|-------|------|---------|
| Frontend | Vanilla HTML/CSS/JS | GitHub Pages |
| API | Node.js + Express (Cloud Functions) | Firebase |
| Database | Cloud Firestore | Firebase |
| Auth | Firebase Authentication | Firebase |

---

## Project Structure

```
forums-project/
├── backend/
│   ├── firebase.json          # Firebase project config
│   ├── firestore.rules        # Security rules (all writes via API only)
│   ├── firestore.indexes.json # Composite indexes for queries
│   ├── README.md              # API docs + deployment guide
│   └── functions/
│       ├── package.json
│       └── index.js           # Express API (~400 lines)
│
└── frontend/
    ├── index.html             # Entire frontend (single file)
    └── README.md              # GitHub Pages setup guide
```

---

## Quick Start

1. **Backend**: Follow `backend/README.md` → deploy to Firebase
2. **Frontend**: Paste your Firebase config + API URL into `index.html` → push to GitHub Pages

---

## API Summary

```
GET    /health
GET    /categories
POST   /categories              [admin]
GET    /threads?categoryId=&sort=&limit=&after=
GET    /threads/:id
POST   /threads                 [auth]
PATCH  /threads/:id             [owner|admin]
DELETE /threads/:id             [owner|admin]
GET    /threads/:id/posts
POST   /threads/:id/posts       [auth]
PATCH  /threads/:id/posts/:pid  [owner|admin]
DELETE /threads/:id/posts/:pid  [owner|admin]
POST   /threads/:id/posts/:pid/like  [auth]
GET    /search?q=
GET    /users/:uid
POST   /users/profile           [auth]
POST   /admin/grant             [admin]
POST   /admin/revoke            [admin]
```
