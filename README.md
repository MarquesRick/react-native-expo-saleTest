<a href="https://www.linkedin.com/in/henri-marques/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/37425086?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Henrique Marques</b></sub></a> <a href="https://www.linkedin.com/in/henri-marques/" title="Linkedin">🧑🏻‍💻
 </a>


Made with ❤️ by Henrique Marques 👋🏽 Say hello!

[![Twitter Badge](https://img.shields.io/badge/-@Henrimarques18-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/Henrimarques18)](https://twitter.com/Henrimarques18) [![Linkedin Badge](https://img.shields.io/badge/-Henrique_Marques-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henri-marques/)](https://www.linkedin.com/in/henri-marques/) 
[![Gmail Badge](https://img.shields.io/badge/-henmarques-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:henmarques2009@gmail.com)](mailto:henmarques2009@gmail.com)

---
<h1 align="center">Sales Test</h1>

<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🔗 React Native EXPO</a>
</h1>
<p align="center">🚀 simple application developed with React Native EXPO</p>

# Sale application

Application developed with the aim of obtaining 100% coverage

## 🔨 Project features

In this project, we have a list of auctions and an auction screen that allows you to submit bids.
Based on this application we will create tests.

![image](https://user-images.githubusercontent.com/9091491/159780701-12e127ea-097d-4465-b39a-3c490861d9b7.png)

## ✔️ Techniques and technologies used

- `Use React Native with Expo`: Expo makes setting up the environment easier;
- `Use the jest library`: Library indicated by React Native;
- `Create unit tests`: Using the jest library to create tests for a function;
- `Generate coverage percentage`: Configure jest to generate the percentage of code tested;
- `Create tests with mocks`: Using jest to simulate behavior;
- `Use the @testing-library/react-native` library: Robust library to render and test components in memory;
- `Create in-memory rendered component tests`: Filling in fields, pressing buttons and more;
- `Use the @testing-library/react-hooks library`: Library that allows for easy hook testing;
- `Create hook tests`: Testing the execution of hooks without the need to mock the native hooks.

```bash
# run jest
npm test

# install jest intellisense to work on vscode
npm i @types/jest

# install expo jest 
expo install jest-expo jest

# install testing library for testing hooks and reders
npm install --save-dev react-test-renderer@17.0.1 @testing-library/react-native @testing-library/react-hooks

```
## ℹ️ Infos
<br/>[expo jest](https://docs.expo.dev/guides/testing-with-jest/) <br/>
[jest expect](https://jestjs.io/pt-BR/docs/expect)<br/>
[jest globais](https://jestjs.io/pt-BR/docs/api)<br/>
[jest coverage](https://docs.expo.dev/guides/testing-with-jest/#code-coverage-reports)<br/>
[jest mock](https://jestjs.io/pt-BR/docs/mock-function-api)<br/>


### Jest Expect:
To check if the values in the tests are as expected, we use expects. In the jest library, there are several ways to do this, the main ones being:<br/><br/>

- `toBe()`: compares integers or texts;
- `toBeCloseTo()`: compares floating points obtained through mathematical operations, because, due to rounding, there may be errors with toBe();
- `toBeFalsy()/toBeTruthy()`: compares false/true values in a boolean context. In the case of falsy, not only false will be validated, but values like null, 0, '', undefined and NaN as well. The rest of the values are considered truthy;
- `toEqual()`: compares objects, checking if the internal properties are equal. Using toBe() will not return the same result.

### Jest Globais:
- `describe('', () => {})`: creates a context with a description for all tests inside the function;
- `test('', () => {})`: creates a test with a description that must match what the test intends to test.
- `it('', () => {})`: works exactly like test('', () => {}). It is used to start the test sentence, usually in English, where the word it does not need to be repeated. Example: it('must return true') or it('must return true');
- `afterAll(() => {})`: executes the function after all tests in its context (file or describe) have finished executing;
- `beforeAll(() => {})`: execute the function before all tests in your context (file or describe) start executing;
- `afterEach(() => {})`: execute the function several times, whenever a test of your context (file or describe) finishes its execution;
- `beforeEach(() => {})`: executes the function several times, always before a test of your context (file or describe) starts its execution.

### Mock:
- `mockClear()`: Clears all records of function calls;
- `mockReset()`: Does everything mockClear() does, and also cleans the implementations and values to be returned, returning to how we created a jest.fn() function;
- `mockRestore()`: Does everything mockClear() does, and also reverts to the original method implementation;
- `mockImplementation(fn)`: Sets a new implementation for the mocked function. There is a shortcut for this method: jest.fn(implementation);
- `mockReturnValue(value)`: Sets a fixed value to be returned.

### What are snapshots?
A very interesting type of test is the snapshots. How it works?<br/><br/>

We can test application components using snapshots, which basically verify that the component structure remains the same, using the JSON reference that the rendering returns.<br/><br/>

However, we must be careful with this type of test, as it does not actually test the business rule, but rather the structures and even styles of the component. Also, adding this test might not make any sense in the case of a component that is constantly changing, as it will always fail and ask us to update the snapshot.<br/><br/>

### So when should we use snapshot tests?
In simple components, which do not contain business rules and do not change frequently. It is important to always be careful that the coverage generated by this test is not applied to subcomponents, thus forgetting to evaluate whether tests of those were necessary as well.
<br/><br/>
Below you can see an example of a snapshot test:
<br/><br/>
```javascript
import React from 'react';
import { render } from '@testing-library/react-native';

import Componente from '../Componente.js';

describe('Componente.js', () => {
  it('deve renderizar sem erros', () => {
    const { toJSON } = render(<Componente />);

    expect(toJSON()).toMatchSnapshot();
  });
});
```

## 🛸Info Bonus

You can run ```bash npm jest -u --coverage=false``` to update failed snapshots, or even add this command to your scripts in package.json.




