# Foofle
> A simple search engine to display web pages, news, images and videos based on user input with option for light or dark mode theme. 

## Description 
This responsive application was built using React best practices while utilizing React Context for API state management. Tailwind CSS was implemented to create the UI with an optional dark mode theme. Data was fetched using [Google Search API](https://developers.google.com/custom-search/). 

Feel free to see a live demo [here.](https://zen-raman-c9a195.netlify.app/search)

## Installation
1. Fork/Clone this repository. 
2. Run `npm install` to install all project dependencies. 
3. Run `npm start` to launch project locally. 

## Screenshots and Details 
**Homepage**
- The homepage is displayed at `/` route.
- A home icon and search bar is displayed at the top left of the page for a user to go back to home with an adjacent search bar. 
- A button to toggle between dark or light mode is placed at the top right of the page. 


https://user-images.githubusercontent.com/87205105/158073051-2c0518b7-9a40-425d-9bac-d68f6b784ed7.mp4



**Search**
- The search page is displayed at `/search` after the user makes a search request. 
- Web page results fetched from the API will be displayed as links. 

<img width="1071" alt="foofle_search" src="https://user-images.githubusercontent.com/87205105/158073054-b5e84248-4ce8-4ca0-87fa-4fec5756d252.PNG">

**Images** 
- The image page is displayed at `/images` after the user makes a search request and navigates to the image link or route. 
- Image results fetched from the API will be displayed as images. 

<img width="1076" alt="foofle_images" src="https://user-images.githubusercontent.com/87205105/158073073-68e42de6-c4b6-4666-9e66-86d9cd734f72.PNG">


**News**
- The news page is displayed at `/news` after the user makes a search request and navigates to the news link or route. 
- News results fetched from the API will be displayed as links.

<img width="1074" alt="foofle_news" src="https://user-images.githubusercontent.com/87205105/158073081-e67b5b8d-d901-489a-8f0a-94d7447c42e9.PNG">


**Videos**
- The videos page is displayed at `/videos` after the user makes a search request and navigates to the videos link or route. 
- Video results fetched from the API will be displayed as videos. 

<img width="1074" alt="foofle_videos" src="https://user-images.githubusercontent.com/87205105/158073089-ecf9cb89-adc3-4d69-8dfd-40806d232e58.PNG">


## Comments
The focus on this project was to be more familiar with the useContext hook for state management and API fetching. I was curious to know how it differs from Redux and I enjoyed the simplicity of the built in hook as it took less lines of code and in this case, did not need a reducer. This is also the first project where I implemented a dark mode with the help of Tailwind CSS which was also a very simple take. Although the UI is fairly simple, I wanted to focus more on data fetching and writing clean code with comments for me to refer back to. 

## Technology and Tools

React, Context API, useDebounce hook, Tailwind CSS, JavaScript, HTML, CSS, react-player, react-loader-spinner

**Deployed on Netlify** 



