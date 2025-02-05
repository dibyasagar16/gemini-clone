# Gemini Clone

This is a Gemini Clone built using **Vite + React**. The project fetches and displays data using the Gemini API, providing a user-friendly interface with fast, optimized performance.

## Features

- **Optimized Development with Vite:** Benefit from Vite's fast build and hot module replacement.
- **API Integration:** Fetches data from the Gemini API.
- **Responsive UI:** Designed to work on multiple devices.
- **Component-Based Architecture:** Modular code structure for scalability and ease of maintenance.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/gemini-clone.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd gemini-clone
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

## Setting Up Environment Variables

1. **Install `dotenv` (if not already installed):**
   ```sh
   npm install dotenv
   ```
2. **Create a `.env` file in the root directory and add your Gemini API key:**

   ```sh
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

   **Note:** Do not use quotes around the key value.

3. **Ensure your `.gitignore` file includes `.env` to prevent committing sensitive data:**

   ```sh
   echo ".env" >> .gitignore
   ```

4. **Centralize the API Key Usage:**

   - **Create a configuration file:**  
     Create a file named `config.js` in the `src/utils` folder.
     ```js
     // src/utils/config.js
     export const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
     ```
   - **Import the API key in your components:**  
     For example, in a component where you need to make API calls:

     ```js
     import { API_KEY } from "../utils/config";

     const fetchData = async () => {
       const apiUrl = `https://api.gemini.com/data?key=${API_KEY}`;
       const response = await fetch(apiUrl);
       const data = await response.json();
       // Process the data as needed...
     };
     ```

## Running the Project

Start the development server:

```sh
npm run dev
```

## Building for Production

To create a production build, run:

```sh
npm run build
```

## Deployment

You can deploy the production build using any static site hosting service such as Netlify, Vercel, or GitHub Pages. The build output will be located in the `dist` directory.

## Contributing

Feel free to fork this repository and submit pull requests with any improvements or bug fixes.

## License

This project is licensed under the MIT License.
