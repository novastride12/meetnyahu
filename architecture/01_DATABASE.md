# MeetnYahu Database Design (Version 1)

## Overview

MeetnYahu uses MongoDB as its primary database.

The application is designed around two main collections:

* Users
* Posts

Additional collections such as Messages and Notifications are planned for future versions but are intentionally excluded from Version 1.

---

# Collection: Users

Each registered student has one document.

## Fields

| Field        | Type          | Required | Notes                    |
| ------------ | ------------- | -------- | ------------------------ |
| _id          | ObjectId      | Yes      | MongoDB generated        |
| userid       | String        | Yes      | Unique and immutable     |
| passwordHash | String        | Yes      | Generated using bcrypt   |
| name         | String        | No       | Optional                 |
| srn          | String        | No       | Optional                 |
| gender       | String        | Yes      | Required                 |
| department   | String        | Yes      | Required                 |
| campus       | String        | Yes      | Required                 |
| cgpa         | Number        | Yes      | Range 0–10               |
| skills       | Array<String> | No       | Optional                 |
| visibility   | Object        | Yes      | Controls profile privacy |
| createdAt    | Date          | Yes      | Auto-generated           |
| updatedAt    | Date          | Yes      | Auto-generated           |

---

## Visibility Object

Each user controls which information is public.

Example

```json
{
  "gender": true,
  "department": true,
  "campus": false,
  "cgpa": false,
  "skills": true,
  "srn": false,
  "name": true
}
```

If a field is marked false, it should only be visible to authenticated users.

---

# Collection: Posts

Each project requirement is stored as one document.

A user may only have one OPEN post at a time.

Once a post is marked TEAM_COMPLETE, they may create another.

## Fields

| Field               | Type          | Required | Notes                        |
| ------------------- | ------------- | -------- | ---------------------------- |
| _id                 | ObjectId      | Yes      | MongoDB generated            |
| owner               | ObjectId      | Yes      | Reference to Users           |
| title               | String        | Yes      | Project title                |
| description         | String        | Yes      | Project description          |
| requiredSkills      | Array<String> | No       | Skills needed                |
| projectDomain       | String        | Yes      | AI, Web, IoT, etc.           |
| preferredDepartment | String        | No       | Optional                     |
| preferredCGPA       | Number        | No       | Optional                     |
| teammatesNeeded     | Number        | Yes      | Number of required teammates |
| status              | String        | Yes      | OPEN or TEAM_COMPLETE        |
| createdAt           | Date          | Yes      | Auto-generated               |
| updatedAt           | Date          | Yes      | Auto-generated               |

---

# Relationships

Users

1

↓

∞

Posts

Although multiple posts may exist historically, only one may remain OPEN at any given time.

---

# Validation Rules

## User

* userid must be unique
* password must never be stored directly
* passwordHash is mandatory
* cgpa must be between 0 and 10
* skills are optional
* SRN is optional
* User ID cannot be changed after registration

---

## Posts

* title cannot be empty
* description cannot be empty
* teammatesNeeded must be greater than 0
* owner is required
* status defaults to OPEN
* requiredSkills may be empty

---

# Planned Future Collections

## Messages

Will support direct messaging between users.

Not included in Version 1.

---

## Notifications

Will notify users when:

* Someone expresses interest
* Messages arrive
* Team requests are accepted

Not included in Version 1.

---

# Database Goals

* Simple schema
* Easy to extend
* Efficient querying
* Production-ready structure
* Scalable for future versions
