## Quick reference

| Name                                                          | React name                                                   | Description                                                                                                                                                                    |
| :------------------------------------------------------------ | :----------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`api-ready`](#api-ready)                                     | [`onApiReady`](#api-ready)                                   | The api of the `<wistia-player>` embed has been initialized and is ready for interaction.                                                                                      |
| [`cancel-fullscreen`](#cancel-fullscreen)                     | [`onCancelFullscreen`](#cancel-fullscreen)                   | The video has left fullscreen mode.                                                                                                                                            |
| [`can-play`](#can-play)                                       | [`onCanPlay`](#can-play)                                     | The browser can play the media, but it estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content. |
| [`can-play-through`](#can-play-through)                       | [`onCanPlayThrough`](#can-play-through)                      | The browser estimates it can play the media up to its end without stopping for content buffering.                                                                              |
| [`captions-change`](#captions-change)                         | [`onCaptionsChange`](#captions-change)                       | A different caption setting has been selected in the player.                                                                                                                   |
| [`conversion`](#conversion)                                   | [`onConversion`](#conversion)                                | An email has been entered into a Turnstile.                                                                                                                                    |
| [`ended`](#ended)                                             | [`onEnded`](#ended)                                          | The media's `state` has changed to `"ended"`.                                                                                                                                  |
| [`enter-fullscreen`](#enter-fullscreen)                       | [`onEnterFullscreen`](#enter-fullscreen)                     | The video has entered fullscreen mode.                                                                                                                                         |
| [`loaded-data`](#loaded-data)                                 | [`onLoadedData`](#loaded-data)                               | The first frame of the media has finished loading.                                                                                                                             |
| [`loaded-media-data`](#loaded-media-data)                     | [`onLoadedMediaData`](#loaded-media-data)                    | The media data of the media has been loaded.                                                                                                                                   |
| [`loaded-metadata`](#loaded-metadata)                         | [`onLoadedMetadata`](#loaded-metadata)                       | The metadata of the media has been loaded. May be delayed until user interaction with the video.                                                                               |
| [`load-start`](#load-start)                                   | [`onLoadStart`](#load-start)                                 | The browser has started to load a `<wistia-player>` embed.                                                                                                                     |
| [`mute-change`](#mute-change)                                 | [`onMuteChange`](#mute-change)                               | The media's `muted` state has changed.                                                                                                                                         |
| [`pause`](#pause)                                             | [`onPause`](#pause)                                          | The media's `state` has changed to `"paused"`.                                                                                                                                 |
| [`percent-watched-change`](#percent-watched-change)           | [`onPercentWatchedChange`](#percent-watched-change)          | The value of `percentWatched` has changed.                                                                                                                                     |
| [`play`](#play)                                               | [`onPlay`](#play)                                            | The media's `state` has changed to `"playing"`.                                                                                                                                |
| [`rate-change`](#rate-change)                                 | [`onRateChange`](#rate-change)                               | The playback rate of the media has changed.                                                                                                                                    |
| [`second-change`](#second-change)                             | [`onSecondChange`](#second-change)                           | The current second of the video has changed.                                                                                                                                   |
| [`seeked`](#seeked)                                           | [`onSeeked`](#seeked)                                        | A seek operation has completed.                                                                                                                                                |
| [`seeking`](#seeking)                                         | [`onSeeking`](#seeking)                                      | A seek operation has begun.                                                                                                                                                    |
| [`silent-playback-mode-change`](#silent-playback-mode-change) | [`onSilentPlaybackModeChange`](#silent-playback-mode-change) | The value of `silentAutoplay` has changed.                                                                                                                                     |
| [`time-update`](#time-update)                                 | [`onTimeUpdate`](#time-update)                               | The `currentTime` property is different from the `lastTime` property.                                                                                                          |
| [`volume-change`](#volume-change)                             | [`onVolumeChange`](#volume-change)                           | The volume or mute state has changed.                                                                                                                                          |

***

## Try it!

<WistiaPlayerEventsDemo />

***

## Using events

Events dispatched by `<wistia-player>` can be listened for using `addEventListener` and `removeEventListener`. Events can be dispatched from user interaction (e.g. [`play`](#play), [`pause`](#pause)) or from updates within the player itself (e.g. [`can-play`](can-play), [`time-update`](#time-update)).

```html HTML + JavaScript: Simple events
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("play", () => {
    console.log("The video was just played!");
  });
</script>
```

Some events like [`mute-change`](#mutechange) include additional information in their `details` property:

```html HTML + JavaScript: Events with detail
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("mute-change", (event) => {
    const { isMuted } = event.detail;
    if (isMuted) {
      console.log("The video is muted!");
    } else {
      console.log("The video is not muted!");
    }
  });
</script>
```

Attributes can also be set on the React component version of the player, [`<WistiaPlayer>`](https://docs.wistia.com/docs/player-react-component). They're set as `props` on the component, and are formatted in `camelCase` with an `on` prefix.

```jsx React: Events with detail
import { WistiaPlayer } from "@wistia/wistia-player/react";

export default function App() {
  function handleMuteChange(event) {
    const { isMuted } = event.detail;
    if (isMuted) {
      console.log("The video is muted!");
    } else {
      console.log("The video is not muted!");
    }
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onMuteChange={handleMuteChange} />
  );
}
```

***

### `api-ready`

Fires when the api of the `<wistia-player>` embed has been initialized and is ready for interaction.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("api-ready", () => {
    console.log("This player's api is ready for interaction.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleApiReady() {
    console.log("This player's api is ready for interaction.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onApiReady={handleApiReady} />
  );
}
```

***

### `cancel-fullscreen`

Fires when the video leaves fullscreen mode.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("cancel-fullscreen", () => {
    console.log("The video is no longer playing in fullscreen.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleCancelFullscreen() {
    console.log("The video is no longer playing in fullscreen.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onCancelFullscreen={handleCancelFullscreen} />
  );
}
```

***

### `can-play`

Fires when the browser can play the media, but it estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("can-play", () => {
    console.log("The media can be played, but it will probably have to stop to buffer.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleCanPlay() {
    console.log("The media can be played, but it will probably have to stop to buffer.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onCanPlay={handleCanPlay} />
  );
}
```

***

### `can-play-through`

Fires when the browser estimates it can play the media up to its end without stopping for content buffering.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("can-play-through", () => {
    console.log("The media can be played without stopping for buffering.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleCanPlayThrough() {
    console.log("The media can be played without stopping for buffering.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onCanPlayThrough={handleCanPlayThrough} />
  );
}
```

***

### `captions-change`

Fires when a different caption setting is selected in the player.

This event also includes additional information stored in its `detail` property:

| Name        | Type      | Description                                                                         |
| :---------- | :-------- | :---------------------------------------------------------------------------------- |
| `isVisible` | `boolean` | `true` if captions are currently enabled on the player.                             |
| `language`  | `string`  | The currently enabled caption language represented by a short string of characters. |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("captions-change", (event) => {
    const { isVisible, language } = event.detail;
    console.log(`The captions of this media are now ${isVisible ? "visible" : "hidden"} in ${language} language.`);
    
    // Example output: "The captions of this media are now visible in eng language."
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleCaptionsChange(event) {
    const { isVisible, language } = event.detail;
    console.log(`The captions of this media are now ${isVisible ? "visible" : "hidden"} in ${language} language.`);

    // Example output: "The captions of this media are now visible in eng language."
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onCaptionsChange={handleCaptionsChange} />
  );
}
```

***

### `conversion`

Fires when an email is entered into a Turnstile.

This event also includes additional information stored in its `detail` property:

| Name        | Type     | Description                                                                                                              |
| :---------- | :------- | :----------------------------------------------------------------------------------------------------------------------- |
| `type`      | `string` | Returns `"pre-roll-email"`, `"mid-roll-email"`, or `"post-roll-email"`based on where in the media the Turnstile appears. |
| `email`     | `string` | The `string` the viewer input into the "Email" field of the Turnstile.                                                   |
| `firstName` | `string` | The `string` the viewer input into the "First Name" field of the Turnstile.                                              |
| `lastName`  | `string` | The `string` the viewer input into the "Last Name" field of the Turnstile.                                               |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("conversion", (event) => {
    const { type, email, firstName, lastName } = event.detail;
    console.log(`The viewer ${firstName} ${lastName} entered their email address ${email} into the ${type} Turnstile.`);
    
    // Example output: The viewer Lorem Ipsum entered their email address test@gmail.com into the post-roll-email Turnstile.
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleConversion(event) {
    const { type, email, firstName, lastName } = event.detail;
    console.log(`The viewer ${firstName} ${lastName} entered their email address ${email} into the ${type} Turnstile.`);

    // Example output: The viewer Lorem Ipsum entered their email address test@gmail.com into the post-roll-email Turnstile.
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onConversion={handleConversion} />
  );
}
```

***

### `ended`

Fires when the media's [`state`](https://docs.wistia.com/docs/player-attributes-and-properties#state) changes to `"ended"`.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("ended", () => {
    console.log("Lenny was here.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleEnded() {
    console.log("Lenny was here.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onEnded={handleEnded} />
  );
}
```

***

### `enter-fullscreen`

Fires when the video enters fullscreen mode.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("enter-fullscreen", () => {
    console.log("The video is now playing in fullscreen.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleEnterFullscreen() {
    console.log("The video is now playing in fullscreen.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onEnterFullscreen={handleEnterFullscreen} />
  );
}
```

***

### `loaded-data`

Fires when the first frame of the media has finished loading.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("loaded-data", () => {
    console.log("The first frame of the media has loaded.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleLoadedData() {
  	console.log("The first frame of the media has loaded.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onLoadedData={handleLoadedData} />
  );
}
```

***

### `loaded-media-data`

Fires when media data of the media has been loaded.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("loaded-media-data", () => {
    console.log("The media data of the media has loaded.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleLoadedMediaData() {
    console.log("The media data of the media has loaded.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onLoadedMediaData={handleLoadedMediaData} />
  );
}
```

***

### `loaded-metadata`

Fires when metadata of the media has been loaded. Depending on the browser, this event may be delayed until a user has interacted with the video.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("loaded-metadata", () => {
    console.log("The metadata of the media has loaded.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleLoadedMetadata() {
    console.log("The metadata of the media has loaded.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onLoadedMetadata={handleLoadedMetadata} />
  );
}
```

***

### `load-start`

Fires when the browser has started to load a `<wistia-player>` embed.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("load-start", () => {
    console.log("The player has started loading.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleLoadStart() {
  	console.log("The player has started loading.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onLoadStart={handleLoadStart} />
  );
}
```

***

### `mute-change`

Fires when the media's [`muted`](https://docs.wistia.com/docs/player-attributes-and-properties#muted) state changes.

This event also includes additional information stored in its `detail` property:

| Name      | Type      | Description                                      |
| :-------- | :-------- | :----------------------------------------------- |
| `isMuted` | `boolean` | Returns `true` if the player is currently muted. |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("mute-change", (event) => {
    const { isMuted } = event.detail;
    console.log(`The media is${isMuted ? "" : " not"} muted.`);
    
    // Example output: "The media is muted."
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleMuteChange(event) {
    const { isMuted } = event.detail;
    console.log(`The media is${isMuted ? "" : " not"} muted.`);

    // Example output: "The media is muted."
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onMuteChange={handleMuteChange} />
  );
}
```

***

### `pause`

Fires when the media's [`state`](https://docs.wistia.com/docs/player-attributes-and-properties#state) changes to `"paused"`.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("pause", () => {
    console.log("The video was just paused!");
  );
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handlePause() {
    console.log("The video was just paused!");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onPause={handlePause} />
  );
}
```

***

### `percent-watched-change`

Fires when the value of [`percentWatched`](https://docs.wistia.com/docs/player-attributes-and-properties#percentwatched) changes.

This event also includes additional information stored in its `detail` property:

| Name                 | Type     | Description                                                         |
| :------------------- | :------- | :------------------------------------------------------------------ |
| `percentWatched`     | `number` | The new percent of the media that has been watched.                 |
| `lastPercentWatched` | `number` | The previously recorded percent of the media that has been watched. |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("percent-watched-change", (event) => {
    const { percent, lastPercent } = event.detail;
    if (percent >= .25 && lastPercent < .25) {
      console.log('The viewer has watched 25% of the video! 📈')
    }
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handlePercentWatchedChange(event) {
    const { percent, lastPercent } = event.detail;
    if (percent >= .25 && lastPercent < .25) {
      console.log('The viewer has watched 25% of the video! 📈')
    }
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onPercentWatchedChange={handlePercentWatchedChange} />
  );
}
```

***

### `play`

Fires when the media's [`state`](https://docs.wistia.com/docs/player-attributes-and-properties#state) changes to `"playing"`.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("play", () => {
    console.log("The video was just played!");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handlePlay() {
    console.log("The video was just played!");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onPlay={handlePlay} />
  );
}
```

***

### `rate-change`

Fires when the playback rate of the media changes.

This event also includes additional information stored in its `detail` property:

| Name           | Type     | Description                                                                                             |
| :------------- | :------- | :------------------------------------------------------------------------------------------------------ |
| `playbackRate` | `number` | The playback rate of the media. Normal speed is `1.0`, half speed is `0.5`, double speed is `2.0`, etc. |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("rate-change", (event) => {
    const { playbackRate } = event.detail;
    console.log(`The playback rate is now ${playbackRate}x.`);
  
    // Example output: "The playback rate is now 1.5x."
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleRateChange(event) {
    const { playbackRate } = event.detail;
    console.log(`The playback rate is now ${playbackRate}x.`);

    // Example output: "The playback rate is now 1.5x."
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onRateChange={handleRateChange} />
  );
}
```

***

### `second-change`

Fires when the current second of the video has changed. Technically this is a subset of the `time-update` event, and thus will always fire after `time-update` events but before `seek` events.

This event also includes additional information stored in its `detail` property:

| Name     | Type     | Description                                                              |
| :------- | :------- | :----------------------------------------------------------------------- |
| `second` | `number` | The second as an integer, equivalent to `Math.floor(player.currentTime)` |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("second-change", (event) => {
    const { second } = event.detail;
    if (second === 5) {
      console.log("The media's current time is exactly 5 seconds.");
    }
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleSecondChange(event) {
    const { second } = event.detail;
    if (second === 5) {
      console.log("The media's current time is exactly 5 seconds.");
    }
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onSecondChange={handleSecondChange} />
  );
}
```

***

### `seeked`

Fires when a seek operation has completed.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("seeked", () => {
    console.log("A seek was completed.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleSeeked() {
    console.log("A seek was completed.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onSeeked={handleSeeked} />
  );
}
```

***

### `seeking`

Fires when a seek operation has begun.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("seeking", () => {
    console.log("Started a seek.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleSeeking() {
    console.log("Started a seek.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onSeeking={handleSeeking} />
  );
}
```

***

### `silent-playback-mode-change`

Fires when the value of [`silentAutoplay`](https://docs.wistia.com/docs/player-attributes-and-properties#silent-autoplay) changes.

This event also includes additional information stored in its `detail` property:

| Name                     | Type      | Description                                                            |
| :----------------------- | :-------- | :--------------------------------------------------------------------- |
| `isInSilentPlaybackMode` | `boolean` | Returns `true` if the player is displaying the "Click For Sound" icon. |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("silent-playback-mode-change", (event) => {
    const { isInSilentPlaybackMode } = event.detail;
    console.log(`'Click For Sound' is${isInSilentPlaybackMode ? "" : " not"} visible.`);
    
    // Example output: "'Click For Sound' is not visible."
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleSilentPlaybackModeChange(event) {
    const { isInSilentPlaybackMode } = event.detail;
    console.log(`'Click For Sound' is${isInSilentPlaybackMode ? "" : " not"} visible.`);

    // Example output: "'Click For Sound' is not visible."
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onSilentPlaybackModeChange={handleSilentPlaybackModeChange} />
  );
}
```

***

### `time-update`

Fires when the `currentTime` property is different from the `lastTime` property.

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("time-update", () => {
    console.log("The time of the media changed.");
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleTimeUpdate() {
    console.log("The time of the media changed.");
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onTimeUpdate={handleTimeUpdate} />
  );
}
```

***

### `volume-change`

Fires when the volume or mute state changes.

This event also includes additional information stored in its `detail` property:

| Name      | Type      | Description                                                 |
| :-------- | :-------- | :---------------------------------------------------------- |
| `isMuted` | `boolean` | Returns `true` if the player is currently muted.            |
| `volume`  | `number`  | The volume of the player, as a decimal between `0` and `1`. |

#### Example code:

```html HTML + JavaScript
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player");
  player.addEventListener("volume-change", (event) => {
    const { isMuted, volume } = event.detail;
    console.log(`The media's volume is ${Math.round(volume * 100)}% and it is${isMuted ? "" : " not"} muted.`);
    
    // Example output: "The media's volume is 50% and it is not muted."
  });
</script>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  function handleVolumeChange(event) {
    const { isMuted, volume } = event.detail;
    console.log(`The media's volume is ${Math.round(volume * 100)}% and it is${isMuted ? "" : " not"} muted.`);

    // Example output: "The media's volume is 50% and it is not muted."
  };
  
  return (
    <WistiaPlayer mediaId="abc123" onVolumeChange={handleVolumeChange} />
  );
}
```