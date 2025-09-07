# 🔐 Authentication Application

A full-stack authentication application built with React.js frontend and Node.js/Express backend, featuring user registration, login, and profile management with JWT authentication.

## 🚀 Features

- **User Registration**: Create new accounts with name, email, and password
- **User Login**: Secure authentication with email and password
- **JWT Authentication**: Token-based authentication for secure sessions
- **Profile Management**: View user profile information
- **Password Hashing**: Secure password storage using bcrypt
- **Protected Routes**: Dashboard access only for authenticated users
- **Responsive Design**: Modern UI with custom styling
- **Session Management**: Automatic logout and token expiration handling

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **js-cookie** - Cookie management
- **Custom CSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **SQLite3** - Database
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Loginpage/
│   │   │   ├── Registerpage/
│   │   │   └── Dashboard/
│   │   ├── App.js
│   │   └── App.css
│   ├── package.json
│   └── public/
└── backend/
    ├── server.js
    ├── klickks.db
    |__app.http
    └── package.json
```

## ⚡ Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create SQLite database**
   Create `klickks.db` file or let the application create it automatically on first run.

4. **Create user table**
   ```sql
   CREATE TABLE IF NOT EXISTS usertable (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       email TEXT UNIQUE NOT NULL,
       password TEXT NOT NULL
   );
   ```

5. **Start the server**
   ```bash
   node server.js
   ```
   Server will run on `http://localhost:3000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   Application will open at `http://localhost:3000` (Note: Backend runs on port 3000, so frontend will use a different port)

## 🔌 API Endpoints

### Authentication Routes

#### Register User
```http
POST /register
Content-Type: application/json

{
  "name": "suresh",
    "email": "sureshnayak6695@gmail.com",
    "password": "Surya@413"
}
```

**Response:**
- `201` - User created successfully
- `400` - Email already registered

#### Login User
```http
POST /login
Content-Type: application/json

{

    "email": "sureshnayak6695@gmail.com",
    "password": "Surya@413"
}
```

**Response:**
- `200` - Returns JWT token
- `400` - Invalid credentials

#### Get Profile
```http
GET /profile
Authorization: Bearer <jwt_token>
```

**Response:**
- `200` - Returns user profile data
- `401` - Unauthorized
- `404` - User not found

## 🔒 Authentication Flow

1. **Registration**: User creates account with name, email, and password
2. **Password Hashing**: Password is hashed using bcrypt before storage
3. **Login**: User authenticates with email and password
4. **Token Generation**: JWT token is generated upon successful login
5. **Token Storage**: Token is stored in browser cookies
6. **Protected Access**: Token is included in requests to protected routes
7. **Profile Access**: Authenticated users can access dashboard and profile

## 🎨 Frontend Components

### LoginPage
- Email and password authentication
- Social login buttons (UI only)
- Error handling and validation
- Automatic redirection after login

### RegisterPage
- User registration form
- Form validation
- Success/error messaging
- Navigation to login page

### Dashboard
- Protected route requiring authentication
- User profile display
- Logout functionality
- Quick navigation links

## 🔐 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication with 1-hour expiration
- **Protected Routes**: Middleware authentication for sensitive endpoints
- **Input Validation**: Server-side validation for all user inputs
- **CORS Configuration**: Proper cross-origin request handling

## 🗄️ Database Schema

### usertable
```sql
CREATE TABLE usertable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);
```

## 🚀 Deployment

### Backend Deployment
1. Set up production database
2. Configure environment variables
3. Update JWT secret
4. Deploy to hosting service (Heroku, Railway, etc.)

### Frontend Deployment
1. Update API endpoints for production
2. Build the application: `npm run build`
3. Deploy to static hosting (Netlify, Vercel, etc.)

## 📋 Environment Variables

Create `.env` file in backend directory:
```env
PORT=3000
JWT_SECRET=your-secret-key
DB_PATH=./klickks.db
```

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure SQLite database file exists
   - Check file permissions

2. **JWT Token Issues**
   - Verify token is being sent in Authorization header
   - Check token expiration

3. **CORS Errors**
   - Ensure CORS is properly configured
   - Check frontend and backend URLs

4. **Login/Register Failures**
   - Verify API endpoints are correct
   - Check network requests in browser dev tools

## 📝 TODO / Future Enhancements

- [ ] Add email verification
- [ ] Implement password reset functionality
- [ ] Add OAuth integration (Google, GitHub)
- [ ] Enhanced form validation
- [ ] User profile editing
- [ ] Admin dashboard
- [ ] Rate limiting for API endpoints
- [ ] Refresh token implementation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Created with ❤️ by Suresh

---

**Need help?** Open an issue or contact sureshnayak6695@gmail.com
