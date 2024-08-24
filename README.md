## Jobs Community Project starter

Professional networking site.

## Getting Started

Run the development server:

```bash
npm run dev
```

## Database design

Design a database schema that can efficiently handle user profiles, posts, and other related entities.

### db schema - iteration-1

User, Post, Job, Company, and Application

```schema.prisma
model User {
    id Int    @id @default(autoincrement())
    email     String
    password  String
    firstName String
    lastName  String
    profile Profile? //this can change due to the auth model implemented **
    posts   Post[]
    applications Application[]
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt

    @@map("users") //check up
}

```
