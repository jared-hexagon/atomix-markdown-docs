- what Flow is
- why we use it
- how to run the NPM command
- how to set it up with VSCode
- troubleshooting

# What is Flow?

[Flow](https://flow.org/) is a static type checker for JavaScript.

It identifies problems as you code right inside your IDE (like VSCode).

# Why do we use it?

We want to use any tool we can to make our lives easier. We want to find problems as soon as possible and write neat, understandable and predictable code. Flow helps us achieve that.

# How do I write Flow?

In Flow you commonly use it to declare the "type" of a variable (ie what kind of variable it is):

```jsx
const myFlag: boolean = false

const myString: string = 'Hello world!'

const myFunction: (someArgument: string) => void = (someArgument: string) => {
	// "void" means it returns nothing
}

const myObject: { [key: string]: boolean } = {
	someKey: true
}

const myArray: Array<string> = ['hello', 'world']

const MyReactComponent: ({ someProp }: { someProp: boolean }): React$Element<'div'> => {
	return <div>Hello world!</div>
}
```

You can also declare a type and export and import it:

```jsx
import type { MyType } from './some/file'

type AnotherType = MyType & { newKey: string }

export type FinalType = AnotherType
```

A generic type basically allows you to pass a type to a function (or another type) to "help" Flow know what you are passing.

For example this function lets you define what the response of a fetch will be (because Flow can't tell on its own):

```jsx
const fetch = <Response>(url: string): Promise<Response> => {
	const response = await fetch(url)
	return response.json()
}

const myUsers = await fetch<User[]>('/api/users')
```

# How do I check Flow?

There are 2 ways to check if Flow has any errors: using your terminal and inside your IDE (like VSCode).

## Terminal

Simply run the `npm run flow:check` command in the root of the Atomix project. It will exit with failure if there are any Flow errors in any JavaScript file:

![](https://raw.githubusercontent.com/jared-hexagon/atomix-markdown-docs/master/docs/react/tools/flow/assets/images/flow-error.png)

## VSCode

Install the [vscode-flow-ide](https://github.com/jstwister/vscode-flow-ide) extension in VSCode:

![](https://raw.githubusercontent.com/jared-hexagon/atomix-markdown-docs/master/docs/react/tools/flow/assets/images/vscode-flow-extension.png)

In your VSCode preferences ensure the path to Flow is set correctly (otherwise Flow might use the wrong version):

![](https://raw.githubusercontent.com/jared-hexagon/atomix-markdown-docs/master/docs/react/tools/flow/assets/images/vscode-path-to-flow.png)

Then in your VSCode preferences disable JavaScript and TypeScript validation (Flow takes care of that):

![](https://raw.githubusercontent.com/jared-hexagon/atomix-markdown-docs/master/docs/react/tools/flow/assets/images/vscode-disable-validation.png)

Restart VSCode and open any JavaScript file in Atomix that has `// @flow` at the top of the file. Hover over a Flow type and you should see the extension in action:

![](https://raw.githubusercontent.com/jared-hexagon/atomix-markdown-docs/master/docs/react/tools/flow/assets/images/vscode-flow-popup.png)

# What about TypeScript?

Atomix has been written entirely in Flow but we will probably migrate to TypeScript at a future time.

Atomix is distributed with TypeScript types that are generated from the Flow types. If you have issues with these types please contact us (however we recommend you use Flow).

# Troubleshooting

## Conflicts with Prettier

There may be instances where Prettier will format some code that breaks the linter. In those cases disable Prettier:

```jsx
// prettier-ignore
const doSomething = 
	() => {
	}
```

## Flow does not work in VSCode

Ensure you have followed all of the steps.

Contact us for more help.
