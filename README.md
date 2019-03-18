<p align="center">
  <a href='https://www.omise.co'>
    <img src="https://cdn.omise.co/assets/omise-logo/omise-wordmark.png" width="300" />
  </a>
</p>
<br />


**Tamboon React** is a code challenge for GO.X frontend developer.

## Scenario
Once upon a time.. nope!  
So here, you have been temporarily hired by Omise and assigned to work on the charity donation project which the previously assigned front-end developer and designer got the urgent matters to solve, so they will not be able to finish the project on time..

Fortunately, the API server is already done. You will need to grab on the requirements and complete the project while ensuring the application to have great engineering and well-design ✨

![tamboon-react-screenshot](https://git.omise.co/storage/user/56/files/b407c6c4-ad09-11e7-8792-dc5b468333df)

## Mission
Well, grap your guns, stock up your food and bring down your armor. We gonna need it for tonight!  
**Here are the tasks you must complete:**

- [ ] Complete the application according to the design (image above).
- [ ] Complete these features that are not in the design (you have freedom to design and position to display).
  - Display all donation amount.
  - Display a message when paid.
- [ ] Make the donation feature works correctly.
  - Amount in all donations should be displayed correctly despite users close and come back later.
  - Database (db.json) should have the new valid data when paid.
- [ ] Production quality code is expected
- [ ] Unit tests is a must  
- [ ] Refactor the code to be more readable and enhance reusability.
- [ ] Use only [styled-component](https://www.styled-components.com/) for styling part.
- [ ] Display well in most modern browser (Google Chrome, Safari, Firefox).


#### Bonus
- [ ] Supporting different screen sizes (responsive).
- [ ] Write unit tests with [jest](https://facebook.github.io/jest/).

## Rules
Desire to win the war? Well, to make it a little more fun, please remember that

**You cannot:**
- Change existing behaviors.
- Change the API server.
- Change from JS to other languages.

**In the other hand, feel free to:**
- Improve the design to have better UI and UX.
- Re-organize the codebase.
- Create new modules/methods/components.
- Modify existing code.
- Add new packages.
- Update `webpack` config.
- Take reasonable time to complete the challenge, no need to rush.
- Edit `README.md` to add documentation. What have you done or how to run or test your app?


**Note**: You can see design inside folder `resources`.


## Surprise us!
Ready to surprise us what you have done? Email your changes as a [git format-patch](https://git-scm.com/docs/git-format-patch) to theesit@omise.co
Please remember that your patch must consist of multiple separate commits. Your commit message must communicate clearly what has been done in each commit.

If you notice more bugs in the original implementation you can add fixes for those as well. You won't be penalized if you don't. However we ask you not to add more features than the one given in the mission list.

Let's rock! :metal:


## How to run

### Getting Started!

#### Running in development mode

Step 1 : Navigate to Project Root and create a .env at the root level. 
```
API_HOST='http://localhost'
API_PORT=3001
```
Note : This is the default content of the .env file to listen to the the JSON-server(this is referred to in Step 3).

Step 2 : Navigate to Project Root and Install all the dependencies and packages using yarn by following command.
```
yarn install
```

Step 3 : To run the API server(json-server) run following command.
```
yarn server
```
Note : By default the server will run on port 3001.

Step 4 : To start the development server
```
yarn dev
```
Note : By default the server will run on port 3000.

#### Production Build

To create a production build, use the following (default folder: /build)
```
yarn build
```

### Run Test Suites Using Jest.

Navigate to Project Root and Open Terminal there.

Run Following Command to Run all the test suites and cases.
```
yarn test
```

Run Following Command to run test in watch mode(auto run tests when you save).
```
yarn test:watch
```

Run Following Command to test coverage.
```
yarn test:coverage
```


### Use Hygen Code Generator For Generating Components

Step 1: Install Hygen Globally into your system using
```
yarn add global hygen
```

I have already designed a templates for making Dumb Components.

Usage : To Create Dumb Component. Run
```
hygen dumb new --name MyComponent
```
