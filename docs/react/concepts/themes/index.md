# What are themes?

Themes in Atomix are CSS files that change the appearance of a React component depending on which theme is selected.

They allow us to switch between a light and dark appearance to help in different lighting conditions or user preference.

# How does it work?

Inside the Atomix component directory should be a "themes" directory. Inside of there should be the default (light) and dark themes.

Then use the React context API to provide the theme to ALL components at a high level:

```jsx
import MyComponent from '@atomos/atomix/molecules/MyComponent'
import { COMPONENT_THEME_DARK } from '@atomos/atomix/neutron/ComponentTheme'
import ThemeProvider from '@atomos/atomix/themes/ThemeProvider'

const App = () => (
	<ThemeProvider theme={COMPONENT_THEME_DARK}>
		<MyComponent />
	</ThemeProvider>
)
```

Alternatively the React component should allow you to override it as a prop:

```jsx
import MyComponent from '@atomos/atomix/molecules/MyComponent'
import { COMPONENT_THEME_DARK } from '@atomos/atomix/neutron/ComponentTheme'

const View = () => <MyComponent theme={COMPONENT_THEME_DARK} />
```

# Troubleshooting

## The component I am trying to use is missing a theme

We try our best to provide a light and dark theme however sometimes it is not possible. Please contact us if it is important you have a specific theme.

## The component I am building is missing a mockup for a theme

Please discuss this with the individual designer of the component.
