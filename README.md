# Interview_front

## Specs for this project:
- You should have a UI that display more than one soldier.
- The elements that should be visible: 
    -Image of Soldier
    - Name
    - Rank
    - Rank by date
    - Provide an input per solider to allow us to promote solider to new rank
    - provide real time feedback to the UI.


## Technologies: MERN stack
 - used Postman to test the CRUD routes
 - looking for pre-built components on reactjsexample.com and from Bootstrap 4.
 - dependencies used in front-end:
    - "moment": "^2.27.0",
    - "react": "^16.13.1",
    - "react-dom": "^16.13.1",
    - "react-router-dom": "^5.2.0",
    - "react-scripts": "3.4.3",
    - "usa-states": "0.0.5"
 - dependencies used in the back-end:
    - "body-parser": "^1.19.0",
    - "cors": "^2.8.5",
    - "express": "^4.17.1",
    - "mongoose": "^5.10.2"


# Notes

### Setting up AWS
- tutorial was helpful from https://jasonwatmore.com/post/2019/11/18/react-nodejs-on-aws-how-to-deploy-a-mern-stack-app-to-amazon-ec2

    - blocker: ran into difficulties trying to install node because I didn't have nvm - node version manager... it would give me these errors:

    - Populating apt-get cache...

    + apt-get update
    bash: apt-get: command not found
    Error executing command, exiting
    sudo: apt-get: command not found

    - found a solution on stackoverflow: https://stackoverflow.com/questions/53582878/aws-ec2-sudo-apt-get-command-not-found-error

    but found that upon implementation I could install Node but the other packages were requiring "yum" instead of apt-get in curl requests.  Also, tried to use npm install [dependency-name] but that wouldn't work either.  Because of time I switched to designing and implementing app components in Github on localhost instead of trying to build in the aws environment for now.  Will readdress the issure if I have time.

### Mock-ups for app
    - Though the project is not final, this is a visual representation of my thinking and direction for task:
    
    - Home Page     
   ![Screen Shot 2020-09-03 at 9 15 24 AM](https://user-images.githubusercontent.com/57571847/92123216-5f85c380-edca-11ea-886e-ed113e0ad2a0.png)
   
    - Client Page
   ![Screen Shot 2020-09-03 at 9 15 46 AM](https://user-images.githubusercontent.com/57571847/92124992-76c5b080-edcc-11ea-8144-c88e2742dcb4.png)
   
    - Update Page
   ![Screen Shot 2020-09-03 at 9 22 16 AM](https://user-images.githubusercontent.com/57571847/92125011-7c22fb00-edcc-11ea-8b80-502886b9519e.png)


### Features to be built still:
- Search functions for the index by name and by rank
- rank dropdowns need to be added to rank search and on soldier page
- save button functionality and ternary need to be added for the rank to be updated
- ability to record notes and update to UI
- authorizations

### Other
- this exercise was fun to think through, it took way longer in the aws space than I have experienced in other spaces like heroku and github pages...
- I am pleased with my progress b/c in school our projects would have been over a weeks time and so for me in this time-frame I feel like I have accomplished much
- tried to deploy in Heroku but MongoDB acquired mLab and created MongoDB Atlas.  You can no longer add-on mlab as a CMS. Found a possible route with Strapi, an open-source, Node. js based, headless CMS. 
- deploying docs: https://strapi.io/documentation/3.0.0-beta.x/guides/databases.html#mongodb-installation
- tutorial on: https://youtu.be/HHnRsZwFmR8
- could use object rocket at a cost of $46 monthly...not gonna happen