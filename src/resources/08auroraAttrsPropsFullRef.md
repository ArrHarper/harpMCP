## Aurora Player Attributes

### `media-id`

**Required**. The unique ID of a media.

To get the media ID for a video, refer to the URL of the media's page in Wistia. The alphanumeric characters following `/medias/` are what you want.

| HTML attribute | JavaScript property | Type     | Default value | Example values             |
| :------------- | :------------------ | :------- | :------------ | :------------------------- |
| `media-id`     | `mediaId`           | `string` | `undefined`   | `"abc123"`, `"ns6e2w2xw1"` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" />
```

***

### `aspect`

Sets the aspect ratio of the player.

| HTML attribute | JavaScript property | Type     | Default value | Example values    |
| :------------- | :------------------ | :------- | :------------ | :---------------- |
| `aspect`       | `aspect`            | `number` | `undefined`   | `1.778`, `16 / 9` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" aspect="1.778"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" aspect={1.778} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.aspect = 1.778;
  player.aspect; // Returns 1.778
</script>
```

***

### `audio-description-control`

Enables/disables the Audio Description Control in the control bar. 

> 🙌 
> 
> **Note**:  If this control is enabled, but no Alternate Audio tracks are found for the video, the control will not appear in the control bar.

| HTML attribute              | JavaScript property       | Type      | Default value | Example values  |
| :-------------------------- | :------------------------ | :-------- | :------------ | :-------------- |
| `audio-description-control` | `audioDescriptionControl` | `boolean` | `false`       | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" audio-description-control="true"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" audioDescriptionControl={true} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.audioDescriptionControl = true;
  player.audioDescriptionControl; // Returns true
</script>
```

***

### `autoplay`

If set to `true` the video will play as soon as it's ready.

You can also add `?wvideo=mediaid` to the end of any URL where a Wistia video is embedded, so that it will automatically start playing when your viewer visits that link. You can test this out in your Wistia account too!

> 🙌 
> 
> **Note**: `autoplay` will not work on iOS and other mobile devices due to restrictions on bandwidth on cellular networks. You can find more information on these restrictions in the [Player API Documentation](https://docs.wistia.com/docs/javascript-player-api#play).
> 
> Videos will autoplay whenever possible, but some browsers (like most mobile browsers and Safari) prevent video autoplay.

| HTML attribute | JavaScript Property | Type      | Default value | Example values  |
| :------------- | :------------------ | :-------- | :------------ | :-------------- |
| `autoplay`     | `autoplay`          | `boolean` | `false`       | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" autoplay></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" autoplay={true} />
```

***

### `big-play-button`

Enables/disables the big play button which appears in the center of the video before play.

| HTML attribute    | JavaScript property | Type      | Default value | Example values  |
| :---------------- | :------------------ | :-------- | :------------ | :-------------- |
| `big-play-button` | `bigPlayButton`     | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" big-play-button="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" bigPlayButton={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.bigPlayButton = false;
  player.bigPlayButton; // Returns `false`
</script>
```

***

### `controls-visible-on-load`

Enables/disables whether the control bar is present on load before play.

| HTML attribute             | JavaScript property     | Type      | Default value | Example values  |
| :------------------------- | :---------------------- | :-------- | :------------ | :-------------- |
| `controls-visible-on-load` | `controlsVisibleOnLoad` | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" controls-visible-on-load="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" controlsVisibleOnLoad={false} />
```

***

### `copy-link-and-thumbnail`

Enables/disables whether the "Copy link and thumbnail" option is present in context menu.

If set to `false`, once your media is embedded on a webpage, the option to "Copy Link and Thumbnail" when you right click on your media will be removed.

> 🙌 
> 
> **Note**: If set to `false`, you will not be able to create a thumbnail that links to the page where the video is embedded.

| HTML attribute            | JavaScript property    | Type      | Default value | Example values  |
| :------------------------ | :--------------------- | :-------- | :------------ | :-------------- |
| `copy-link-and-thumbnail` | `copyLinkAndThumbnail` | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" copy-link-and-thumbnail="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" copyLinkAndThumbnail={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.copyLinkAndThumbnail = false;
  player.copyLinkAndThumbnail; // Returns `false`
