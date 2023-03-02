# Preview

- To see deployed version of this project, please [click me](https://uniqlo-clothing.netlify.app/)

# How to run the application

1. Install Dependencies

```bash
yarn install
```

2. Config your ENV variables

- In this project, I'm using [Infisical](https://infisical.com/) to manage my environment variables. But you can use `.env` file as usual.

- To get your environment value, create your firebase project, then create a firebase app. Then you can find the configuration
- To get the stripe payment service key, you have to sign up for stripe account, then you can get the test mode public key and private key
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
REACT_APP_STRIPE_PUBLIC_KEY=
REACT_APP_STRIPE_SECRET_KEY=
```

3. Start the application

- As I said, I'm using [Infisical](https://infisical.com/) to manage my environment so I have changed my `start` script to `infisical run -- react-scripts start`, but if you're using `.env` file, please replace `start` script in package.json file to the default one `react-scripts start`
- Then start application

```bash
yarn start
```

# Source Tree

- **netlify**

  - **functions**
    - [create\-payment\-intent.js](netlify/functions/create-payment-intent.js)

- **public**
  - [\_redirects](public/_redirects)
  - [favicon.ico](public/favicon.ico)
  - [index.html](public/index.html)
  - [logo\-128.png](public/logo-128.png)
  - [logo\-512.png](public/logo-512.png)
  - [manifest.json](public/manifest.json)
- **src**
  - [App.js](src/App.js)
  - [App.test.js](src/App.test.js)
  - **assets**
    - [cart.svg](src/assets/cart.svg)
    - **img**
    - [uniqlo.svg](src/assets/uniqlo.svg)
  - **components**
    - **Button**
      - [Button.component.tsx](src/components/Button/Button.component.tsx)
      - [Button.styles.tsx](src/components/Button/Button.styles.tsx)
    - **CartDropDown**
      - [CartDropDown.component.tsx](src/components/CartDropDown/CartDropDown.component.tsx)
      - [CartDropDown.styles.tsx](src/components/CartDropDown/CartDropDown.styles.tsx)
    - **CartIcon**
      - [CartIcon.component.tsx](src/components/CartIcon/CartIcon.component.tsx)
      - [CartIcon.styles.tsx](src/components/CartIcon/CartIcon.styles.tsx)
    - **CartItem**
      - [CartItem.component.tsx](src/components/CartItem/CartItem.component.tsx)
      - [CartItem.styles.tsx](src/components/CartItem/CartItem.styles.tsx)
    - **CategoryPreview**
      - [CategoryPreview.component.tsx](src/components/CategoryPreview/CategoryPreview.component.tsx)
      - [CategoryPreview.styles.tsx](src/components/CategoryPreview/CategoryPreview.styles.tsx)
    - **CheckoutItem**
      - [CheckoutItem.component.tsx](src/components/CheckoutItem/CheckoutItem.component.tsx)
      - [CheckoutItem.styles.tsx](src/components/CheckoutItem/CheckoutItem.styles.tsx)
    - **Directory**
      - [Directory.component.tsx](src/components/Directory/Directory.component.tsx)
      - [Directory.styles.tsx](src/components/Directory/Directory.styles.tsx)
    - **DirectoryItem**
      - [DirectoryItem.component.tsx](src/components/DirectoryItem/DirectoryItem.component.tsx)
      - [DirectoryItem.styles.tsx](src/components/DirectoryItem/DirectoryItem.styles.tsx)
    - **FormInput**
      - [FormInput.component.tsx](src/components/FormInput/FormInput.component.tsx)
      - [FormInput.styles.tsx](src/components/FormInput/FormInput.styles.tsx)
    - **PaymentForm**
      - [PaymentForm.component.tsx](src/components/PaymentForm/PaymentForm.component.tsx)
      - [PaymentForm.styles.tsx](src/components/PaymentForm/PaymentForm.styles.tsx)
    - **ProductCard**
      - [ProductCard.component.tsx](src/components/ProductCard/ProductCard.component.tsx)
      - [ProductCard.styles.tsx](src/components/ProductCard/ProductCard.styles.tsx)
    - **SignIn**
      - [SignInForm.component.tsx](src/components/SignIn/SignInForm.component.tsx)
      - [SignInForm.styles.tsx](src/components/SignIn/SignInForm.styles.tsx)
    - **SignUp**
      - [SignUpForm.component.tsx](src/components/SignUp/SignUpForm.component.tsx)
      - [SignUpForm.styles.tsx](src/components/SignUp/SignUpForm.styles.tsx)
    - **Spinner**
      - [Spinner.component.tsx](src/components/Spinner/Spinner.component.tsx)
      - [Spinner.styles.tsx](src/components/Spinner/Spinner.styles.tsx)
  - [custom.d.ts](src/custom.d.ts)
  - **data**
    - [categories.ts](src/data/categories.ts)
    - [migrateDataToFirestore.ts](src/data/migrateDataToFirestore.ts)
    - [shop\-data.ts](src/data/shop-data.ts)
  - [global.styles.js](src/global.styles.js)
  - [index.js](src/index.js)
  - [react\-app\-env.d.ts](src/react-app-env.d.ts)
  - [reportWebVitals.ts](src/reportWebVitals.ts)
  - **routes**
    - **Authentication**
      - [Authentication.component.jsx](src/routes/Authentication/Authentication.component.jsx)
      - [Authentication.styles.scss](src/routes/Authentication/Authentication.styles.scss)
    - **CategoriesPreview**
      - [CategoriesPreview.component.jsx](src/routes/CategoriesPreview/CategoriesPreview.component.jsx)
    - **Category**
      - [Category.component.tsx](src/routes/Category/Category.component.tsx)
      - [Category.styles.tsx](src/routes/Category/Category.styles.tsx)
    - **Checkout**
      - [Checkout.component.tsx](src/routes/Checkout/Checkout.component.tsx)
      - [Checkout.styles.tsx](src/routes/Checkout/Checkout.styles.tsx)
    - **Home**
      - [Home.component.tsx](src/routes/Home/Home.component.tsx)
    - **Navigation**
      - [Navigation.component.tsx](src/routes/Navigation/Navigation.component.tsx)
      - [Navigation.styles.tsx](src/routes/Navigation/Navigation.styles.tsx)
    - **Shop**
      - [Shop.component.tsx](src/routes/Shop/Shop.component.tsx)
  - [service\-worker.ts](src/service-worker.ts)
  - [serviceWorkerRegistration.ts](src/serviceWorkerRegistration.ts)
  - [setupTests.js](src/setupTests.js)
  - **store**
    - **cart**
      - [cart.action.ts](src/store/cart/cart.action.ts)
      - [cart.reducer.ts](src/store/cart/cart.reducer.ts)
      - [cart.selector.ts](src/store/cart/cart.selector.ts)
      - [cart.types.ts](src/store/cart/cart.types.ts)
    - **categories**
      - [category.action.ts](src/store/categories/category.action.ts)
      - [category.reducer.ts](src/store/categories/category.reducer.ts)
      - [category.saga.ts](src/store/categories/category.saga.ts)
      - [category.selector.ts](src/store/categories/category.selector.ts)
      - [category.types.ts](src/store/categories/category.types.ts)
    - [rootReducer.ts](src/store/rootReducer.ts)
    - [rootSaga.ts](src/store/rootSaga.ts)
    - [store.ts](src/store/store.ts)
    - **user**
      - [user.action.ts](src/store/user/user.action.ts)
      - [user.reducer.ts](src/store/user/user.reducer.ts)
      - [user.saga.ts](src/store/user/user.saga.ts)
      - [user.selector.ts](src/store/user/user.selector.ts)
      - [user.types.ts](src/store/user/user.types.ts)
  - **utils**
    - **Constants**
      - [form.constant.ts](src/utils/Constants/form.constant.ts)
    - **Error**
      - [authenticationError.utils.ts](src/utils/Error/authenticationError.utils.ts)
    - **Logger**
      - [custom.logger.ts](src/utils/Logger/custom.logger.ts)
    - **firebase**
      - [firebase.utils.ts](src/utils/firebase/firebase.utils.ts)
      - [product.utils.ts](src/utils/firebase/product.utils.ts)
    - **reducer**
      - [reducer.utils.ts](src/utils/reducer/reducer.utils.ts)
    - **stripe**
      - [stripe.utils.ts](src/utils/stripe/stripe.utils.ts)
- [tsconfig.json](tsconfig.json)
- [yarn.lock](yarn.lock)
