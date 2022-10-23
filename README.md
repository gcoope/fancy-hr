# fancy-hr

HTML `<hr>` element, just a little bit :sparkles:fancier:sparkles:

> fancy-hr is a zero-dependency [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) that is <5kb that can quickly and easily be dropped into _almost_ any web page.

[Demo](https://343d0b63.fancy-hr.pages.dev/)

## Usage

**TL;DR** - Import the JS file and use the `<fancy-hr></fancy-hr>` tag wherever you want.

```html
<head>
  <script src="https://cdn.jsdelivr.net/gh/gcoope/fancy-hr@latest/dist/fancy-hr.js"></script>
</head>

<body>
  <fancy-hr></fancy-hr>
</body>
```

To import the JS file, add the `<script` tag above into your HTML file's `<head>`. Alternatively if you don't want to use [the CDN URL you](https://cdn.jsdelivr.net/gh/gcoope/fancy-hr@latest/dist/fancy-hr.js) are welcome to clone/build a local version of the fancy-hr file (see the develop section below) and include that in your project bundle.

## Attributes

`<fancy-hr></fancy-hr>` takes attributes that will allow you to quickly and easily edit how it looks. For example, the following code will create a thick, dashed, green line:

```html
<fancy-hr color="seagreen" variant="dashed" height="8px"></fancy-hr>
```

| Name          | Type                                          | Default   | Comments                                                                                                                                                               |
| ------------- | --------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color         | string                                        | #000000   | Any [valid CSS color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) can be used                                                                        |
| variant       | `'solid' \| 'dotted' \| 'dashed' \| 'double'` | 'solid'   | Applies border style, there [are more styles](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) however they aren't useful for styling our `<hr>` element |
| margin        | string                                        | '0.5em 0' | Accepts single unit for all sides or "top-bottom left-right" values. Accepts `px\|em\|rem\|%\|vh\|vw\|vmin\|vmax` units                                                |
| width         | string                                        | 'unset'   | Default behaviour is to fill container, accepts `px\|em\|rem\|%\|vh\|vw\|vmin\|vmax` units                                                                             |
| height        | string                                        | '1px'     | Line thickness, accepts `px\|em\|rem\|%\|vh\|vw\|vmin\|vmax` units                                                                                                     |
| border-radius | string                                        | '0px'     | Accepts `px\|em\|rem\|%\|vh\|vw\|vmin\|vmax` units                                                                                                                     |

## Accessibility

The underlying component uses a native `<hr>` element, we are only adding visual changes to it. Due to this, `<fancy-hr></fancy-hr>` is actually **a compliant and recommended tag** to use when breaking up sections of your markup.

_**However**_ - if you are intending to use `<fancy-hr></fancy-hr>` for purely decorative purposes, it would be recommended to use an SVG image or a styled `<div>`.

## Development

If you'd like to run the code and have a play around locally run the following:

```
npm install
npm run dev
```

This uses a webpack dev server to inject the JS file into `./example/index.html` and serves it locally. All of the magic happens inside `fancy-hr.js`.

### Storybook?

Using storybook for development/examples is on the roadmap

## Roadmap/Ideas

- Custom repeated icons/emojis/images
- Gradient colors
- Animation/transitions (perhaps on visible or hover)
- Storybook integration
