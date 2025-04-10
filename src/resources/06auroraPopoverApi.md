_Wistia's popover embed displays in a lightbox that pops out over the page when opened. This article contains details on options and API functions specific to these lightbox-style embeds._

## Popover embeds

The basic structure of a popover embed includes the `player.js` script, a `<wistia-player>` web component, and the `wistia-popover` embed option.

```html
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player media-id="abc123" wistia-popover></wistia-player>
```
```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react"; 

export default function App() {
  return (
    <WistiaPlayer mediaId="abc123" wistiaPopover={true} />
  );
}
```

That is, they are very similar in structure to [standard embeds](https://docs.wistia.com/docs/player-embed-api), but with the option `wistia-popover`. 

## Quick reference

> 🙌 
> 
> **Note**: Most non-popover [attributes](https://docs.wistia.com/docs/player-attributes-and-properties), [properties](https://docs.wistia.com/docs/player-attributes-and-properties), [events](https://docs.wistia.com/docs/player-events#quick-reference), and [methods](https://docs.wistia.com/docs/player-methods#quick-reference) can also be used with popover embeds!

### Customizable attributes and properties

| HTML attribute                                            | JavaScript property                                     | Description                                                                                                                                                                        |
| :-------------------------------------------------------- | :------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`wistia-popover`](#wistia-popover)                       | [`wistiaPopover`](#wistia-popover)                      | **Required** for popover embeds. Tells the embed code that it should behave like a popover.                                                                                        |
| [`popover-animate-thumbnail`](#popover-animate-thumbnail) | [`popoverAnimateThumbnail`](#popover-animate-thumbnail) | Enables/disables a special behavior of the play button. If set to `true`, the button will expand to cover the thumbnail on hover, while also displaying the duration of the video. |
| [`popover-animation`](#popover-animation)                 | [`popoverAnimation`](#popover-animation)                | Sets the launch animation type of the popover.                                                                                                                                     |
| [`popover-border-color`](#popover-border-color)           | [`popoverBorderColor`](#popover-border-color)           | Sets the border color of the popover.                                                                                                                                              |
| [`popover-border-radius`](#popover-border-radius)         | [`popoverBorderRadius`](#popover-border-radius)         | Sets the border radius of the popover.                                                                                                                                             |
| [`popover-border-width`](#popover-border-width)           | [`popoverBorderWidth`](#popover-border-width)           | Sets the border width of the popover.                                                                                                                                              |
| [`popover-box-shadow`](#popover-box-shadow)               | [`popoverBoxShadow`](#popover-box-shadow)               | Enables/disables the default diffuse box shadow on the popover.                                                                                                                    |
| [`popover-caption`](#popover-caption)                     | [`popoverCaption`](#popover-caption)                    | Sets the text to be displayed directly below the popover.                                                                                                                          |
| [`popover-caption-container`](#popover-caption-container) | [`popoverCaptionContainer`](#popover-caption-container) | Tells the embed code it should look for the specified ID of a DOM element. If found, that element will be moved and shown below the popover.                                       |
| [`popover-content`](#popover-content)                     | [`popoverContent`](#popover-content)                    | Sets how the popover's container will be displayed.                                                                                                                                |
| [`popover-disable-autoplay`](#popover-disable-autoplay)   | [`popoverDisableAutoplay`](#popover-disable-autoplay)   | Enables/disables autoplaying the popover as soon as it is opened.                                                                                                                  |
| [`popover-overlay-color`](#popover-overlay-color)         | [`popoverOverlayColor`](#popover-overlay-color)         | Sets the background color of the popover's overlay.                                                                                                                                |
| [`popover-overlay-opacity`](#popover-overlay-opacity)     | [`popoverOverlayOpacity`](#popover-overlay-opacity)     | Sets the opacity of the popover's overlay.                                                                                                                                         |
| [`popover-prevent-scroll`](#popover-prevent-scroll)       | [`popoverPreventScroll`](#popover-prevent-scroll)       | Enables/disables scrolling the content behind the popover.                                                                                                                         |
| [`popover-show-on-load`](#popover-show-on-load)           | [`popoverShowOnLoad`](#popover-show-on-load)            | Enables/disables the popover launching as soon as it is loaded.                                                                                                                    |

### Events

| Name                            | Description                             |
| :------------------------------ | :-------------------------------------- |
| [`popover-show`](#popover-show) | Fires when the popover becomes visible. |
| [`popover-hide`](#popover-hide) | Fires when the popover is hidden.       |

### Methods

| Name                            | Description                                  |
| :------------------------------ | :------------------------------------------- |
| [`showPopover()`](#showpopover) | If the popover is hidden, this will show it. |
| [`hidePopover()`](#hidepopover) | If the popover is open, this will hide it.   |

## Options

### Using popover embed options

Just like adding options to a [standard embed](https://docs.wistia.com/docs/player-embed-api), popover embed options can be set on the embed in three ways:

1. As attributes on the `<wistia-player>` element using HTML.
2. As properties of the `<wistia-player>` element using JavaScript.
3. Via a `window.wistiaOptions` configuration object, before the popover is embedded.

#### 1. As HTML attributes

The embed option is added as an attribute directly on `<wistia-player>`.

```html
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player media-id="abc123" wistia-popover popover-border-width="2"></wistia-player>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react"; 

export default function App() {
  return (
    <WistiaPlayer mediaId="abc123" wistiaPopover={true} popoverBorderWidth={2} />
  );
}
```

#### 2. As JavaScript properties

Once we have a reference to the `<wistia-player>` HTML element, we can interact with its properties via JavaScript.

```html HTML + JavaScript
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js@latest" async></script>

<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById('my-player');
  player.popoverBorderWidth = "2";
</script>
```

#### 3. Via a `window.wistiaOptions` configuration object

We can set multiple or complex options via a `window.wistiaOptions` configuration object. The object's keys must match the `media-id` of the media on which we want the options to be applied. There is also a global `'_all'` key, to easily apply options to all medias embedded on a page.

> 🙌 
> 
> **Note**: The `window.wistiaOptions` object must appear **before** the `<wistia-player>` element for its embed options to take effect.

```html
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/embed/def456.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<script>
  window.wistiaOptions = {
    '_all': {
      popoverBorderWidth: 2,
    },
    'abc123': {
      popoverOverlayColor: '2949E5',
    },
    'def456': {
      popoverOverlayOpacity: 1,
    }
  }
</script>

<wistia-player media-id="abc123"></wistia-player>
<wistia-player media-id="def456"></wistia-player>
```

***

### `wistia-popover`

**Required** for popover embeds. Set this value to `true` to tell the embed code that it should behave like a popover.

| HTML attribute   | JavaScript property | Type      | Default value | Example values  |
| :--------------- | :------------------ | :-------- | :------------ | :-------------- |
| `wistia-popover` | `wistiaPopover`     | `boolean` | `false`       | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.wistiaPopover = true;
  player.wistiaPopover; // Returns `true`
</script>
```

***

### `popover-animate-thumbnail`

Enables/disables a special behavior of the play button. If set to `true`, the button will expand to cover the thumbnail on hover, while also displaying the duration of the video. If set to `false` (which is the default), there will be no special behavior on hover.

| HTML attribute              | JavaScript property       | Type      | Default value | Example values  |
| :-------------------------- | :------------------------ | :-------- | :------------ | :-------------- |
| `popover-animate-thumbnail` | `popoverAnimateThumbnail` | `boolean` | `false`       | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-animate-thumbnail></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverAnimateThumbnail={true} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverAnimateThumbnail = true;
  player.popoverAnimateThumbnail; // Returns `true`
</script>
```

***

### `popover-animation`

Sets the launch animation type of the popover.

| HTML attribute      | JavaScript property | Type     | Default value | Example values     |
| :------------------ | :------------------ | :------- | :------------ | :----------------- |
| `popover-animation` | `popoverAnimation`  | `string` | `"slide"`     | `"none"`, `"fade"` |

#### Possible values:

| Value     | Description                                                                      |
| :-------- | :------------------------------------------------------------------------------- |
| `"slide"` | Default behavior. Fades in the overlay and slides/fades the video up into place. |
| `"none"`  | Shows the popover with no animation and no delay.                                |
| `"fade"`  | Fades in the popover along with the overlay.                                     |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-animation="none"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverAnimation="none" />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverAnimation = "none";
  player.popoverAnimation; // Returns `"none"`
</script>
```

***

### `popover-border-color`

Sets the border color of the popover. Expects a six-character hexadecimal RGB string like `#2949E5`. The string can include or exclude the preceding `#` character.

| HTML attribute         | JavaScript property  | Type     | Default value | Example values          |
| :--------------------- | :------------------- | :------- | :------------ | :---------------------- |
| `popover-border-color` | `popoverBorderColor` | `string` | `"ffffff"`    | `"#000000"`, `"2949E5"` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-border-color="2949E5"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverBorderColor="2949E5" />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverBorderColor = "2949E5";
  player.popoverBorderColor; // Returns `"2949E5"`
</script>
```

***

### `popover-border-radius`

Popovers have a `0` border radius by default. If your website uses round borders, use this option to set a matching border radius. It expects a value in pixels.

| HTML attribute          | JavaScript property   | Type     | Default value | Example values |
| :---------------------- | :-------------------- | :------- | :------------ | :------------- |
| `popover-border-radius` | `popoverBorderRadius` | `number` | `0`           | `2`, `4`       |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-border-radius="2"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverBorderRadius={2} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverBorderRadius = 2;
  player.popoverBorderRadius; // Returns `2`
</script>
```

***

### `popover-border-width`

Popovers have no borders by default. Use this option to add a border around the video. It expects the width to be an integer defined in pixels.

| HTML attribute         | JavaScript property  | Type     | Default value | Example values |
| :--------------------- | :------------------- | :------- | :------------ | :------------- |
| `popover-border-width` | `popoverBorderWidth` | `string` | `0`           | `5`, `15`      |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-border-width="5"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverBorderWidth={5} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverBorderWidth = 5;
  player.popoverBorderWidth; // Returns `5`
</script>
```

***

### `popover-box-shadow`

Popovers have a diffuse box shadow by default. If you don't want any box shadow, set this option to `false`.

| HTML attribute       | JavaScript property | Type      | Default value | Example values  |
| :------------------- | :------------------ | :-------- | :------------ | :-------------- |
| `popover-box-shadow` | `popoverBoxShadow`  | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-box-shadow="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverBoxShadow={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverBoxShadow = false;
  player.popoverBoxShadow; // Returns `false`
</script>
```

***

### `popover-caption`

Use this option to add some short text directly below the video.

| HTML attribute    | JavaScript property | Type     | Default value | Example values          |
| :---------------- | :------------------ | :------- | :------------ | :---------------------- |
| `popover-caption` | `popoverCaption`    | `string` | `undefined`   | `"This is my caption!"` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-caption="This is my caption!"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverCaption="This is my caption!" />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverCaption = "This is my caption!";
  player.popoverCaption; // Returns `"This is my caption!"`
</script>
```

***

### `popover-caption-container`

If you need longer text or more complex behavior and styling, use this option instead of [`popover-caption`](#popover-caption). With `popover-caption-container`, you specify the ID of a DOM element that should be shown below the caption. This DOM element will be moved (_not_ cloned) and displayed when the popover is launched, so any bindings or styles that target it will stay in tact.

| HTML attribute              | JavaScript property       | Type     | Default value | Example values |
| :-------------------------- | :------------------------ | :------- | :------------ | :------------- |
| `popover-caption-container` | `popoverCaptionContainer` | `string` | `undefined`   | `"my-caption"` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-caption-container="my-caption"></wistia-player>
<div id="my-caption" style="display:none;">
  I can have complex markup here, <a href="#" onclick="alert('Hi!'); return false;">setup bindings</a>, or even define other embed codes to accompany this one.
</div>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  return (
    <WistiaPlayer mediaId="abc123" wistiaPopover popoverCaptionContainer="my-caption" />
    <div id="my-caption" style="display:none;">
      I can have complex markup here, <a href="#" onclick="alert('Hi!'); return false;">setup bindings</a>, or even define other embed codes to accompany this one.
    </div>
  );
}
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>
<div id="my-caption" style="display:none;">
  I can have complex markup here, <a href="#" onclick="alert('Hi!'); return false;">setup bindings</a>, or even define other embed codes to accompany this one.
</div>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverCaptionContainer = "my-caption";
  player.popoverCaptionContainer; // Returns `"my-caption"`
</script>
```

***

### `popover-content`

Sets how the popover's container will be displayed.

| HTML attribute    | JavaScript property | Type     | Default value | Example values          |
| :---------------- | :------------------ | :------- | :------------ | :---------------------- |
| `popover-content` | `popoverContent`    | `string` | `undefined`   | `"thumbnail"`, `"html"` |

#### Possible values:

| Value         | Description                                                                                                                                      |
| :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `"thumbnail"` | Default behavior. The video thumbnail will be rendered in the container, cropped to fit.                                                         |
| `"html"`      | The HTML in the container is not modified, with the exception of being wrapped in a div. Clicking inside this container will launch the popover. |

When `popover-content` is not set or explicitly set to `"thumbnail"`, the video thumbnail will be rendered in the container, cropped to fit with no black bars.

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-content="thumbnail"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverContent="thumbnail" />
```

When `popover-content` is set to `"html"`, the HTML inside the container is not modified, with the exception of being wrapped in a div. Clicking inside this container will launch the popover video. You do not need to use an `<a>` tag inside the popover, but we use it in our example to conveniently borrow native link styles.

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player media-id="abc123" wistia-popover popover-content="html">
  <a href="#">Launch the popover!</a>
</wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverContent="html">
  <a href="#">Launch the popover!</a>
</WistiaPlayer
```

Using a link-based popover will still load in a thumbnail from Wistia, adding to the page load. To prevent this from happening, implement the [`poster`](https://docs.wistia.com/docs/wip-aurora-embed-options#poster) embed option with a custom image or a meaningless string.

We recommend using this image URL which is a tiny, base64-encoded, fully transparent `.png` image:

```Text Example image URL
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=
```

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player
  media-id="abc123"
  wistia-popover
  popover-content="html"
  poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
>
  <a href="#">Launch the popover!</a>
</wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer
  id="my-player"
  mediaId="abc123"
  wistiaPopover={true}
  popoverContent="html"
  poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
>
  <a href="#">Launch the popover!</a>
</WistiaPlayer>
```

***

### `popover-disable-autoplay`

Enables/disables autoplaying the popover as soon as it is opened. If autoplay is disabled, launching the popover will not automatically play the media—it will require an additional click. You will see the thumbnail of the video when you click the initial thumbnail display for the popover.

| HTML attribute             | JavaScript property      | Type      | Default value | Example values  |
| :------------------------- | :----------------------- | :-------- | :------------ | :-------------- |
| `popover-disable-autoplay` | `popoverDisableAutoplay` | `boolean` | `false`       | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-disable-autoplay></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverDisableAutoplay={true} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverDisableAutoplay = true;
  player.popoverDisableAutoplay; // Returns `true`
</script>
```

***

### `popover-overlay-color`

Sets the background color of the popover's overlay. Expects a six-character hexadecimal RGB string like `#2949E5`. The string can include or exclude the preceding `#` character.

| HTML attribute          | JavaScript property   | Type     | Default value | Example values          |
| :---------------------- | :-------------------- | :------- | :------------ | :---------------------- |
| `popover-overlay-color` | `popoverOverlayColor` | `string` | `"000000"`    | `"#ffffff"`, `"2949E5"` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-overlay-color="2949E5"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverOverlayColor="2949E5" />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverOverlayColor = "2949E5";
  player.popoverOverlayColor; // Returns `"2949E5"`
</script>
```

***

### `popover-overlay-opacity`

Sets the opacity of the popover's overlay. Expects a decimal value between 0 and 1.

| HTML attribute            | JavaScript property     | Type     | Default value | Example values |
| :------------------------ | :---------------------- | :------- | :------------ | :------------- |
| `popover-overlay-opacity` | `popoverOverlayOpacity` | `number` | `0.5`         | `0`, `1`       |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-overlay-opacity="0.75"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverOverlayOpacity={0.75} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverOverlayOpacity = 0.75;
  player.popoverOverlayOpacity; // Returns `0.75`
</script>
```

***

### `popover-prevent-scroll`

By default, popovers render an overlay covering the entire document. But they do not stop the user from scrolling the content behind the video. Set this to `true` if you would like to prevent the user from scrolling content.

> 🙌 
> 
> **Note**: It accomplishes this by setting `height:100%; overflow:hidden;` CSS properties on the `<body>` element. If you have a custom scrolling implementation, this will not prevent scrolling in it. To implement a custom solution, you may want to bind to the `popover-show` and `popover-hide` events.

| HTML attribute           | JavaScript property    | Type      | Default value | Example values  |
| :----------------------- | :--------------------- | :-------- | :------------ | :-------------- |
| `popover-prevent-scroll` | `popoverPreventScroll` | `boolean` | `false`       | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-prevent-scroll></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverPreventScroll={true} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverPreventScroll = true;
  player.popoverPreventScroll; // Returns `true`
</script>
```

***

### `popover-show-on-load`

Enables/disables the popover launching as soon as it is loaded, as if it was clicked. This may be useful for landing pages where you want the video to be front and center but don't otherwise have the space.

| HTML attribute         | JavaScript property | Type      | Default value | Example values  |
| :--------------------- | :------------------ | :-------- | :------------ | :-------------- |
| `popover-show-on-load` | `popoverShowOnLoad` | `boolean` | `false`       | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover popover-show-on-load></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" wistiaPopover={true} popoverShowOnLoad={true} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.popoverShowOnLoad = true;
  player.popoverShowOnLoad; // Returns `true`
</script>
```

***

## Events

### `popover-show`

Fires when the popover becomes visible.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("popover-show", () => {
    console.log("The popover for", player.mediaId, "is visible!");
    
    // Example output: "The popover for abc123 is visible!"
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  function handlePopoverShow() {
    if (player.current === null) { return; }
    console.log("The popover for", player.current.mediaId, "is visible!");
    
    // Example output: "The popover for abc123 is visible!"
  };
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" wistiaPopover={true} onPopoverShow={handlePopoverShow} />
  );
}
```

***

### `popover-hide`

Fires when the popover is hidden.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("popover-hide", () => {
    console.log("The popover for", player.mediaId, "is hidden!");
    
    // Example output: "The popover for abc123 is hidden!"
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  function handlePopoverHide() {
    if (player.current === null) { return; }
    console.log("The popover for", player.current.mediaId, "is hidden!");
    
    // Example output: "The popover for abc123 is hidden!"
  };
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" wistiaPopover={true} onPopoverHide={handlePopoverHide} />
  );
}
```

***

## Methods

### `showPopover()`

If the popover is hidden, this will show it.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<button type="button" id="custom-show-button">Show Popover</button>

<script>
  const player = document.getElementById("my-player");
  const customShowButton = document.getElementById('custom-show-button');

  // When our custom button is clicked, show the popover.
  customShowButton.addEventListener("click", () => {
    player.showPopover();
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // When our custom button is clicked, show the popover.
  function handleClick() {
    if (player.current === null) { return; }
    player.current.showPopover();
  };
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" wistiaPopover={true} />
    <button type="button" onClick={handleClick}>Show Popover</button>
  );
}
```

***

### `hidePopover()`

If the popover is open, this will hide it.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" wistia-popover></wistia-player>

<button type="button" id="custom-hide-button">Hide Popover</button>

<script>
  const player = document.getElementById("my-player");
  const customHideButton = document.getElementById('custom-hide-button');

  // When our custom button is clicked, hide the popover.
  customHideButton.addEventListener("click", () => {
    player.hidePopover();
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // When our custom button is clicked, hide the popover.
  function handleClick() {
    if (player.current === null) { return; }
    player.current.hidePopover();
  };
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" wistiaPopover={true} />
    <button type="button" onClick={handleClick}>Hide Popover</button>
  );
}
```

***

## Tips and examples

### Simple custom popover button

The simplest way to create a custom button or element for your popover starts with the [`popover-content`](#popover-content) embed option, like this one:

#### Example:

[block:html]
{
  "html": "<wistia-player media-id=\"ns6e2w2xw1\" wistia-popover popover-content=\"html\">\n  <a href=\"#\">Launch the popover!</a>\n</wistia-player>"
}
[/block]


```html Example code
<script src="https://fast.wistia.com/embed/ns6e2w2xw1.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player media-id="ns6e2w2xw1" wistia-popover popover-content="html">
  <a href="#">Launch the popover!</a>
</wistia-player>
```

The anchor element, `<a href="#">`, inside of the `<wistia-player>` container opens the popover. So you can replace the link text `Launch the popover!` with a `button`, `img`, or other desired element!

#### Example:

[block:html]
{
  "html": "<wistia-player media-id=\"ns6e2w2xw1\" wistia-popover popover-content=\"html\">\n  <a href=\"#\"><button type=\"button\">Click Me!</button></a>\n</wistia-player>"
}
[/block]


```html Example code
<script src="https://fast.wistia.com/embed/ns6e2w2xw1.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player media-id="ns6e2w2xw1" wistia-popover popover-content="html">
  <a href="#"><button type="button">Click Me!</button></a>
</wistia-player>
```

***

### Custom popover button using embed links

If you need the popover to open from a custom button but are unable to place the button inside of the `<wistia-player>`, for example when embedding within a specific theme or template, you can use Wistia's [embed links](https://docs.wistia.com/docs/embed-links) to get around this limitation. Similar to the example above, we'll first embed a text link popover on the page, and simply remove the link inside of the `<wistia-player>` element:

```html
<script src="https://fast.wistia.com/embed/ns6e2w2xw1.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player media-id="ns6e2w2xw1" wistia-popover popover-content="html"></wistia-player>
```

This will embed the video, but keep it hidden until the button is clicked. Next, we'll construct an embed link that points to the `media-id` of our video:

```Text Embed link ID
#wistia_ns6e2w2xw1
```

The final step is to make sure that a button links to `#wistia_ns6e2w2xw1`. If the video is successfully embedded on the page and the media id of the embed link matches the embed code, this should open the popover when clicked.

#### Example:

[block:html]
{
  "html": "<wistia-player media-id=\"ns6e2w2xw1\" wistia-popover popover-content=\"html\"></wistia-player>\n\n<a href=\"#wistia_ns6e2w2xw1\">\n  <button type=\"Click me!\">Click me!</button>\n</a>"
}
[/block]


```html Example code
<script src="https://fast.wistia.com/embed/ns6e2w2xw1.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player media-id="ns6e2w2xw1" wistia-popover popover-content="html"></wistia-player>

<a href="#wistia_ns6e2w2xw1">
  <button type="Click me!">Click me!</button>
</a>
```