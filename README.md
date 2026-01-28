# RESTful API Activity - Your Name

## Best Practices Implementation

### 1. Environment Variables
**Why did we put `BASE_URI` in `.env` instead of hardcoding it?**

Answer:  
We use environment variables to avoid hardcoding configuration values so the application can be easily configured for different environments without modifying the source code. This improves security and maintainability.

---

### 2. Resource Modeling
**Why did we use plural nouns (e.g., `/dishes`) for our routes?**

Answer:  
Plural nouns represent collections of resources. This follows RESTful API conventions and makes endpoints clearer and more predictable.

---

### 3. Status Codes
**When do we use `201 Created` vs `200 OK`?**

Answer:  
`201 Created` is used when a new resource is successfully created using POST, while `200 OK` is used for successful requests such as GET, PUT, or DELETE.

**Why is it important to return `404` instead of just an empty array or a generic error?**

Answer:  
Returning `404 Not Found` clearly tells the client that the requested resource does not exist, which improves debugging and proper error handling.

---

### 4. Testing
(Paste a screenshot of a successful GET request here)

![Successful GET Request](screenshots/get-dishes.png)