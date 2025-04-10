# Aurora player api: read-only properties reference

## `buffered`
**Read only**. Returns a `TimeRanges` object that represents the ranges of the media resource that the user agent has buffered.

| JavaScript property | Type     | Example values                                        |
| :------------------ | :------- | :---------------------------------------------------- |
| `buffered`          | `object` | `{ end: end(index), length: 1, start: start(index) }` |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>
<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(player.buffered);
  // Example output: TimeRanges{ end: end(index), length: 1, start: start(index) }
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";
export default function App() {
  const player = useRef(null);
  function handleApiReady() {
    if (player.current === null) { return; }
    console.log(player.current.buffered);
    // Example output: TimeRanges{ end: end(index), length: 1, start: start(index) }
  }
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onApiReady={handleApiReady} />
  );
}
```

## `duration`
**Read only**. Returns the duration of the media as a decimal in seconds. This will return `0` until the [`on-api-ready`](https://docs.wistia.com/docs/player-events#on-api-ready) event has fired.

| JavaScript property | Type     | Example values      |
| :------------------ | :------- | :------------------ |
| `duration`          | `number` | `5.125`, `120`, `0` |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>
<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(`This video is ${player.duration} seconds long.`);
  // Example output: "This video is 120 seconds long."
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";
export default function App() {
  const player = useRef(null);
  function handleApiReady() {
    if (player.current === null) { return; }
    console.log(`This video is ${player.current.duration} seconds long.`);
    // Example output: "This video is 120 seconds long."
  }
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onApiReady={handleApiReady} />
  );
}
```

## `embedOptions`
**Read only**. Returns all the embed options being set on the player from attributes and media data.

| JavaScript property | Type     | Example values                                              |
| :------------------ | :------- | :---------------------------------------------------------- |
| `embedOptions`      | `object` | `{}`, `{ playerColor: "00ff00", fullscreenControl: false }` |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>
<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(player.embedOptions);
  // Example output: { playerColor: "00ff00", fullscreenControl: false }
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";
export default function App() {
  const player = useRef(null);
  function handleApiReady() {
    if (player.current === null) { return; }
    console.log(player.current.embedOptions);
    // Example output: { playerColor: "00ff00", fullscreenControl: false }
  }
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onApiReady={handleApiReady} />
  );
}
```

## `ended`
**Read only**. Returns `true` if the media has ended playback.

| JavaScript property | Type      | Example values  |
| :------------------ | :-------- | :-------------- |
| `ended`             | `boolean` | `true`, `false` |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>
<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(`The media has${player.ended ? "" : " not"} ended.`);
  // Example output: "The media has ended."
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";
export default function App() {
  const player = useRef(null);
  function handleEnded() {
    if (player.current === null) { return; }
    console.log(`The media has${player.current.ended ? "" : " not"} ended.`);
    // Example output: "The media has ended."
  }
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onEnded={handleEnded} />
  );
}
```

## `eventKey`
**Read only**. Returns the `event_key` for the current viewing session, if it exists. You can get all events for your account from the [Stats API](https://docs.wistia.com/docs/stats-api#events).

| JavaScript property | Type                    | Example values                   |
| :------------------ | :---------------------- | :------------------------------- |
| `eventKey`          | `string` \| `undefined` | `undefined`, `"123-abc-4567-89"` |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>
<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(player.eventKey);
  // Example output: "123-abc-4567-89"
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";
export default function App() {
  const player = useRef(null);
  function handleApiReady() {
    if (player.current === null) { return; }
    console.log(player.current.eventKey);
    // Example output: "123-abc-4567-89"
  }
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onApiReady={handleApiReady} />
  );
}
```

## `inFullscreen`
**Read only**. Returns `true` if the media is currently in fullscreen.

| JavaScript property | Type      | Example values  |
| :------------------ | :-------- | :-------------- |
| `inFullscreen`      | `boolean` | `true`, `false` |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>
<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(`The player is${player.inFullscreen ? "" : " not"} currently in fullscreen.`);
  // Example output: "The player is not currently in fullscreen."
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";
export default function App() {
  const player = useRef(null);
  function handleCancelFullscreen() {
    if (player.current === null) { return; }
    console.log(`The player is${player.current.inFullscreen ? "" : " not"} currently in fullscreen.`);
    // Example output: "The player is not currently in fullscreen."
  }
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onCancelFullscreen={handleCancelFullscreen} />
  );
}
```

