# Movie Reservation System

A Node.js/Express backend for managing movie ticket reservations, user authentication, and admin operations.

---

## 📁 Project Structure

- [`backend/app.js`](backend/app.js) — Main Express app setup
- [`backend/server.js`](backend/server.js) — Server entry point
- [`backend/db/db.js`](backend/db/db.js) — MongoDB connection
- [`backend/model/user.model.js`](backend/model/user.model.js) — User schema/model
- [`backend/model/ticket.model.js`](backend/model/ticket.model.js) — Ticket schema/model
- [`backend/controller/user.control.js`](backend/controller/user.control.js) — User controllers
- [`backend/controller/ticket.control.js`](backend/controller/ticket.control.js) — Ticket controllers
- [`backend/service/user.service.js`](backend/service/user.service.js) — User service logic
- [`backend/service/ticket.service.js`](backend/service/ticket.service.js) — Ticket service logic
- [`backend/routes/user.route.js`](backend/routes/user.route.js) — User routes
- [`backend/routes/admin.route.js`](backend/routes/admin.route.js) — Admin routes

---

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```
3. **Configure environment variables**  
   Edit [`backend/.env`](backend/.env) with your MongoDB URI and JWT secret.

4. **Start the server**
   ```bash
   npm start
   ```

---

## 📚 API Endpoints

- **User Registration/Login:** [`backend/routes/user.route.js`](backend/routes/user.route.js)
- **Admin Ticket Management:** [`backend/routes/admin.route.js`](backend/routes/admin.route.js)

---

## 🧪 Postman Collections

- [User Login (POST)](https://www.postman.com/collections/your-user-login-endpoint)  
  Example endpoint: `POST http://localhost:3000/api/user/login`
- [Add Ticket (POST)](https://www.postman.com/collections/your-add-ticket-endpoint)  
  Example endpoint: `POST http://localhost:3000/api/admin/addticket`

> Replace the above Postman links with your actual shared Postman collection or endpoint links if available.

---

## 🛠️ Useful Links

- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [express-validator](https://express-validator.github.io/docs/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

---

## 📦 Dependencies

See [`backend/package.json`](backend/package.json) for a full list.

---

## 📝 License

This project is licensed under the ISC License.# Movie Reservation System

A Node.js/Express backend for managing movie ticket reservations, user authentication, and admin operations.

---

## 📁 Project Structure

- [`backend/app.js`](backend/app.js) — Main Express app setup
- [`backend/server.js`](backend/server.js) — Server entry point
- [`backend/db/db.js`](backend/db/db.js) — MongoDB connection
- [`backend/model/user.model.js`](backend/model/user.model.js) — User schema/model
- [`backend/model/ticket.model.js`](backend/model/ticket.model.js) — Ticket schema/model
- [`backend/controller/user.control.js`](backend/controller/user.control.js) — User controllers
- [`backend/controller/ticket.control.js`](backend/controller/ticket.control.js) — Ticket controllers
- [`backend/service/user.service.js`](backend/service/user.service.js) — User service logic
- [`backend/service/ticket.service.js`](backend/service/ticket.service.js) — Ticket service logic
- [`backend/routes/user.route.js`](backend/routes/user.route.js) — User routes
- [`backend/routes/admin.route.js`](backend/routes/admin.route.js) — Admin routes

---

## 🚀 Getting Started

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```
3. **Configure environment variables**  
   Edit [`backend/.env`](backend/.env) with your MongoDB URI and JWT secret.

4. **Start the server**
   ```bash
   npm start
   ```

---

## 📚 API Endpoints

- **User Registration/Login:** [`backend/routes/user.route.js`](backend/routes/user.route.js)
- **Admin Ticket Management:** [`backend/routes/admin.route.js`](backend/routes/admin.route.js)

---

## 🛠️ Useful Links

- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [express-validator](https://express-validator.github.io/docs/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)

---

## 📦 Dependencies

See [`backend/package.json`](backend/package.json) for a full list.

---

## 📝 License

This project is licensed under the ISC License.