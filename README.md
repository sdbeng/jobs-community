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

## Prisma - migrate, update models(see steps saved in Notes mac app)

e.g. run:

```bash
npx prisma migrate dev --name add-projects
```

## v14> v15 migrate - Notes from so & docs

Upgraded to v15 - wip
todo:

- check up on the auth model
- check up on the db schema
- check up on the middleware
- update projects page, search bar, results

From the example in the migration guide they show that you can't use the destructured members of an asynchronous page props.

```ts
type tParams = Promise<{ slug: string[] }>;

export default async function Challenge(props: { params: tParams }) {
  const { slug } = await props.params;
  const productID = slug[1];

  // other code here
}
```
