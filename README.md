
# **Ticket Management System**
##  **System Design**
### System Flowchart
![System Flowchart](https://res.cloudinary.com/dynsi60i4/image/upload/v1733894812/system_work_flow_ls9wzf.png)

---

### Entity-Relationship Diagram
![ER Diagram](https://res.cloudinary.com/dynsi60i4/image/upload/v1733894812/ticket_management_systemer_diagrame_qhcbcq.png)


- **Postman Documentation Link**: [Postman Ticket management system Document Link](https://app.getpostman.com/join-team?invite_code=a0583c88a7eac709255744427bdff6a5dd67cf20c83390108cf344dd3959f4a1&target_code=06257d6754f5e5b824f60037392a7c27)


**Project Description:**  
This is a Bus Ticket Booking System backend application developed using Node.js, Express, Mongoose, and JWT. The system allows users to authenticate, view buses, manage bus ticket purchases, and handle administrative operations.

---

### Key Features
1. **Authentication Module:**  
   - User registration and login with JWT authentication.  
   - Role-based access control (User & Admin roles).  

2. **Admin APIs:**  
   - Create, edit, delete, and manage bus and ticket information.  

3. **User APIs:**  
   - View bus information.  
   - Securely purchase bus tickets.  

4. **Database Implementation:**  
   - Mongoose schemas are implemented for Users, Buses, and Tickets.  
   - Database can be seeded with mock data.  

5. **Validation & Error Handling:**  
   - Middleware is used for input validation and error management.  

6. **Testing & Documentation:**  
   - All API endpoints were tested using Postman.  
   - Comprehensive endpoint documentation is available.

---

### Instructions to Set Up

1. **Clone the Repository:**  
   Run the following command:  
   `git clone https://github.com/ZihadulIslam2/Ticket-Management-System`  

---

### 2. Navigate to the Project Directory
```bash
cd your-repo-name
```

---

### 3. Install Dependencies
```bash
npm install
```

---

### 4. Configure Environment Variables
Create a `.env` file in the root directory with the following keys:
```plaintext

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

### 5. Seed Database (Optional)
You can seed the database with mock bus and ticket data:
```bash
node seed.js
```

---

### 6. Start the Server
```bash
npm start
```

OR for development:
```bash
npm run dev
```

---

## 🛠️ **Database Schema**
The system uses **MongoDB** with Mongoose to define these main schemas:

### 1. **User Schema**
- **Fields**: `name`, `email`, `password`, `role`, `tickets` (array of references to Ticket).

### 2. **Bus Schema**
- **Fields**: `name`, `route`, `description`, `tickets` (array of references to Ticket).

### 3. **Ticket Schema**
- **Fields**: `bus`, `price`, `time`, `isAvailable`, `purchasedBy` (reference to User).

---

## 🛡️ **API Routes**

### Authentication
1. **POST `/auth/register`** - User registration with hashed password using `bcryptjs`.
2. **POST `/auth/login`** - Login with JWT token generation.
3. **POST `/auth/logout`** - Token invalidation strategy.

---

### Admin APIs
1. **POST `/admin/bus`** - Create a bus.
2. **PUT `/admin/bus/:id`** - Update bus details.
3. **DELETE `/admin/bus/:id`** - Delete a bus.
4. **POST `/admin/ticket`** - Create a ticket.
5. **PUT `/admin/ticket/:id`** - Update ticket.
6. **DELETE `/admin/ticket/:id`** - Delete a ticket.

---

### User APIs
1. **GET `/buses`** - View all buses.
2. **GET `/tickets`** - View all available tickets.
3. **POST `/tickets/purchase`** - Purchase a ticket.

---

## 🧪 **Testing**
API testing was done with **Postman**. Test flows include:
- User registration and login.
- Admin creating, editing, and deleting buses and tickets.
- Users viewing buses and purchasing tickets.

---

## 📊 **Tech Stack**
- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT
- **ORM**: Mongoose
- **Password Security**: bcryptjs

---


---

## ✉️ **Contact**
- **LinkedIn**: [Zihadul Islam](https://www.linkedin.com/in/zihadulislam2/)
- **GitHub**: [ZihadulIslam2](https://github.com/ZihadulIslam2)
- **Email**: [zihadul708@gmail.com](mailto:zihadul708@gmail.com)

---
Made with ❤️ by Zihadul Islam
