# Capstone Project - Daily Dids Svelte-ty 2.0
#### By Brian Anderson

## Project Summary

I'm building a version 2 of daily did app - that is a tracker for what i did to keep growing per Alex's markdown.  It incorporate all 7 restful routes.  My goals for this app are
1. Responsive 
2. Track what was done
3. stopwatch like feature

## Models

![Brian's Model](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_XVi709fNrtUolF6Hl0wdM7p-XD8NbLr_Q&usqp=CAU)
Not what you were looking for?  I had just the one model.

## Route Table

Here are my routes

| url | method | action |
|-----|--------|--------|
| /dids | get | get all "dids" <b>(read)</b> |
| /dids/:_id | get | get a particular did (show) |
| /dids/new | get | show "add new" did form  (new) |
| /dids | post | add the new did to database <b>(create)</b> |
| /dids /:_id/edit| get | show form to edit existing did  (edit) |
| /dids/:_id | put | change database to update did <b>(update)</b> |
| /dids/:_id | delete | remove the did from database <b>(destroy)</b> |

## User Stories
Our user is someone who aspires to be as Gouda as Alex Merced...but skill level is fairly Cheesy. Our user needs to follow AM's advice and continue to put in the 8 hours a day to get there.  Our user will:
- add did's to the list as necessary
- add or edit did's/minutes if desired
- delete did as they want

## Components
- App.svelte
- Modal
- AllDids
- Form
- SingleDid
- Timer

## Challenges
While Svelte was fairly straight forward to learn (and i highly recommend it), This project presented some challenges.
1. _db (MongoDB) vs .db (Postgres)
2. deployment - Publish directory: build (remember npm run build...it will could save you a ton of grief)
3. errors - learning how to think through them on different framework/library (there was no js. line:289)
4. Love Svelte - have started a tutorial (thx Connor)
5. Showed me I really need to go over my JavaScript Fundamentals again.
6. Timer still not working...ran out of time on dropdown too (but closer)

## List of Technologies
- Svelte
- SvelteKit (learning)
- HTML/css
- MongoDB/Mongoose
- JS
- Express/NodeJS
- svelte.dev (bind:this for modal)
- Heroku & Netlify
- Google/YouTube/Slack/W3schools.com
