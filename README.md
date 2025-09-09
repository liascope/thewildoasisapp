 The Wild Oasis - App

The Wild Oasis is a modern Single Page Application (SPA) built with React.js, using Supabase for database management and user authentication/authorization. The app leverages React Query for data fetching and caching, Styled Components for styling, and Vite for fast development and build processes.

 Features

* Single Page Application (SPA)** using React.js and Vite
* User Authentication & Authorization** via Supabase
* Database management** with Supabase
* Data fetching and caching** using React Query
* Component-based styling** with Styled Components

 Demo Login

You can try the app using the following demo account:

Email: liascope@example.com
Password: pass0987

> Note: This is a demo account. Any changes in the app will be saved to the database.

 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/liascope/thewildoasisapp.git
   cd the-wild-oasis
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:

   ```
   http://localhost:5173
   ```

 Technology Stack

| Technology        | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| React.js          | Frontend framework                              |
| Vite              | Development and build tool                      |
| Supabase          | Backend-as-a-Service (database, authentication) |
| React Query       | Data fetching and caching                       |
| Styled Components | Component-level styling                         |

 Authentication & Authorization

* Only authenticated users can access certain pages.
* Supabase manages sessions and database-level authorization.
* React Query ensures efficient fetching and caching of data.

 Contributing

Contributions are welcome! Please fork the repository, create a branch, and submit a pull request.

 License

MIT License

