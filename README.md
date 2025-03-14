# BookRetreats Take Home Coding Task

Your task is to build a photo gallery to show off the photos for our retreats. We’ve provided a base that pulls the retreat data - your task is to implement a gallery with nice UX. We're looking for clean implementation UX wise and also code-wise (good use of components, DRY code, clean and readable, easy for other developers to grok).

Check out [this Loom](https://www.loom.com/share/ee1a64278cc8498893fa508803c2f39e) for more details

## Instructions
* Download the repo
* Add a .env file with the API_URL
* Start the app with `npm run dev`
* Go to a retreat page at http://localhost:3000/r/[slug] (you can get an example slug from the live site)
* Inspect the data in the DevTools console to get a feel of what you will work with.
* Focus on the core tasks; if you have time, look into the bonuses. We’re not even sure that the bonuses can be completed in the allocated time, so don’t sweat it if you aren’t able to finish it all. Similarly, skip a part if you get stuck on it.
* In case you need icons - they can be used with `<Icon name='' />` (check the icons.js file for available icons)
* Basic styling is set up - inspect the Tailwind config and base CSS file if you want to know more

## Rules
* Don’t add any external libraries - note that react-intersection-observer and Tailwind are already installed
* We use ChatGPT and generally are big fans of AI for building things quicker and better, but please skip it for generating code in this exercise (but feel free to ask it general questions)

## Core Tasks
1. Add a grid showing the first 4 photos
  - [ ] Include a label in the corner that can easily be customised with props (label, colour, icon)
2. Clicking on a photo will open up the full page photo gallery
  - [ ] Bonus points - animate the opening/closing with CSS only
3. Lay out the photo sections as per our site
  - [ ] Section title on the side
  - [ ] Responsive layout for tablet/mobile
  - [ ] Follow the same grid layout if you can
  - [ ] Include a close button
4. Bonus: add a navigation section on top
  - [ ] Scrolls to the clicked section
  - [ ] Recommended: set up a React Context to store the position
  - [ ] Highlights the selected section as it is scrolled into view
5. Bonus: videos
  - [ ] Use the thumbnail in the grid
  - [ ] Open the video in a modal

## Deliverables
- [ ] Code branch with regular commits
- [ ] Loom - explain the code, design decisions, trade-offs, parts that weren’t completed
- [ ] Write up anything else that you feel is good to communicate - either technical or how you felt about it
