# Final report :clipboard:

## Introduction :woman_technologist: :smile:

Hello, I am building a storybook CRUD (Create, Read, Update, Delete) app :books: for storybook lovers. Why? So others can share stories to the storybook community. So creative writers can explore and note down their ideas of stories in a secure way.

## Project scope :computer:

This will not be a game app. The scope is to make this app accessible for anyone who enjoys a good read, loves creative writing or simple wants to upload written storybook ideas using CRUD. The main features will include ability to create and save the coontent, read the content to as many as possible, update and delete ownership only by the user.

It can also be used as a note pad if anyone wants to note things down in a secure way with complete ownership.

## Project plan :bookmark_tabs:

- Structure of sprints will be 2 weeks to give enough time.
- Plan:
  - Research ideas for different apps.
  - Image drawing of the minimum viable product (MVP) for the app.
  - Choose tech stack to use for the app.
  - Create user stories for the app on the GitHub Kanban board.
  - Ensure each user story has a adequate fulfilment criteria for completeness.
- Technical design and order to build will be:
  - Backend server first, then html rendered views templates, authorisation
  - Non-relational database connection, following the CRUD flow in a mobile version first approach
  - Self hosted locally then deploying to a platform-as-a-service on Heroku
  - Frontend CSS styles whilst testing each feature.
- User research informed the structure of my plan and the most convenient of that time.

## Requirement analysis :memo::pencil:

- Ensure accessibility via Chrome dev tools Lighthouse generated report to ensure accessiblity.
- Mobile responsiveness on different models using browerstack and `https://webaim.org/resources/contrastchecker/` for colour contrast.
- Performing user research and feedback during the process of the app, checking aria-label attributes for screen readers to ensure the app is accessible to as many people as possible.
- Checking legal or regulatory requirements on `Google Cloud Platform Console OAuth API verifications` to ensure user data complies when creating Google login feature on app.

## Project learnings :mag_right: :information_source: :books:

- I worked well on this project using the time I had effectively.
- Creating user stories on the GitHub Kanban board maintained focus on each feature to be completed which was a positive.
- What I would do differently is ensure testing is performed more in sync with the creation and completeness of each feature.

## Research and findings :chart_with_upwards_trend: :chart_with_downwards_trend:

- Learnings were Cypress does not effectively support testing Google OAuth as it persistently throws Cross Origin Errors
- Testing each feature during creation would decrease amount of time spent on testing google oauth
- Heroku H10 errors include spacing bug in procfile, missing required scripts and checking PORT set as environment variables

## Project outcomes :bar_chart:

- My assumptions were sometimes right however sometimes they were completely wrong and had to investigate further to see how the answer was wrong.

## Recommendations and conclusions :white_check_mark:

- Sign up alongside the login is a feature I would prioritise to build next time.
- I believe the project app was a success as it works :partying_face: 

## Software Development Lifecycle stages :arrows_counterclockwise:

- All stages were covered.