</script>
```

***

### `current-time`

Sets the current time of the media as a decimal in seconds.

This option will maintain the state of the video: if the video was playing, it will continue playing after seek. If it was not playing, the video will be paused.

> 🙌 
> 
> **Note**: On iOS, when seeking from the `"beforeplay"` state, setting `player.currentTime` is subject to the same restrictions as `player.play()`. However, there is a bit of nuance. If you set `player.currentTime = 30` before play, the media will not play per the restrictions. But once the viewer clicks the media to play it, it will begin playing 30 seconds in.

| HTML attribute | JavaScript property | Type     | Default value | Example values |
| :------------- | :------------------ | :------- | :------------ | :------------- |
| `current-time` | `currentTime`       | `number` | `0`           | `5`, `10.375`  |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" current-time="5"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" currentTime={5} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.currentTime = 3.5;
  player.currentTime; // Returns `3.5`
</script>
```

***

### `do-not-track`

If set to `true`, disables viewing session tracking for heatmaps and other analytics.

By default, data for each viewing session is tracked and reported back to the Wistia servers for display in heatmaps and aggregation graphs.

| HTML attribute | JavaScript property | Type      | Default value | Example values  |
| :------------- | :------------------ | :-------- | :------------ | :-------------- |
| `do-not-track` | `doNotTrack`        | `boolean` | `false`       | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" do-not-track></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" doNotTrack={true} />
```

***

### `email`

Sets which specific email address should be associated with this media's viewing sessions.

| HTML attribute | JavaScript property | Type     | Default value | Example values      |
| :------------- | :------------------ | :------- | :------------ | :------------------ |
| `email`        | `email`             | `string` | `undefined`   | `"test@wistia.com"` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" email="test@wistia.com"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" email="test@wistia.com" />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.email = 'test@wistia.com';
  player.email; // Returns `test@wistia.com`
</script>
```

***

### `end-video-behavior`

Sets the behavior of the media when it ends.

| HTML attribute       | JavaScript property | Type     | Default value | Example values                   |
| :------------------- | :------------------ | :------- | :------------ | :------------------------------- |
| `end-video-behavior` | `endVideoBehavior`  | `string` | `"default"`   | `"default"`, `"loop"`, `"reset"` |

#### Possible values:

| Value       | Description                                                                               |
| :---------- | :---------------------------------------------------------------------------------------- |
| `"default"` | Default behavior. The video stays on the last frame                                       |
| `"reset"`   | The video shows the thumbnail. Control Bar visibility depends on controls-visible-on-load |
| `"loop"`    | The video plays again from the beginning                                                  |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" end-video-behavior="reset"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" endVideoBehavior="reset" />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.endVideoBehavior = 'reset';
  player.endVideoBehavior; // Returns `'reset'`
</script>
```

***

### `fullscreen-control`

Enables/disables the fullscreen control in the control bar.

> 🙌 
> 
> **Note**: iframe embeds must have the `allowfullscreen` attribute for this option to be meaningful. If `allowfullscreen` attribute is missing, the fullscreen control will not appear.

| HTML attribute       | JavaScript property | Type      | Default value | Example values  |
| :------------------- | :------------------ | :-------- | :------------ | :-------------- |
| `fullscreen-control` | `fullscreenControl` | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" fullscreen-control="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" fullscreenControl={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.fullscreenControl = false;
  player.fullscreenControl; // Returns `false`
</script>
```

***

### `muted`

Enables/disables the audio mute setting of the player.

Set this option to `true` on the initial load of the player if you would like your video to play silently and not show the "Click For Sound" icon.

| HTML attribute | JavaScript property | Type      | Default value | Example values  |
| :------------- | :------------------ | :-------- | :------------ | :-------------- |
| `muted`        | `muted`             | `boolean` | `false`       | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" muted></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" muted={true} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.muted = true;
  player.muted; // Returns `true`
