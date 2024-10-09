# React App Deployment and TypeScript Usage with AWS

## Table of Contents
1. [Overview](#overview)
2. [Deploying on AWS](#deploying-on-aws)
   - S3 and CloudFront
   - CDN and PoPs
   - Edge Networks
3. [Building and Running a React App](#building-and-running-a-react-app)
4. [TypeScript API Examples](#typescript-api-examples)
   - Adding Properties from an Interface
   - Using `Pick`
   - Using `Partial`
   - Readonly Properties
   - Dynamic Object Properties
5. [Local Development Setup](#local-development-setup)

---

## Overview
This project demonstrates how to deploy a React application on AWS using **S3** and **CloudFront** for efficient content delivery. It also covers essential **TypeScript** APIs for working with objects and utility types like `Pick`, `Partial`, and `Readonly`.

---

## Deploying on AWS

When deploying your React application on AWS, follow these key principles:

### S3 and CloudFront
- **S3 (Simple Storage Service)**: Used to store static files (HTML, CSS, JS).
- **CloudFront**: A CDN (Content Delivery Network) used to cache and deliver content closer to users through Points of Presence (PoPs).

### CDN and PoPs
- **CDN**: Speeds up delivery by caching content at various geographic locations.
- **PoP (Point of Presence)**: A location where the cached data is stored and delivered to users.

### Edge Networks
- **Edge Networks**: Geographically distributed servers that store cached content and provide fast access to backend resources.

**Workflow**:
```
OBJECT STORE (S3) <--> CDN (CloudFront) <--> User
```

---

## Building and Running a React App

Follow these steps to build and run a React app:

1. **Build the React App**:
    ```bash
    npm run build
    ```

    This command creates a `dist` folder containing the `index.html`, CSS, and JavaScript files required for production.

2. **Run the Build Locally**:
    To test the build locally, you can use the `serve` package.
    ```bash
    npm install -g serve
    serve -s dist
    ```

    This will serve the production build of your app on a local server.

---

## TypeScript API Examples

### Task 1: Add Two Variables Inside an Interface
Using an interface, you can add two numbers from objects of the same type.

```typescript
interface User {
    name: string;
    age: number;
}

function ageSum(user1: User, user2: User): number {
    return user1.age + user2.age;
}

console.log(ageSum({ name: "Vinay", age: 20 }, { name: "Vinay", age: 20 }));
```

### Task 2: Using `Pick`
`Pick` allows you to create a new type by selecting specific properties from an existing interface.

```typescript
interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    createdAt: Date;
}

type UserInfo = Pick<User, "name" | "age">;

let user: UserInfo = {
    name: "Vinay",
    age: 20,
};
```

### Task 3: Using `Partial`
`Partial` makes all properties of an interface optional.

```typescript
interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    createdAt: Date;
}

type UserInfo = Partial<User>;

let user: UserInfo = {
    name: "Vinay",
    age: 20,
};
```

### Task 4: Readonly Properties
Use `Readonly` when you want object properties to be immutable after creation.

```typescript
interface Config {
    endpoint: string;
    apiKey: string;
}

const config: Readonly<Config> = {
    endpoint: "https://api.example.com",
    apiKey: "abc123"
};

// config.endpoint = "new-endpoint"; // Error: Cannot assign to 'endpoint' because it is a read-only property.
```

### Task 5: Dynamic Object Properties
You can use an index signature in TypeScript to define dynamic properties.

```typescript
type User = {
    name: string;
    age: number;
};

type Users = {
    [key: string]: User;
};

const users: Users = {
    "User1": { name: "Vinay", age: 20 },
    "User2": { name: "Raji", age: 20 }
};
```

### Task 6: Using `Record`
`Record` creates an object type with specific keys and their corresponding types.

```typescript
type UserRecord = Record<string, number>;

const userScores: UserRecord = {
    "Vinay": 90,
    "Raji": 85
};
```

### Task 7: Using `Map`
Maps are useful when you need to maintain key-value pairs with specific methods to interact with them.

```typescript
const users = new Map<string, number>();
users.set("Vinay", 10);
users.set("Raji", 20);

console.log(users.get("Vinay")); // Output: 10
```

### Task 8: Exclude Types
`Exclude` helps to create a type by excluding specific values from a union.

```typescript
type EventType = 'click' | 'scroll' | 'mousemove';

type RefinedEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'
```

---

## Local Development Setup

To run your React application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Build the project for production:
    ```bash
    npm run build
    ```

5. Run the production build locally:
    ```bash
    npm install -g serve
    serve -s dist
    ```

This will serve the app from the `dist` folder and make it available at `http://localhost:5000`.

---
```