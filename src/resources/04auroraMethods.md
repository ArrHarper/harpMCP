## Quick reference

| Name                                                                     | Description                                                                                |
| :----------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| [`cancelFullscreen()`](#cancelfullscreen)                                | Exits fullscreen if the media is playing in fullscreen mode.                               |
| [`definePlugin(name, options)`](#definepluginname-options)               | Defines a plugin on the player.                                                            |
| [`getPlugin(name)`](#getpluginname)                                      | Gets a plugin from the player.                                                             |
| [`pause()`](#pause)                                                      | Pauses the media.                                                                          |
| [`play()`](#play)                                                        | Plays the media.                                                                           |
| [`releaseControls(requesterName)`](#releasecontrolsrequestername)        | Registers that `requesterName` would like the controls to return to their normal behavior. |
| [`replaceWithMedia(mediaId, options)`](#replacewithmediamediaid-options) | Replaces the content of the current media with the media identified by the `mediaId`.      |
| [`requestControls(requesterName)`](#requestcontrolsrequestername)        | Registers that `requesterName` would like the controls to be visible.                      |
| [`requestFullscreen()`](#requestfullscreen)                              | Attempts to enter fullscreen mode.                                                         |

***

## Try it!

<WistiaPlayerMethodsDemo />

***

## Using methods

The methods we've included can be used to further customize and add functionality to the player. As long as you have a reference to your `<wistia-player>` element, you can use methods like `play()` by calling `<wistia-player>.play()`.

```html HTML + JavaScript
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player id="my-player" media-id="abc123"></wistia-player>

<button type="button" id="my-play-button">Play</button>

<script>
  const player = document.getElementById("my-player");
  const myPlayButton = document.getElementById("my-play-button");
  
  // When our custom button is clicked, play the video.
  myPlayButton.addEventListener("click", () => {
    player.play();
  });
</script>
```

You can also target every `<wistia-player>` on your page at once using browser functions like `getElementsByTagName()`:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player id="my-player-1" media-id="abc123"></wistia-player>
<wistia-player id="my-player-2" media-id="def456"></wistia-player>
<wistia-player id="my-player-3" media-id="ghi789"></wistia-player>

<button type="button" id="custom-play-all-button">Chaos!</button>

<script>
  const allPlayers = document.getElementsByTagName("wistia-player");
  const playAllButton = document.getElementById("custom-play-all-button");

  // When our custom button is clicked, play every video we can find!
  playAllButton.addEventListener("click", () => {
    for (const player of allPlayers) {
      player.play();
    }
  });
</script>
```

Methods can also be used with the React component version of the player, [`<WistiaPlayer>`](https://docs.wistia.com/docs/player-react-component). 

```jsx React
import { useRef } from 'react';
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // When our custom button is clicked, play the video.
  function handleClick() {
    if (player.current === null) { return; }
    player.current.play();
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" />
    <button type="button" onClick={handleClick}>Play</button>
  );
}
```

***

### `cancelFullscreen()`

Exits fullscreen if the media is playing in fullscreen mode.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<button type="button" id="custom-cancel-button">Cancel Fullscreen</button>

<script>
  const player = document.getElementById("my-player");
  const customCancelButton = document.getElementById("custom-cancel-button");

  // When our custom button is clicked, exit fullscreen.
  customCancelButton.addEventListener("click", () => {
    player.cancelFullscreen();
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // When our custom button is clicked, exit fullscreen.
  function handleClick() {
    if (player.current === null) { return; }
    player.current.cancelFullscreen();
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" />
    <button type="button" onClick={handleClick}>Cancel Fullscreen</button>
  );
}
```

***

### `definePlugin(name, options)`

Defines a plugin on the player. For more information on plugins, see our [Plugin API Documentation](https://docs.wistia.com/docs/plugin-api).

#### Parameters:

| Name      | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `name`    | `string` | **Required**. The name of the plugin.    |
| `options` | `object` | The options to be defined on the plugin. |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  
  // As soon as the player embed has an api, add a plugin.
  player.addEventListener("api-ready", () => {
    player.definePlugin("turnstile", {
      time: "before",
      topText: "Please enter your email to view this video.",
    });
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // As soon as the player embed has an api, add a plugin.
  function handleApiReady() {
    if (player.current === null) { return; }
    player.current.definePlugin("turnstile", {
      time: "before",
      topText: "Please enter your email to view this video.",
    });
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onApiReady={handleApiReady} />
  );
}
```

***

### `getPlugin(name)`

Gets a plugin from the player. For more information on plugins, see our [Plugin API Documentation](https://docs.wistia.com/docs/plugin-api).

#### Parameters:

| Name   | Type     | Description                           |
| :----- | :------- | :------------------------------------ |
| `name` | `string` | **Required**. The name of the plugin. |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  
  // As soon as the player embed has an api, get an existing plugin.
  player.addEventListener("api-ready", () => {
    player.getPlugin("turnstile");
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // As soon as the player embed has an api, get an existing plugin.
  function handleApiReady() {
    if (player.current === null) { return; }
    player.current.getPlugin("turnstile");
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onApiReady={handleApiReady} />
  );
}
```

***

### `pause()`

Pauses the media. If this is called and the video's [`state`](https://docs.wistia.com/docs/player-attributes-and-properties#state) is `"playing"`, it's expected that the state will change to `"paused"`.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<button type="button" id="custom-pause-button">Pause</button>

<script>
  const player = document.getElementById("my-player");
  const customPauseButton = document.getElementById("custom-pause-button");

  // When our custom button is clicked, pause the video.
  customPauseButton.addEventListener("click", () => {
    player.pause();
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // When our custom button is clicked, pause the video.
  function handleClick() {
    if (player.current === null) { return; }
    player.current.pause();
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" />
    <button type="button" onClick={handleClick}>Pause</button>
  );
}
```

***

### `play()`

Plays the media. If this is called, it is expected that the media's [`state`](https://docs.wistia.com/docs/player-attributes-and-properties#state) will change to `"playing"`.

> ❗️ About play...
> 
> On iOS, desktop Safari, and other mobile devices, videos cannot be issued the "play" command outside the context of a user-driven or video event.
> 
> For example, "click" and "touch" events are user-driven, and video events include "pause" and "ended" (you can listen for these using `player.addEventListener(eventType, callbackFn)` described in the [Events Documentation](https://docs.wistia.com/docs/player-events). Because of this restriction, you should avoid calling `play()` within a `setTimeout` callback or other asynchronous functions like XHR or JavaScript promises.
> 
> Please refer to [Apple's Documentation](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html) for the reasons behind this behavior.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<button type="button" id="custom-play-button">Play</button>

<script>
  const player = document.getElementById("my-player");
  const customPlayButton = document.getElementById("custom-play-button");

  // When our custom button is clicked, play the video.
  customPlayButton.addEventListener("click", () => {
    player.play();
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // When our custom button is clicked, play the video.
  function handleClick() {
    if (player.current === null) { return; }
    player.current.play();
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" />
    <button type="button" onClick={handleClick}>Play</button>
  );
}
```

***

### `releaseControls(requesterName)`

Registers that `requesterName` would like the player controls to return to their normal behavior.

#### Parameters:

| Name            | Type     | Description                                                                                  |
| :-------------- | :------- | :------------------------------------------------------------------------------------------- |
| `requesterName` | `string` | **Required**. Name of the requester which no longer needs the player controls to be visible. |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<button type="button" id="custom-release-button">Release Controls</button>

<script>
  const player = document.getElementById("my-player");
  const customReleaseButton = document.getElementById("custom-release-button");

  // When our custom button is clicked, release the player controls.
  customReleaseButton.addEventListener("click", () => {
    player.releaseControls("my-requester");
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // When our custom button is clicked, release the player controls.
  function handleClick() {
    if (player.current === null) { return; }
    player.current.releaseControls("my-requester");
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" />
    <button type="button" onClick={handleClick}>Release Controls</button>
  );
}
```

***

### `replaceWithMedia(mediaId, options)`

> 🙌 
> 
> **Note**: Before using this, you might want to see if [embed and playlist links](https://docs.wistia.com/docs/embed-links#simple-playlist-link-example) cover your use case.

Replaces the content of the current media with the media identified by the `mediaId`.

This media will be loaded with all its customizations, which can be overridden in the `options` object. This method can be used in conjunction with [`addToPlaylist(media, options, position)`](#addtoplaylistmediaid-options-position) to create custom playlist implementations.

In addition to the normal embed options, you can set the `transition` option, which defines how to visually transition to the new video. Available values are `"slide"`, `"fade"`, `"crossfade"`, and `"none"`. By default, `"fade"` is used.

#### Parameters:

| Name      | Type     | Description                                                                                                                                |
| :-------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `mediaId` | `string` | **Required**. The ID of the new media to be shown in the player.                                                                           |
| `options` | `object` | [Embed options](https://docs.wistia.com/docs/player-attributes-and-properties) to be set on the new media and the `transition` to be used. |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<button type="button" id="replace-video-button">Replace Video</button>

<script>
  const player = document.getElementById("my-player");
  const customReplaceButton = document.getElementById('replace-video-button');

  // When our custom button is clicked, replace the video.
  customReplaceButton.addEventListener('click', () => {
    player.replaceWithMedia("def456", {
      playerColor: "00ff00",
      transition: "slide",
    });
  );
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // When our custom button is clicked, replace the video.
  function handleClick() {
    if (player.current === null) { return; }
    player.current.replaceWithMedia("def456", {
      playerColor: "00ff00",
      transition: "slide",
    });
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" />
    <button type="button" onClick={handleClick}>Replace Video</button>
  );
}
```

***

### `requestControls(requesterName)`

Registers that `requesterName` would like the player controls to be visible.

#### Parameters:

| Name            | Type     | Description                                                                             |
| :-------------- | :------- | :-------------------------------------------------------------------------------------- |
| `requesterName` | `string` | **Required**. Name of the requester which would like the player controls to be visible. |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<button type="button" id="custom-request-button">Request Controls</button>

<script>
  const player = document.getElementById("my-player");
  const customRequestButton = document.getElementById('custom-request-button');

  // When our custom button is clicked, request the player controls.
  customRequestButton.addEventListener("click", () => {
    player.requestControls("my-requester");
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // When our custom button is clicked, request the player controls.
  function handleClick() {
    if (player.current === null) { return; }
    player.current.requestControls("my-requester");
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" />
    <button type="button" onClick={handleClick}>Request Controls</button>
  );
}
```

***

### `requestFullscreen()`

Attempts to enter fullscreen mode.

> 🙌 
> 
> **Note**: This method will only work if called in response to a user-initiated event, such as a click or a keyboard event. It will not work if called as part of an async operation, such as a timeout.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<button type="button" id="custom-fullscreen-button">Request Fullscreen</button>

<script>
  const player = document.getElementById("my-player");
  const customFullscreenButton = document.getElementById('custom-fullscreen-button');

  // When our custom button is clicked, enter fullscreen.
  customFullscreenButton.addEventListener("click", () => {
    player.requestFullscreen();
  });
</script>
```

```jsx React
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  // When our custom button is clicked, enter fullscreen.
  function handleClick() {
    if (player.current === null) { return; }
    player.current.requestFullscreen();
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" />
    <button type="button" onClick={handleClick}>Request Fullscreen</button>
  );
}
```