# LoadSVG

The LoadSVG component is a simple and customizable SVG-based loading spinner. It can be easily integrated into any React application and customized according to the needs of the user.

## Installation

To use `react-loadsvg` in your project, you need to install it first using `npm` or `yarn`.

```bash
npm install react-loadsvg
```

or

```bash
yarn add react-loadsvg
```

## Usage

Once you have installed the `react-loadsvg` package, you can use the `LoadSVG` component in your React application. Here's an example of how to use it:

```jsx
import LoadSVG from 'react-loadsvg';

function App() {
  return (
    <div>
      <LoadSVG size={50} color="blue" />
    </div>
  );
}
```

In the example above, the `LoadSVG` component is imported from the `react-loadsvg` package and rendered inside a div element. The size and color props are passed to the component to customize its appearance.

## Props

The `LoadSVG` component accepts the following props:

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| size | number | 20 | Specifies the size of the spinner in pixels. |
| stroke | number | 8 | Specifies the width of the spinner stroke in pixels. |
| backStroke | number | 0 | Specifies the width of the background stroke in pixels. Set to 0 to disable. |
| duration | number | 2000 | Specifies the duration of the spinner animation in milliseconds. |
| lineCap | string | "round" | Specifies the line cap style of the spinner stroke. Accepts "butt", "round", or "square". |
| color | string | "dodgerblue" | Specifies the color of the spinner stroke. |
| backColor | string | "transparent" | Specifies the color of the background stroke. |

## Examples

Here are some examples of how to use the `LoadSVG` component with different props:

Example 1: Changing the size and color

```jsx
<LoadSVG size={30} color="red" />
```

Example 2: Disabling the background stroke

```jsx
<LoadSVG backStroke={0} />
```

Example 3: Changing the line cap style

```jsx
<LoadSVG lineCap="square" />
```

Example 4: Customizing the animation duration

```jsx
<LoadSVG duration={4000} />
```

## Styling

The `LoadSVG` component can be styled using CSS, just like any other React component. The class name of the SVG element is `loadSVG`.

```css
.loadSVG {
  /* CSS styles here */
}
```

## Contributing

Contributions to the `react-loadsvg` package are welcome and encouraged! If you find a bug or want to suggest an improvement, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/shivamdevs/npm-packages/tree/main/react-loadsvg).

## License

The `react-loadsvg` package is licensed under the [MIT License](https://github.com/shivamdevs/npm-packages/tree/main/react-loadsvg/LICENSE).
