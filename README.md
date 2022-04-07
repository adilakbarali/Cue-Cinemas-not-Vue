# QA Team Project - QA Cinemas - Team 3

(22JanSoftware1)

This project was undertaken to meet the specification underlined by QA as part of training. The project requires the design and development of a MERN stack for the purpose of a Cinema chains' Website. This requires two seperate applications running through Node.js, being the React front-end and the Express Middleware/Backend. These are then linked to an instance of MongoDB, in this case Atlas for a cloud instance. A handful of documentation is also provided regarding certain design aspects.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Below is a list of applications/tools required to both run and develop this project.

```
- Node.js (https://nodejs.org/en/download/)
Guides for installation of this are found on the same page (https://nodejs.org/en/download/).

- Visual Studio Code (https://code.visualstudio.com/)
Guides for installation are provided automatically upon clicking download.

- (Optional) Postman (https://www.postman.com/downloads/)
Web version is also available through the same link. This is optional for testing additional API endpoints added to the Express side of the application.

- (Optional) MongoDB Community Server (https://www.mongodb.com/try/download/community)
This is only required if you prefer to run a local instance of the database rather than connecting to a cloud instance (Atlas MongoDB).
```

### Installing

Cloning repository, Opening in VS Code and Updating local modules:
To clone a repository, run the following command in a Git Bash or Terminal, ensuring you are in a suitable location for the folder to be cloned to.

```
git clone https://github.com/adilakbarali/Cue-Cinemas-not-Vue.git
```

Once the repository has successfully cloned, we can open this in VS Code by running the following command:

```
code .
```

From here you can either resume using an external Git Bash, or open Git Bash inside VS Code (https://www.geeksforgeeks.org/how-to-integrate-git-bash-with-visual-studio-code/)

Once in VS Code, you will need to modify the files located in [new-api/connections/](new-api/connections/)
Both these files point to our AtlasDB Cluster, with the [mainConnect.js](new-api/connections/mainConnect.js) file pointing to the Main database, and [testConnect.js](new-api/connections/testConnect.js) file pointing to the Test database.

For the schemas required in the MongoDB databases, please check the [models folder.](new-api/models/)

Assuming we use the external Git Bash, to download/update the local modules run the following:

```
cd Cue-Cinemas-not-Vue/new-api/
npm install
cd ..
cd cue-cinemas-not-vue/
npm install
```

At this point you will need an additional Git Bash. If you followed the above commands in the given order, navigate to the new-api/ folder on the new Git Bash. On both Git Bash terminals, run the following command:

```
npm start
```

Provided this is done in both application locations, both the backend/middleware and frontend should be running, and your default browser should launch into localhost:3000

## Running the tests

Ensure you have configured your pointers for the [mainConnect.js](new-api/connections/mainConnect.js) and [testConnect.js](new-api/connections/testConnect.js) files, as the tests will delete all the entries inside the database, so this should point at a test database.

Once this has all been configured, open a Git Bash and navigate to new-api/ and run the following:

```
npm test
```

If these all pass successfully (12 Passing), your pointers have been set up correctly.

### Checking coverage

To run the coverage tests, navigate to new-api/ and run the following in a git bash:

```
npm run coverage
```

Upon success, you should be presented with a table showing the coverage of the various files within the API folder.

## Authors

- **Adil Akbarali** - _Product Owner & Developer_ - [adilakbarali](https://github.com/adilakbarali)
- **Tayab Khan** - _Scrum Master & Developer_ - [TayabKhan420](https://github.com/TayabKhan420)
- **Conor Kelly** - _Developer_ - [conkels](https://github.com/conkels)
- **Jamie Orr** - _Developer_ - [JozzaOzza](https://github.com/JozzaOzza)
- **Kiera Hegarty** - _Developer_ - [Kiera-Hegarty](https://github.com/Kiera-Hegarty)

## Acknowledgments

- Thank you to [Jordan Harrison](https://github.com/JHarry444) and [Reece Elder](https://github.com/Reece-elder) for amazing training on Node.js, React, Express & MongoDB, as well as their help provided throughout the project
