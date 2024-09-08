# Movie Mobile App

A simple minimalistic movie mobile application that consists of a React Native frontend with Expo and a Laravel backend. 
The frontend and backend are organized into separate folders within the same GitHub repository.

**Current Status:** Dockerization in Progress
>*The project is currently undergoing dockerization.
In the process of creating Docker containers to encapsulate the development environment for both the frontend and backend components.
This will ensure a more consistent and manageable setup across different environments.*


## Table of Contents
1. [Video Demo](#video-demo)
2. [Cloning the Repository](#cloning-the-repository)
3. [Frontend Setup](#frontend-setup)
4. [Backend Setup](#backend-setup)
5. [How to Use](#how-to-use)
6. [Contributing](#contributing)

 ## Video Demo

A demo video of the project is available here: [Video Demo](https://www.youtube.com/watch?v=84TTpCyKAas)

----------------------------------------------------------------------------------------------

## Cloning the Repository

To get started with the project, clone the repository using the following command:

```bash
git clone https://github.com/MDKolev/mobile_movie_app.git
```
----------------------------------------------------------------------------------------------

## Frontend Setup

The frontend is a React Native application built with Expo. It is located in the `frontend` folder.

### Prerequisites

- Node.js (>=18.x)
- Expo CLI

### Installation

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Running the App

To start the Expo development server and run the app on Android:

```bash
npm run android
```
----------------------------------------------------------------------------------------------
## Backend Setup

The backend is a Laravel application located in the `backend` folder.

## Prerequisites

- PHP (>=8.x)
- Composer
- MySQL or another database

## Installation

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    composer install
    ```

3. Set up your environment file by copying the example:

    ```bash
    cp .env.example .env
    ```

4. Generate an application key:

    ```bash
    php artisan key:generate
    ```

5. Run migrations and seed the database (if necessary):

    ```bash
    php artisan migrate --seed
    ```

### Running the Server

To start the Laravel development server:

```bash
php artisan serve
```
----------------------------------------------------------------------------------------------

##  How To Use

## Frontend

- Open the app using Expo Go on your Android device or emulator.
- Use the app to browse movies and add movies via the backend API endpoint.

## Backend

- The backend exposes an endpoint to add movies. The endpoint is available at `http://localhost:8000/api/movies`.
- You can add movies by sending a POST request to this endpoint with the movie details.
----------------------------------------------------------------------------------------------

## Contributing

Feel free to open issues or submit pull requests for any improvements or fixes.

