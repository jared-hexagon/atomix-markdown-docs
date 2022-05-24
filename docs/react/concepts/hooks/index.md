- what a React hook
- why you would use it
- how dependencies work

# What are React hooks?

> Hooks are functions that let you “hook into” React state and lifecycle features from function components.

[React docs](https://reactjs.org/docs/hooks-overview.html)

Basically they are functions you can call from within a React component that allow you maintain your own state, have side effects and persist data between renders.

Hooks always start with "use". eg. `useState` or `useEffect` or `useMiningEquipment`.

# Why would I use a React hook?

Whenever you have a side effect inside a component such as a fetch, connection to a server, interacting with a 3rd party library or more, you should be using hooks.

Hooks can be written in separate files and imported so that your component is light, easy to read and easy to test (you can mock them!). Developers don't need to be concerned about how they work - just that they work!

# What about HOCs?

HOCs are pretty much dead. Long live hooks!

# How do we use React hooks?

We have created our own hooks (under `src/library/common/hooks`) for any re-usable logic.

Components can create their own hooks too. Each hook should have their own file that is the name of the hook.

# How do React hooks work?

Hooks make use of context in JavaScript - each time React re-renders your component it calls your component's function and when you call a hook it internally keeps track of it.

Some hooks have a "dependency array". This is a simple array that React uses to know when to "regenerate" your hook (or do the thing again) so that it doesn't do it too often.

# Common hooks

## useState

It lets you maintain state between renders. When you set state (even if the new state is unchanged) React will re-render your component and the hook outputs the new state.

## useEffect

It lets you perform side effects inside your component. Provide it a function and an array of primitive values and whenever any of the primitive values change, React will call your function again.

**Note:** If your effect leaves behind anything (such as event handlers) ensure you return a function which "cleans up" your hook. It will be called each time the effect happens and when the component unmounts.

## useCallback

This hook requires a function which should be a function that will never change between renders unless a dependency changes. This is useful if you are passing a function to another component and want the function to not change.

## useMemo

This hook requires a function which outputs a value that will never change between renders unless a dependency changes.

# Troubleshooting

## My useEffect is called too frequently

Ensure your dependency array is comprised of **primitive values only** (strings, booleans, numbers).

## My useEffect is never called again

As above - ensure your dependencies are defined correctly. If you depend on an object reference that reference may never change so your effect will never trigger again.
