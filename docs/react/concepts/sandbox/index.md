# What is the sandbox?

The sandbox is a web app for developers to build and preview our React components.

# How does it work?

We use the very popular [Storybook](https://storybook.js.org/).

When you run `npm start`, Storybook starts up and runs on port 8080. At the end open `http://localhost:8080` in your browser to view it.

# Why do we use Storybook?

Storybook is one of the most popular tools for building UI components. It has a very large community and plugin architecture. We can embed Figma, documentation and more very easily.

# How do I add to the sandbox?

In your React component directory add a file under `sandbox/index.js` which imports your component and exports a default React component:

```jsx
import MyComponent from './'

export default () => (
	<div>
		This is my story in the sandbox!
		<MyComponent />
	</div>
)
```

Then add a "story" which is a special file Storybook automatically detects (`sandbox/story.js`):

```jsx
import React from 'react'
import { storiesOf } from '@storybook/react'
import Sandbox from './'

storiesOf('Molecules/MyComponent', module).add('default', () => <Sandbox />)
```

Replace "Molecules" with "Atoms" or "Organisms" depending on the type of component you are building.
