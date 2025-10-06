# Universal Soft Lab Website

A comprehensive website for Universal Soft Lab, a leading software development company with 18 years of experience.

## Features

- **About Page**: Company information, mission, vision, and technical expertise
- **Services Page**: Comprehensive list of development services and technologies
- **Products Page**: Existing and new software products across various industries
- **Team Page**: Meet our talented team members and departments
- **Contact Page**: Enhanced contact form with email functionality
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Email Integration**: Contact form sends emails to company and auto-replies to customers

## Technologies Used

- React 19
- React Router DOM
- Tailwind CSS
- React Icons
- Node.js (Backend)
- Express.js
- Nodemailer (Email service)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/universalsoftlab/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
Create a `.env` file in the root directory:
```
EMAIL_USER=info@universalsoftlab.com
EMAIL_PASS=USL_INFO*1234#*#
```

## Running the Application

### Development Mode
To run both frontend and backend simultaneously:
```bash
npm run dev
```

### Frontend Only
To run only the React development server:
```bash
npm start
```

### Backend Only
To run only the email server:
```bash
npm run server
```

### Production Build
To build the application for production:
```bash
npm run build
```

## Project Structure

```
src/
├── componenet/
│   ├── About.js          # About page component
│   ├── Services.js        # Services page component
│   ├── Products.js        # Products page component
│   ├── Team.js           # Team page component
│   ├── Contect.js        # Contact page component
│   ├── Home.js           # Home page component
│   ├── Navbar.js         # Navigation component
│   └── Footer.js         # Footer component
├── App.js                # Main app component with routing
├── App.css               # Global styles
└── index.js              # Entry point

server.js                 # Email backend server
package.json              # Dependencies and scripts
```

## Email Configuration

The contact form uses Nodemailer to send emails. The configuration is set up in `server.js`:

- **Company Email**: info@universalsoftlab.com
- **Auto-reply**: Sends confirmation email to customers
- **Email Service**: Gmail (configurable)

## Company Information

- **Name**: Universal Soft Lab
- **Address**: 13, Press Complex, Apni Duniya Press Campus, Behind Dainik Bhaskar, A.B. Road, Indore - 452010
- **Phone**: +91 83588 111 00
- **Email**: info@universalsoftlab.com
- **Experience**: 18+ years in software development

## Services Offered

- Desktop Application Development (C#, .NET)
- Web Development (React, MVC, CodeIgniter)
- Mobile App Development (React Native, Flutter)
- Database Solutions (MSSQL, PostgreSQL, MongoDB)
- Cloud Solutions (AWS, Azure)
- ERP Solutions
- Banking & Finance Software
- Hospital Management Systems

## Products

### Existing Products
- Banking Application for MFI
- COSMOS - Credit Cooperative Society Software
- ERP Solutions for Cotton Industry
- Hospital Management Application

### New Products
- E-Commerce Platform
- Business Intelligence Suite
- Cybersecurity Solutions
- Cloud Migration Services
- Learning Management System
- Property Management System
- Logistics Management System
- IoT Platform

## Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run server
```

The application will be available at `http://localhost:5000`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

© 2025 Universal Soft Lab. All rights reserved.