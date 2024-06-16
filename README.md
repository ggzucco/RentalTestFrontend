## Project Title: Equipment Management App
### Developed by: Guilherme Gomes Zucco

## Description:
A simple web application for managing a list of equipment, demonstrating skills in React, Node, Vite, Routes Html, CSS, TypeScrypt, Axios.

## Technologies Used:
- React
- Node
- Vite
- HTML
- CSS
- TypeScrypt
- Axios
- Routes
- Markdown
- Git

## Setup and Run Frontend React Application

1. **Download the files from Github**
2. **Using Visual Studio Code:**
   - Open the project folder
   - Open the terminal in Visual Studio Code
3. **Verify Node.js Version:**
   - Run `node --version`
   - If not version 20.xx.x, install the appropriate version
4. **Download Required Packages:**
   - Run `npm install` to download node modules
5. **Run the Application in Debug Mode:**
   - Run `npm run dev`
   - Access the frontend via `http://localhost:5173`

## Approach and Challenges, and Overcomes

For the frontend I used react because in now a day I am more familiar with this technology instead Vue, I create the application using Vite, that was developed by Evan You, the Vue’s creator, that it increases the performance of the app compared to the create-react-app. I also use Bootstrap, and Axios that are technologies that I have knowledge.  I use Enums to do the Status and Category.

Challenges, I am not too familiar to start a new project using React, my background in frontend is more from maintenance, instead of creating and configure the basis of the application. I have to consulting an app that I did last year, that in front end was simpler than the test: 2 buttons and a message, in contrast the backend was a live system to install, update or recover a Linux in an equipment. Back to the subject, so I must compare with this system and search on internet how do the thing, and for help me my internet is very slow today, due a problem in whole neighbourhood. I have to tested flexbox instead of bootstrap system grid, it works not how I would like.

## Potential Improvements

- Improve the CSS, how I mentioned, I tried to use flexbox, the usability is not too good for small screens.
- Create the components to the grid and form
- Configure the prettier 
- Do handling of responses and has a bug in the ComboBox/Selects that sometimes you select a value but it does not get the value and save as null.
- The input of RentalRate as configured as number, but I forgot that it handles just integers, not numbers with decimals.
