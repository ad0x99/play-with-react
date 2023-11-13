# Github Finder

- Github Finder allows users to search any repositories from Github and view the Github user's profile
- Tech Stacks: React, Tailwind CSS

# How to run this application

1. Install dependencies

```bash
npm install
```

2. Run the application

```bash
npm start
```

# Source Tree

- **github\-finder**

  - **public**
    - [\_redirects](public/_redirects)
    - [favicon.ico](public/favicon.ico)
    - [index.html](public/index.html)
    - [manifest.json](public/manifest.json)
    - [robots.txt](public/robots.txt)
  - **src**
    - [App.js](src/App.js)
    - **components**
      - **Layout**
        - [Alert.jsx](src/components/Layout/Alert.jsx)
        - [Footer.jsx](src/components/Layout/Footer.jsx)
        - [Navbar.jsx](src/components/Layout/Navbar.jsx)
        - [Spinner.jsx](src/components/Layout/Spinner.jsx)
      - **Repos**
        - [RepoItem.jsx](src/components/Repos/RepoItem.jsx)
        - [RepoList.jsx](src/components/Repos/RepoList.jsx)
      - **Users**
        - [UserDetail.jsx](src/components/Users/UserDetail.jsx)
        - [UserItem.jsx](src/components/Users/UserItem.jsx)
        - [UserResults.jsx](src/components/Users/UserResults.jsx)
        - [UserSearch.jsx](src/components/Users/UserSearch.jsx)
    - **context**
      - **Alert**
        - [AlertContext.js](src/context/Alert/AlertContext.js)
        - [AlertReducer.js](src/context/Alert/AlertReducer.js)
      - **GithubContext**
        - [GithubAction.js](src/context/GithubContext/GithubAction.js)
        - [GithubContext.js](src/context/GithubContext/GithubContext.js)
        - [GithubReducer.js](src/context/GithubContext/GithubReducer.js)
    - [index.css](src/index.css)
    - [index.js](src/index.js)
    - **pages**
      - [About.jsx](src/pages/About.jsx)
      - [Home.jsx](src/pages/Home.jsx)
      - [NotFound.jsx](src/pages/NotFound.jsx)
    - **utils**
      - [actionTypes.js](src/utils/actionTypes.js)
      - [config.js](src/utils/config.js)
  - [tailwind.config.js](tailwind.config.js)
