# 0.0 - These rules

## 0.1 - 1 or 2 sentences

Keep them light. They are long enough as it is.

## 0.2 - Provide examples only if necessary

Provide an example below the description only if necessary in a code block with language.

```js
alert("Like this")
```

## 0.3 - Link to relevant resources

To limit debates between devs link to any relevant resource eg. these rules, MDN docs, StackOverflow. Embed it using Markdown.

## 0.4 - Ignore these rules if you know what you are doing

These rules are not perfect, are constantly evolving and can be safely ignored only if you know what you are doing. Include a comment to explain why you are ignoring a rule and when in doubt ask someone.

## 0.5 - Linting is better

Some rules are not listed here but instead enforced by a linter. If a rule here can be enforced by a linter please create a PR!

## 0.6 - Store in code

These rules are a living, changing document that any dev should be able to contribute to. Store it with the sourcecode of Atomix.

# 1.0 - General

## 1.1 - D.R.Y.

We like to keep things [D.R.Y.](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). Move re-usable functions to common areas.

## 1.2 - Fail fast

We prefer to [fail fast](https://medium.com/@christian.ppl/introduction-to-the-fail-fast-principle-in-software-development-865ccab28979) so that our software is more readable and bugs are found faster.

```js
const addTwoNumbers = (numA, numB) => {
	if (typeof numA !== 'number' || typeof numB !== 'number') {
		throw new Error('Please provide 2 numbers!')
	}
	return numA + numN
}
```

## 1.3 - Link to reputable docs

We want to avoid debates between devs. Link to any relevant and reputable source like these rules, the MDN docs, StackOverflow (with a high ranking answer) inside code comments, PRs, etc.

## 1.4 - Never submit commented out code

We have source control for a reason. Sometimes you can include it if you have a decent reason (use a comment explaining why).

# 2.0 CSS/Themes

## 2.1 - Do not hardcode colors into theme files

All colors must come from a [color palette](/src/library/themes/color-palettes/atomix.css). If we ever change a color we can just replace it in 1 place.

## 2.2 - Always nest PostCSS rules

Use PostCSS nesting at all times (use & symbol to refer to the parent selector). Makes the code neater and easier to maintain. Note your IDE will probably show errors for this.

## 2.3 - Always define colors and constants at the top of the file (below imports)

Keep it [https://dev.azure.com/HexagonMinAustralia/Atomix/_git/Atomix?path=/docs/react/contribute/rules.md&_a=preview&anchor=1.1---d.r.y.].

## 2.4 - Use pixels

When specifying an exact dimension always use the `px` unit unless you need something else. This is to be consistent. Note: relative units like rem, em and percentage may be used in future (and inside your CSS if you explain with a comment why you need it).

## 2.5 - Include the unit

Always include the unit. Otherwise we are relying on the browser to assume your unit which is [bad practice](https://stackoverflow.com/a/2272348/11547939). eg. `width: 14px;` not `width: 14;`.

## 2.6 - Always include a light and dark theme

It is very common for the operating system to [request a dark mode](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) for websites and desktop apps. We want to give devs this option (Atomix does NOT switch for you).

## 2.7 - Always provide a fallback font

There might be a rare instance where the font is not available (eg. network issue) so provide a fallback font. eg. `font-family: 'Open Sans', sans-serif;`.

# 3.0 - JavaScript

## 3.1 - Only comment if you need to

Only write a comment if it isn't obvious *why* you have written some code. Our code should be mostly [self-documenting](https://en.wikipedia.org/wiki/Self-documenting_code).

## 3.2 - Write self-documenting code

Use [self-documenting](https://en.wikipedia.org/wiki/Self-documenting_code) variable and function names so that our code is readable and maintainable without the need for comments.

```js
// bad
const doIt = (a, b) => a + b

// good
const addTwoNumbersTogether = (numA, numB) => numA + numB
```

## 3.3 - Write pure, functional code

Our codebase is comprised of many small, pure functions (including React hooks) that are easy to test, maintain and are predictable. Avoid classes and objects (ie the "new" keyword).

## 3.4 - Use async/await

Use the async/await syntax when dealing with Promise chains. Always wrap an await call with a try/catch block to catch any errors in your chain.

## 3.5 - Use ES6 syntax

We use Babel to transpile your code for all modern browsers to understand. Use const, let, arrow functions, spreading, rest, `Map`, `Set`, for..of loops (instead of `Array.forEach()`, etc.

## 3.6 - Call callbacks with an ID

The first argument for any callback that deals with items should be the ID of the related item. The 2nd (and other) arguments can be anything. It makes callbacks consistent.

```js
const onItemClick = (id: string) => void | Promise<void>
```

## 3.7 - Strict equality

Never check "falsy". That is [bad practice](https://itnext.io/you-shouldnt-use-truthy-tests-753b39ef8893).

## 3.8 - Log warnings to the console

Use the browser console to log warnings. This will help the developer debug your code in production. Errors should be thrown and caught by the application (by a global error handler or a React error boundary).

# 4.0 - Flow/TypeScript

## 4.1 - Do not ignore lines

There is almost always a solution to a Flow/TypeScript error. If you must ignore it add a comment explaining why.

# 5.0 React

## 5.1 - Use JSX

JSX transpiles down to `React.createElement`. The JSX syntax is much nicer, cleaner and shorter so use that over the other syntax (unless you really need it and in that case explain why in a comment).

## 5.2 - Ensure hooks subscribe properly

In-built hooks like `useEffect`, `useCallback` and `useMemo` require [subscriptions](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect) to know when to re-generate. Ensure you subscribe properly and do not subscribe to a reference unless you know what you are doing.

## 5.3 - Declare re-usable functions and hooks in their own file

Declare any re-usable logic inside a function in another file. It keeps your component file lightweight, easy to read, pure and performant.

## 5.4 - Validate props early

We prefer to [fail fast](https://dev.azure.com/HexagonMinAustralia/Atomix/_git/Atomix?path=/docs/react/contribute/rules.md&_a=preview&anchor=1.2---fail-fast). Perform validation on all of your props at the start of your component and if any are provided incorrectly throw an `Error` (we assume we are inside an [Error Boundary](https://reactjs.org/docs/error-boundaries.html)).

```jsx
const MyComponent = ({ someProp }) => {
	if (someProp !== true || someProp !== false) {
		throw new Error('You must provide someProp as a boolean!')
	}
	return <div>Hello!</div>
}
```

## 5.5 - Throw errors from React components

If your component encounters 

All React components have been designed assuming the application will be rendering the component inside of an [error boundary](https://reactjs.org/docs/error-boundaries.html) so it is safe to throw errors from them. Only throw errors that inherit or are the `Error` class.

## 5.6 - Use classNames for multiple classes

When setting multiple (not single) classes of a HTML element use the classNames function to combine multiple together.

## 5.7 - Use UI test IDs

Always set the `data-testid` attribute on the root of the element your component creates. Then sprinkle `data-test-x="y"` attributes on child elements (where `x` and `y` are something meaningful). This helps people write UI tests later.

```jsx
const VideoPlayer = ({ testHook }) => <div data-testid={testHook}><button data-test-control="play">Play</button></div>
```

## 5.8 - Presentational components first

Build your component to be presentational first. It should not maintain any state (ie call `useState`) unless absolutely necessary. The application should be keeping track of state and passing it to the component.

## 5.9 - Always create a hook

If your component does anything dynamic (eg. a `fetch()`, WebSockets, change the DOM) move that logic to a hook in its own file. It keeps the component light, presentational and easier to maintain.

## 5.10 - Memoize complex algorithms

If you perform any CPU intensive algorithms (eg. multiplying 2 large prime numbers) use the [useMemo]() hook so they only get re-computed when you need to.

## 5.11 - Do not use HOCs

Higher Order Componentss are old and outdated. Use hooks.

## 5.12 - Do not use .defaultProps

.defaultProps is old and outdated. Use the spread operator to set default props.

## 5.13 - Do not break the rules of hooks

The [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) are very good. Do not break them unless you know what you are doing (and use a comment explaining why).

## 5.14 - Always provide a proper key in a loop

If you do not set the "key" property when looping it causes weird behavior. Always set the "key" property to the ID of the item in the array (avoid indexes). See [docs](https://reactjs.org/docs/lists-and-keys.html).

# 6.0 Testing

## 6.1 - Write tests in the BDD style

The [BDD style](#TODO) makes test output more readable (at the cost of more code).
describe('Given I have a TextInput component', () => {
  describe('then I type some text', () => {
    it('displays correctly', () => {
    })
  })
})

## 6.2 - 95% unit test coverage

We have a high bar in terms of test coverage. We want strong, reliable unit tests.

## 6.3 - Mock dependencies

You must mock all imports (except React) when testing a React component, pure JavaScript function and anything else. These are unit tests NOT integration tests. Read [Jest docs](https://jestjs.io/docs/manual-mocks).

## 6.4 - Snapshot test

Include at least 1 snapshot test for any React component for the default appearance. Snapshot tests are easy and quick but cannot replace a standard unit test.

## 6.5 - Never wait

Never use `setTimeout` kind of logic in a test to actually wait. Jest lets you mock the sense of time.

# 7.0 Docs

## 7.1 -  Every React component must have docs

All components must have a `docs.json` file with all tabs, example code, props, Flow types and compatibility documented. Any child components should have their own `docs.json` file (leave the tabs empty).

## 7.2 - Docs must be written in plain English (correct spelling and grammar)

We want professionally written documentation. Please use correct English spelling and grammar.
