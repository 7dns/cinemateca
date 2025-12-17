# Cinemateca

A comprehensive web application for browsing and managing a movie catalog with full CRUD functionality for movies and actors.

This project was developed over a period of three months by three students ([Alejandro](https://github.com/AlejandroGS47), [Farina](https://github.com/frinnana) and [Felix](https://github.com/7dns)) as part of the thrid semester module "Web Fundamentals" in the Bachlor's program Software Engineering at Ray Juan Carlos University, Madrid, Spain.

The project involved creating  a full-stack web application (Node.js, MongoDB, Bootstrap) that manages two related entities with full CRUD operations, image uploads, and search/filter capabilities.

![image](documentation/screenshots/home.png "Home page")
![image](documentation/screenshots/movieDetail.png "Movie detail page")
![image](documentation/screenshots/actorDetail.png "Actor detail page")
![image](documentation/screenshots/movieForm.png "Form to edit/add a movie")

## How to Install and Run Cinemateca

### Prerequisites
- Node.js 22.15.1 or higher
- MongoDB 8.2.1 or higher (running on `localhost:27017`)

### Installation

```bash
git clone https://github.com/7dns/cinemateca.git
cd cinemateca
npm install
npm start
```

Navigate to `http://localhost:3000` in your browser.

## Features

### Core Functionality
- **Movie Catalog**: Browse movies with infinite scroll pagination
- **Real-time Search**: Search movies by title as you type
- **Advanced Filtering**: Filter by genre, country, and age rating (multiple selections supported)
- **Sorting Options**: Sort by title or release date (ascending/descending)
- **Full CRUD Operations**: Create, read, update, and delete both movies and actors
- **Image Management**: Upload and preview posters/portraits with drag-and-drop support
- **Dynamic Forms**: AJAX-based forms with client and server-side validation
- **Actor Management**: Add, edit, and remove actors directly from movie detail pages

### User Experience
- **Inline Editing**: Create and edit actors without leaving the movie detail page
- **Modal Feedback**: Success/error messages displayed in Bootstrap modals
- **Confirmation Dialogs**: Prevent accidental deletions with confirmation modals
- **Loading Indicators**: Visual feedback during async operations
- **Responsive Design**: Mobile-friendly layout using Bootstrap

## Architecture

### Tech Stack
- **Backend**: Node.js with Express 5.1.0
- **Database**: MongoDB 7.0.0
- **Templating**: Mustache Express 1.3.2
- **Frontend**: Bootstrap 5, Vanilla JavaScript
- **File Upload**: Multer 2.0.2

## Data Model

![image](documentation/uml/uml_entities_v03.png "UML diagram")

**Movie** (Primary Entity)
* title,
* unique ID (slug),
* poster (image file),
* description,
* genre,
* release date,
* country of production,
* age rating,
* associated actors with roles

**Actor** (Secondary Entity)
* name,
* unique ID (slug),
* portrait (image file),
* date of birth,
* place of birth,
* description