## `name`
**Read only**. Returns the name of the media, as defined in the Wistia application. Returns `undefined` until the [`loaded-media-data`](https://docs.wistia.com/docs/player-events#loaded-media-data) event has fired.

| JavaScript property | Type                    | Example values                                            |
| :------------------ | :---------------------- | :-------------------------------------------------------- |
| `name`              | `string` \| `undefined` | `"My Video Title"`, `"Lenny Delivers Video"`, `undefined` |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(player.name);
  // Example output: "Lenny Delivers Video"
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  function handleLoadedMediaData() {
    if (player.current === null) { return; }
    console.log(player.current.name);
    // Example output: "Lenny Delivers Video"
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onLoadedMediaData={handleLoadedMediaData} />
  );
}
```

## `paused`
**Read only**. Returns `true` if the media is paused.

| JavaScript property | Type      | Example values  |
| :------------------ | :-------- | :-------------- |
| `paused`            | `boolean` | `true`, `false` |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(`The player is${player.paused ? "" : " not"} paused.`);
  // Example output: "The player is paused."
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  function handlePause() {
    if (player.current === null) { return; }
    console.log(`The player is${player.current.paused ? "" : " not"} paused.`);
    // Example output: "The player is paused."
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onPause={handlePause} />
  );
}
```

## `percentWatched`
**Read only**. Returns the percent of the media that has been watched as a decimal between `0` and `1`.  This is equivalent to computing `player.secondsWatched / Math.floor(player.duration)`.

This percentage value is relative to where a viewer started playback during their viewing session. For example, if a viewer starts the video in the middle and watches it to the end, `player.percentWatched` will return `0.5`. If that same viewer in that same session then starts the video from the beginning and watches to the middle, `player.percentWatched` will return `1`, as the whole video has now been watched.

| JavaScript property | Type     | Example values |
| :------------------ | :------- | :------------- |
| `percentWatched`    | `number` | `0`, `0.7525`  |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(`The viewer has watched ${(player.percentWatched * 100)}% of the video.`);
  // Example output: "The viewer has watched 75.25% of the video."
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  function handlePercentWatchedChange() {
    if (player.current === null) { return; }
    console.log(`The viewer has watched ${(player.current.percentWatched * 100)}% of the video.`);
    // Example output: "The viewer has watched 75.25% of the video."
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onPercentWatchedChange={handlePercentWatchedChange} />
  );
}
```

## `readyState`
**Read only**. Returns a value that expresses the current state of the element with respect to rendering the current playback position.

| JavaScript property | Type     | Example values |
| :------------------ | :------- | :------------- |
| `readyState`        | `number` | `0`, `4`       |

### Possible values:
| Value | Corresponding state | Description                                                                                                                                                         |
| :---- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `0`   | `HAVE_NOTHING`      | No information regarding the media resource is available.                                                                                                           |
| `1`   | `HAVE_METADATA`     | Enough of the resource has been obtained that the duration of the resource is available.                                                                            |
| `2`   | `HAVE_CURRENT_DATA` | Data for the immediate current playback position is available.                                                                                                      |
| `3`   | `HAVE_FUTURE_DATA`  | Data for the immediate current playback position is available and there is enough data for future playback without having to immediately revert to `HAVE_METADATA`. |
| `4`   | `HAVE_ENOUGH_DATA`  | All previous conditions are met and data is loading at a pace which will not be overtaken by the default playback rate.                                             |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(player.readyState)
  // Example output: 4
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  function handleApiReady() {
    if (player.current === null) { return; }
    console.log(player.current.readyState)
    // Example output: 4
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onApiReady={handleApiReady} />
  );
}
```

## `secondsWatched`
**Read only**. Returns the number of unique seconds that have been watched for the media. This does not include seconds that have been skipped by seeking.

