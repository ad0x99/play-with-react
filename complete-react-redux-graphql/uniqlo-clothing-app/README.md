# How to run the application

1. Install Dependencies

```bash
yarn install
```

2. Config your ENV variables

- In this project, I'm using [Infisical](https://infisical.com/) to manage my environment variables. But you can use `.env` file as usual.

- To get your environment value, create your firebase project, then create a firebase app. Then you can find the configuration
- Add your own configuration to env variables as below. (Don't replace the existing ones)

```JSON
REACT_APP_ENVIRONMENT=dev
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_CATEGORIES_NAME=categories
REACT_APP_FIREBASE_HOME_CATEGORIES_NAME=homeCategories
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
```

3. Start the application

- As I said, I'm using [Infisical](https://infisical.com/) to manage my environment so I have changed my `start` script to `infisical run -- react-scripts start`, but if you're using `.env` file, please replace `start` script in package.json file to the default one `react-scripts start`
- Then start application

```bash
yarn start
```
