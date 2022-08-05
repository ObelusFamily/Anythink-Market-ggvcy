# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_

1. Install docker by going following the instructions for your operating system here https://docs.docker.com/get-docker/
    a. If using Linux, you can also intstall the non-desktop version and install individuals components by following instructions here https://docs.docker.com/engine/install/ubuntu/#install-from-a-package
    b. If using Linux, then you can add your user to the docker usergroup to use docker without using sudo by following this instructions https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user

2. Once you installed docker, make sure everything is install correctly by running the following commands:
    a. ```docker -v```
    b. ```docker compose version```

3. Run ```docker compose up``` from the project root directory to load Anythink's backend and frontend.

4. Test that that the backend is up and running by visiting http://localhost:3000/api/ping in your browser.

5. Check the frontend and up and working by creating a new user on http://localhost:3001/register