</script>
```

***

### `playback-rate-control`

Enables/disables the playback rate option inside the settings control.

| HTML attribute          | JavaScript property   | Type      | Default value | Example values  |
| :---------------------- | :-------------------- | :-------- | :------------ | :-------------- |
| `playback-rate-control` | `playbackRateControl` | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" playback-rate-control="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" playbackRateControl={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.playbackRateControl = false;
  player.playbackRateControl; // Returns `false`
</script>
```

***

### `play-bar-control`

Enables/disables the play bar in the control bar. The play bar includes the playhead, current time, and scrubbing functionality.

| HTML attribute     | JavaScript property | Type      | Default value | Example values  |
| :----------------- | :------------------ | :-------- | :------------ | :-------------- |
| `play-bar-control` | `playBarControl`    | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" play-bar-control="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" playBarControl={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.playBarControl = false;
  player.playBarcontrol; // Returns `false`
</script>
```

***

### `player-color`

Sets the base color of the player. Expects a six-character hexadecimal RGB string like `#2949E5`. The string can include or exclude the preceding `#` character.

| HTML attribute | JavaScript property | Type     | Default value | Example values          |
| :------------- | :------------------ | :------- | :------------ | :---------------------- |
| `player-color` | `playerColor`       | `string` | `"636155"`    | `"ff0000"`, `"#00FF00"` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" player-color="#2949E5"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" playerColor="#2949E5" />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.playerColor = "1e64f0";
  player.playerColor; // Returns "1e64f0"