| JavaScript property | Type     | Example values |
| :------------------ | :------- | :------------- |
| `secondsWatched`    | `number` | `0`, `24`      |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(`The viewer has watched ${player.secondsWatched} seconds.`);
  // Example output: "The viewer has watched 24 seconds."
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  function handleSecondChange() {
    if (player.current === null) { return; }
    console.log(`The viewer has watched ${player.current.secondsWatched} seconds.`);
    // Example output: "The viewer has watched 24 seconds."
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onSecondChange={handleSecondChange} />
  );
}
```

## `secondsWatchedVector`
**Read only**. Returns an `array` where each index represents the number of times the viewer has watched each second of the media. This can be used to quickly determine if a viewer has missed or rewatched an important part of a video.

 For example, if a media is 10 seconds long and the viewer has watched the first three seconds, it will look like this:

```
[1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
```

If the viewer has watched the entire video once and rewatched the first 5 seconds, it will look like this:

```
[2, 2, 2, 2, 2, 1, 1, 1, 1, 1]
```

| JavaScript property    | Type     | Example values                                |
| :--------------------- | :------- | :-------------------------------------------- |
| `secondsWatchedVector` | `object` | `[1, 1, 0, 0, 0]`, `[1, 2, 1, 2, 2, 1, 1, 1]` |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  player.addEventListener("ended", () => {
    var watchedVector = player.secondsWatchedVector;
    var watchedImportantSeconds = 0;
    for (var i = 4; i < 9; i++) {
      if (watchedVector[i] > 0) {
        watchedImportantSeconds += 1;
      }
     }
    if (watchedImportantSeconds < 2) {
      console.log("You should really go back and watch seconds 5 through 10. They're important!");
    }
  });
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  function handleEnded() {
    if (player.current === null) { return; }
    var watchedVector = player.current.secondsWatchedVector;
    var watchedImportantSeconds = 0;
    for (var i = 4; i < 9; i++) {
      if (watchedVector[i] > 0) {
        watchedImportantSeconds += 1;
      }
    }
    if (watchedImportantSeconds < 2) {
      console.log("You should really go back and watch seconds 5 through 10. They're important!");
    }
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onEnded={handleEnded} />
  );
}
```

## `state`
**Read only**. Returns the current state of the media. The most common use case for `state` is implementing a play/pause toggle button.

| JavaScript property | Type     | Example values  |
| :------------------ | :------- | :-------------- |
| `state`             | `string` | `true`, `false` |

### Possible values:
| Value          | Description                               |
| :------------- | :---------------------------------------- |
| `"beforeplay"` | Initial state of the media.               |
| `"playing"`    | The media is currently playing.           |
| `"paused"`     | The media was playing, but is now paused. |
| `"ended"`      | The media has ended playback.             |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>
<button type="button" id="play-pause-button">Play / Pause</button>

<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  const customPlayPauseButton = document.getElementById('play-pause-button');

  customPlayPauseButton.addEventListener('click', () => {
    if (player.state === 'playing') { // Read player state
      player.pause();
    } else {
      player.play();
    }
  });
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  function handleClick() {
    if (player.current === null) { return; }
    
    if (player.current.state === 'playing') { // Read player state
      player.current.pause();
    } else {
      player.current.play();
    }
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" />
    <button type="button" onClick={handleClick}>Play / Pause</button>
  );
}
```

## `visitorKey`
**Read only**. Returns the unique visitor key of the person watching the video. This is used to associate multiple viewing sessions with a single person. You can use it to filter [events](https://docs.wistia.com/reference/get_events-event-key-json) in the Stats API.

| JavaScript property | Type     | Example values           |
| :------------------ | :------- | :----------------------- |
| `visitorKey`        | `string` | `"123_abc"`, `undefined` |

### Example code:
```html HTML + JavaScript: Read player value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById('my-player'); // Finds the existing player
  console.log(`This viewer's visitor key is ${player.visitorKey}.`);
  // Example output: "This viewer's visitor key is 123_abc."
</script>
```

```jsx React: Read player value
import { useRef } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function App() {
  const player = useRef(null);
  
  function handlePlay() {
    if (player.current === null) { return; }
    console.log(`This viewer's visitor key is ${player.current.visitorKey}.`);
    // Example output: "This viewer's visitor key is 123_abc."
  }
  
  return (
    <WistiaPlayer ref={player} mediaId="abc123" onPlay={handlePlay} />
  );
}
```