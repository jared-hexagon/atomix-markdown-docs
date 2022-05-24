# What is PostCSS?

> Transform CSS with the power of JavaScript. Auto-prefixing, future CSS syntaxes, modules, linting and more are possible with hundreds of PostCSS plugins.

[PostCSS](https://postcss.org/)

# Why do we use PostCSS?

Basic CSS is slow to write and lacks features such as nesting and automatic prefixing.

# What about SCSS, CSS-in-JS, etc.

There are some other awesome tools out there for writing CSS but we decided early on to use PostCSS. We might switch in future.

# How do we use PostCSS?

PostCSS has a plugin architecture to extend it. The installed plugins are listed in `postcss.config.js` in the root of the repo.

You can import CSS files written with PostCSS straight into your JavaScript. We have a plugin that takes each class and creates an object as the default export:

```css
.someClass {
	background-color: red;
}
```

```jsx
import styles from './styles.css'

const MyComponent = () => (
	<div className={styles.someClass}>Hello world!</div>
)
```

Note that the string will contain randomly generated characters.

# Notes

## CSS variables are global

If you declare a variable it will be global for **every single component**. For that reason please prefix it with the component or module you are writing it for:

```css
/* bad */
:root {
	--background-color: red;
}

/* good */
:root {
	--text-input-background-color: red;
}
```

# Troubleshooting

## VSCode shows syntax errors when I do nesting

This is a bug. If you can fix this please open a pull request!