</script>
```

***

### `playlist-links`

Associates specially crafted media links on your page with a media, turning all of them together into a playlist. For more detailed information about playlist links and their possible values, check out the full [Embed Links documentation](https://docs.wistia.com/docs/embed-links#advanced-embed-links-targeting).

| HTML attribute   | JavaScript property | Type     | Default value | Example values                         |
| :--------------- | :------------------ | :------- | :------------ | :------------------------------------- |
| `playlist-links` | `playlistLinks`     | `string` | `undefined`   | `"auto"`, `"manual"`, `${containerId}` |

#### Possible values:

| Value            | Description                                                                                                                                                                 |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"auto"`         | [For each video on the page, look for links after the video, until we come to another Wistia video.](https://docs.wistia.com/docs/embed-links#auto-targeting-strategy)      |
| `"manual"`       | [Given each link element, look at its 'container' option to determine which video it should connect to](https://docs.wistia.com/docs/embed-links#manual-targeting-strategy) |
| `${containerId}` | [For all embed links in this container, connect them to this specific video.](https://docs.wistia.com/docs/embed-links#container-targeting-strategy)                        |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" playlist-links="auto"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" playlistLinks="auto" />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.playlistLinks = "auto";
  player.playlistLinks; // Returns "auto"
</script>
```

***

### `playlist-loop`

If the media has a playlist and this value is set to `true`, the playlist will loop back to the first media and replay it once the last media has finished.

| HTML attribute  | JavaScript property | Type      | Default value | Example values  |
| :-------------- | :------------------ | :-------- | :------------ | :-------------- |
| `playlist-loop` | `playlistLoop`      | `boolean` | `false`       | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" playlist-loop></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" playlistLoop={true} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.playlistLoop = true;
  player.playlistLoop; // Returns `true`
</script>
```

***

### `play-pause-control`

Enables/disables the play/pause control in the control bar.

| HTML attribute       | JavaScript property | Type      | Default value | Example values  |
| :------------------- | :------------------ | :-------- | :------------ | :-------------- |
| `play-pause-control` | `playPauseControl`  | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" play-pause-control="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" playPauseControl={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.playPauseControl = false;
  player.playPauseControl; // Returns `false`
</script>
```

***

### `play-pause-notifier`

Enables/disables the brief animation of a pause/play symbol when playing/pausing.

| HTML attribute        | JavaScript property | Type      | Default value | Example values  |
| :-------------------- | :------------------ | :-------- | :------------ | :-------------- |
| `play-pause-notifier` | `playPauseNotifier` | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" play-pause-notifier="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" playPauseNotifier={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.playPauseNotifier = false;
  player.playPauseNotifier; // Returns `false`
</script>
```

***

### `poster`

Overrides the thumbnail image which appears before the video plays. Expects an absolute URL to an image. For the best results, the image should match the exact aspect ratio of the video.

| HTML attribute | JavaScript property | Type     | Default value                                            | Example values                       |
| :------------- | :------------------ | :------- | :------------------------------------------------------- | :----------------------------------- |
| `poster`       | `poster`            | `string` | `"https://embed-ssl.wistia.com/deliveries/${uuid}/.jpg"` | `"https://my-image.com/picture.jpg"` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" poster="https://my-image.com/picture.jpg"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" poster="https://my-image.com/picture.jpg" />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.poster = "https://my-image.com/picture.jpg"; 
  player.poster; // Returns "https://my-image.com/picture.jpg"
</script>
```

***

### `preload`

Sets the loading strategy for the media.

> 🙌 
> 
> **Note**: The attribute/property `preload` must be set before the player is embedded. Changing it after the player is loaded on the page will have no impact.

| HTML attribute | JavaScript property | Type     | Default value | Example values                   |
| :------------- | :------------------ | :------- | :------------ | :------------------------------- |
| `preload`      | `preload`           | `string` | `"auto"`      | `"auto"`, `"none"`, `"metadata"` |

#### Possible values:

| Value        | Description                                                                              |
| :----------- | :--------------------------------------------------------------------------------------- |
| `"auto"`     | All data is preloaded.                                                                   |
| `"none"`     | No data, other than the bare minimum to render a media player on the page, is preloaded. |
| `"metadata"` | Only video/audio metadata is preloaded.                                                  |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" preload="none"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" preload="none" />
```

***

### `quality-control`

Enables/disables the manual quality selection option in the settings control.

| HTML attribute    | JavaScript property | Type      | Default value | Example values  |
| :---------------- | :------------------ | :-------- | :------------ | :-------------- |
| `quality-control` | `qualityControl`    | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" quality-control="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" qualityControl={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.qualityControl = false;
  player.qualityControl; // Returns `false`
</script>
```

***

### `quality-max`

Set the maximum quality for automatic playback. `<wistia-player>` will still run bandwidth checks to test for speed and play the highest quality version at or below the set maximum.

> 🙌 
> 
> **Note**: Keep in mind, viewers will still be able to manually select a quality outside the set maximum (using the option on the player) unless `quality-control` is set to `false`.

| HTML attribute | JavaScript property | Type     | Default value | Example values      |
| :------------- | :------------------ | :------- | :------------ | :------------------ |
| `quality-max`  | `qualityMax`        | `number` | `undefined`   | `224`, `360`, `540` |

#### Possible values

| Value  | Description |
| :----- | :---------- |
| `224`  | 224p max    |
| `360`  | 360p max    |
| `540`  | 540p max    |
| `720`  | 720p max    |
| `1080` | 1080p max   |
| `3840` | 3830p max   |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" quality-max="1080"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" qualityMax={1080} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.qualityMax = 1080; 
  player.qualityMax; // Returns `1080`
</script>
```

***

### `quality-min`

Set the minimum quality for automatic playback. `<wistia-player>` will still run bandwidth checks to test for speed and play the highest quality version at or above the set minimum.

> 🙌 
> 
> **Note**: Keep in mind, viewers will still be able to manually select a quality outside the set minimum (using the option on the player) unless `quality-control` is set to `false`.

| HTML attribute | JavaScript property | Type     | Default value | Example values      |
| :------------- | :------------------ | :------- | :------------ | :------------------ |
| `quality-min`  | `qualityMin`        | `number` | `undefined`   | `224`, `360`, `540` |

#### Possible values:

| Value  | Description |
| :----- | :---------- |
| `224`  | 224p min    |
| `360`  | 360p min    |
| `540`  | 540p min    |
| `720`  | 720p min    |
| `1080` | 1080p min   |
| `3840` | 3830p min   |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" quality-min="540"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" qualityMin={540} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.qualityMin = 540; 
  player.qualityMin; // Returns `540` 
</script>
```

***

### `resumable`

Tells the media to pick up where the viewer left off the next time they load the page where the media is embedded.

| HTML attribute | JavaScript property | Type                    | Default value | Example values            |
| :------------- | :------------------ | :---------------------- | :------------ | :------------------------ |
| `resumable`    | `resumable`         | `boolean` \|\| `"auto"` | `"auto"`      | `"auto'`, `true`, `false` |

#### Possible values:

| Value    | Description                                                                                                                         |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `"auto"` | The resumable feature will only be enabled if the video is 5 minutes or longer, is not autoplay, and is not set to loop at the end. |
| `true`   | Always enables the resumable feature.                                                                                               |
| `false`  | Always disables the resumable feature.                                                                                              |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" resumable></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" resumable={true} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.resumable = true;
  player.resumable; // Returns `true`
</script>
```

***

### `rounded-player`

Controls all rounded corners of the player. Expects a number value between `0` and `24`.

| HTML attribute   | JavaScript property | Type     | Default value | Example values |
| :--------------- | :------------------ | :------- | :------------ | :------------- |
| `rounded-player` | `roundedPlayer`     | `number` | `0`           | `5`, `24`      |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" rounded-player="24"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" roundedPlayer={24} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.roundedPlayer = 24;
  player.roundedPlayer; // Returns `24`
</script>
```

***

### `seo`

Enables/disables if the media's metadata will be injected into the page's on-page markup. [Learn more about SEO](https://wistia.com/product/video-seo).

> 🙌 
> 
> **Note**: It is best to have this value set correctly immediately upon embed. Otherwise, web crawlers like Google may miss your video's SEO.

> 🙌 
> 
> **Note**: Changing this value from `true` to `false` after the video has been embedded will not remove any SEO markup that has already been added to the page.

| HTML attribute | JavaScript property | Type      | Default value | Example values  |
| :------------- | :------------------ | :-------- | :------------ | :-------------- |
| `seo`          | `seo`               | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" seo="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" seo={false} />
```

***

### `settings-control`

Enables/disables the settings control in the control bar. This control allows viewers to control the quality and playback speed of the video.

See [`quality-control`](#quality-control) and [`playback-rate-control`](#playback-rate-control) if you want more control over what is available within the settings control.

| HTML attribute     | JavaScript property | Type      | Default value | Example values  |
| :----------------- | :------------------ | :-------- | :------------ | :-------------- |
| `settings-control` | `settingsControl`   | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" settings-control="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" settingsControl={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.settingsControl = false;
  player.settingsControl; // Returns `false`
</script>
```

***

### `silent-autoplay`

Sets how sound and autoplay work together. This option allows videos to autoplay in a muted state in contexts where normal autoplay is blocked or not supported (e.g. iOS, Safari 11+, Chrome 66+).

The `silent-autoplay` option will act as an [`autoplay`](#autoplay) preference, but will not have the video autoplay by itself. In order for this option to work, the video will need to be set to play through the [`autoplay`](#autoplay) embed option or set via Customize within the Wistia app.

> 🙌 
> 
> **Note**: A video is considered to be "autoplaying" if the play() command is not issued within a user-generated event (like a click) or within the "end" event handler (e.g. for the next video in a playlist).

If you need to see when the video enters and exits "silent playback mode," refer to the docs on the [`silent-playback-mode-change`](https://docs.wistia.com/docs/player-events#silent-playback-mode-change) event.

| HTML attribute    | JavaScript property | Type                     | Default value | Example values             |
| :---------------- | :------------------ | :----------------------- | :------------ | :------------------------- |
| `silent-autoplay` | `silentAutoplay`    | `boolean` \|\| `"allow"` | `false`       | `true`, `false`, `"allow"` |

#### Possible values:

| Value     | Description                                                                             |
| :-------- | :-------------------------------------------------------------------------------------- |
| `"allow"` | The video will default to normal autoplay, with silent autoplay as a fallback if needed |
| `true`    | The video will default to autoplaying silently                                          |
| `false`   | The video will not autoplay silently                                                    |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" autoplay silent-autoplay="allow"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" autoplay={true} silentAutoplay="allow" />
```

***

### `swatch`

Enables/disables the placeholder image which displays while the player is loading. Changing this option after the player has loaded will have no effect.

| HTML attribute | JavaScript property | Type      | Default value | Example values  |
| :------------- | :------------------ | :-------- | :------------ | :-------------- |
| `swatch`       | `swatch`            | `boolean` | `true`        | `true`, `false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" swatch="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" swatch={false} />
```

***

### `transparent-letterbox`

If set to `true` the background behind the player will be transparent, allowing the page color to show through instead of the default black letterboxing. Letterboxing may occur if there's an aspect ratio discrepancy between the dimensions of the video and its container—this option is not connected to alpha transparency.

| HTML attribute          | JavaScript property    | Type      | Default value | Example values |
| :---------------------- | :--------------------- | :-------- | :------------ | :------------- |
| `transparent-letterbox` | `transparentLetterbox` | `boolean` | `false`       | `true`,`false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" transparent-letterbox="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" transparentLetterbox={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.transparentLetterbox = false;
  player.transparentLetterbox; // Returns `false`
</script>
```

***

### `video-quality`

Sets and returns the quality level of the media. It accepts either an integer indicating the exact quality level to stream (ex. `224`, `360`, etc) or the `string` `"auto"` to enable adaptive bit rate streaming.

> 🙌 
> 
> **Note**: If you specify a quality level corresponding to an asset that doesn't exist for your media, `videoQuality` will default to the highest or lowest quality asset available. For example, if you pass `1080` as an argument but your video doesn't have a 1080p asset, `videoQuality` will select the 720p asset instead.

| HTML attribute  | JavaScript property | Type                 | Default value | Example values  |
| :-------------- | :------------------ | :------------------- | :------------ | :-------------- |
| `video-quality` | `videoQuality`      | `number` \| `"auto"` | `"auto"`      | `720`, `"auto"` |

#### Possible values:

| Value    | Description                         |
| :------- | :---------------------------------- |
| `"auto"` | Enable adaptive bit rate streaming. |
| `224`    | 224p                                |
| `360`    | 360p                                |
| `540`    | 540p                                |
| `720`    | 720p                                |
| `1080`   | 1080p                               |
| `3840`   | 3830p                               |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" video-quality="360"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" videoQuality={360} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.videoQuality = 720;
  player.videoQuality; // Returns `720`
</script>
```

***

### `volume`

Set the volume of the media. Expects an integer value between `0` and `1`. To mute the media on load, set this option to `0`.

| HTML attribute | JavaScript property | Type     | Default value | Example values |
| :------------- | :------------------ | :------- | :------------ | :------------- |
| `volume`       | `volume`            | `number` | `1`           | `0`,`0.5`, `1` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" volume="0.5"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" volume={0.5} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.volume = 0.5;
  player.volume; // Returns `0.5`
</script>
```

***

### `volume-control`

Enables/disables the volume control in the control bar.

> 🙌 
> 
> **Note**: On mobile devices where we use the native volume controls, this option has no effect.

| HTML attribute   | JavaScript property | Type      | Default value | Example values |
| :--------------- | :------------------ | :-------- | :------------ | :------------- |
| `volume-control` | `volumeControl`     | `boolean` | `true`        | `true`,`false` |

#### Example code:

```html HTML: Initialize player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123" volume-control="false"></wistia-player>
```

```jsx React: Initialize player with value
import { WistiaPlayer } from "@wistia/wistia-player-react";
<WistiaPlayer id="my-player" mediaId="abc123" volumeControl={false} />
```

```html HTML + JavaScript: Update player with value
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById("my-player"); // Finds the existing player
  player.volumeControl = false;
  player.volumeControl; // Returns `false`
</script>
```

***