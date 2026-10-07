# POTTERHEAD

A Harry Potter explorer web app. Browse all the books, spells and characters from a public API, search through them, and use it on any screen size.

**Live demo:** https://Abhinav0919.github.io/POTTERHEAD/

## Features

- Three sections: **Books**, **Spells** and **Characters**, loaded from a public REST API
- **Live search** inside each section
- **Read More / Read Less** toggle for long book descriptions
- Characters are color-coded by **Hogwarts house**
- **Loading and error messages**, so the page never goes blank if the API fails
- **Responsive design** that works on phones, tablets and desktops
- Back button to return to the home menu

## Built with

- HTML5
- CSS3 (Grid, Flexbox, CSS variables, media queries)
- JavaScript (ES6): `fetch`, `async/await`, `try/catch`, `filter`, DOM manipulation
- [Potter API](https://potterapi-fedeperin.vercel.app) for the data

## How it works

- A `fetchData()` function gets data from the API and checks for errors.
- A `views` object stores the title, API endpoint, card builder and search field for each section, so one `showView()` function handles all three.
- Each card is built by its own function (`bookCard`, `spellCard`, `characterCard`).
- The search box filters the saved list and redraws only the matching cards.

## Run it locally

1. Download or clone this repository.
2. Open `index.html` in your browser (or use the VS Code Live Server extension).

## What I learned

- Handling API errors with `try/catch` and `response.ok`
- Removing repeated code with functions and a lookup object
- Building responsive layouts with CSS Grid and media queries
- Debugging with browser DevTools

## Author<img width="1920" height="1080" alt="Screenshot (141)" src="https://github.com/user-attachments/assets/af5dbfb3-2fd0-47ee-a21c-1c7073608ec6" />
<img width="1920" height="1080" alt="Screenshot (140)" src="https://github.com/user-attachments/assets/3c460380-862f-4d26-aa5a-1479fa434eff" />
<img width="1920" height="1080" alt="Screenshot (139)" src="https://github.com/user-attachments/assets/c1dd4caf-9bf2-4174-af6b-13ba0a9faf50" />


Abhinav Pandey - [GitHub](https://github.com/Abhinav0919)
