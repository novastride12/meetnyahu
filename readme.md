# MeetnYahu

> **Where ideas find teammates.**

MeetnYahu is a modern full-stack web application that helps college students find teammates for their capstone and academic projects. Instead of relying on WhatsApp groups or personal connections, students can create a profile, publish their project requirements, and discover like-minded collaborators through a clean and intuitive platform.

Designed with a premium, minimal user experience inspired by modern SaaS applications, MeetnYahu focuses on making team formation effortless.

---

##  Features

### User Authentication

* Secure registration and login
* Unique User ID for every account
* Password hashing using bcrypt
* JWT-based authentication
* Editable user profile (except User ID)

### User Profiles

* Required Fields

  * User ID
  * Password
  * Gender
  * CGPA
  * Department
  * Campus
* Optional Fields

  * Name
  * SRN
  * Skills
* Privacy controls for profile information
* No profile pictures in Version 1

### Project Posts

* Public feed accessible to everyone
* Only registered users can create posts
* One active post per user
* Create, edit, and delete posts
* Mark posts as **Team Complete**
* Specify:

  * Project title
  * Description
  * Required skills
  * Number of teammates required
  * Preferred department (optional)
  * Preferred CGPA (optional)
  * Project domain

### Search & Filters

* Search by project title
* Filter by:

  * Department
  * Campus
  * Skills
  * Project Domain
  * CGPA
  * Status (Open / Team Complete)

---

##  Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT
* bcrypt

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

##  Project Structure

```text
meetnyahu/
│
├── .gitignore
├── README.md
├── LICENSE
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
└── backend/
    ├── server.js
    ├── package.json
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    └── utils/
```

---

##  Version 1 Roadmap

* User Registration & Login
* User Profile Management
* Public Project Feed
* Create / Edit / Delete Project Posts
* One Active Post Per User
* Search & Filtering
* Team Complete Status
* Privacy Controls
* Responsive UI

---

##  Planned Features

* Real-time Chat
* Notifications
* Profile Pictures
* Email Verification
* Team Recommendation System
* Saved Posts
* Admin Dashboard
* Reporting & Moderation
* Advanced Search

---

##  Security

* Passwords are hashed using bcrypt.
* JWT-based authentication.
* Protected API routes.
* Server-side validation.
* Unique immutable User IDs.
* Environment variables for sensitive credentials.

---

##  Design Philosophy

MeetnYahu is designed to feel like a modern startup product rather than a traditional college portal.

The interface emphasizes:

* Minimalism
* Spacious layouts
* Warm off-white and beige color palette
* Elegant typography
* Smooth animations
* Fully responsive design
* Accessibility and usability

---

##  Project Status

**Current Version:** V1 (In Development)

The project is actively being developed with a focus on clean architecture, scalability, and maintainable code. Future versions will introduce communication features, recommendations, and enhanced collaboration tools.

---

##  Contributing

Contributions, ideas, and feature suggestions are welcome. Feel free to open issues or submit pull requests to help improve MeetnYahu.

---

##  License

This project is licensed under the MIT License.

---

# MeetnYahu

**Meet. Match. Build.**
