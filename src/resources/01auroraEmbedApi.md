# Aurora Player Embed API
A high level overview of working with Aurora embeds and player API.

## Standard embeds
The basic structure of a standard embed code includes the player.js script, a <wistia-player> web component, and an optional<style> element which serves as a placeholder while the player is loading.

<wistia-player> can be interacted with programmatically using its attributes (https://docs.wistia.com/docs/player-attributes-and-properties), properties (https://docs.wistia.com/docs/player-attributes-and-properties), events (https://docs.wistia.com/docs/player-events), and methods (https://docs.wistia.com/docs/player-methods).

```html
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<style>
  wistia-player[media-id='abc123']:not(:defined) {
    background: center / contain no-repeat
      url('https://fast.wistia.com/embed/medias/abc123/swatch');
    display: block;
    filter: blur(5px);
    padding-top: 56.25%;
  }
</style>

<wistia-player media-id="abc123"></wistia-player>
```
Note: The padding-top: 56.25% above is a calculated value ((1 / aspect_ratio) * 100) based on the aspect ratio of the video. If you're not getting generated embed codes from within Wistia, you'll need to ensure that value is correct for the aspect ratio of your media.

```jsx HTML (from npm)
import '@wistia/wistia-player';

<wistia-player media-id="abc123"></wistia-player>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react"; 

<WistiaPlayer mediaId="abc123" />
```

## Fallback embeds
Our resilient iframe embeds have a similar syntax. You can use the wistiaApi property on the <iframe> to get a handle to the player.

```html
<script src="https://fast.wistia.net/player.js" async></script>
<iframe src="https://fast.wistia.net/embed/iframe/abc123?web_component=true" title="Lenny Delivers Video! " allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="640" height="360"></iframe>

<script>
  const wistiaIframe = document.querySelector('iframe.wistia_embed');
  wistiaIframe.addEventListener('load', () => {
    const player = wistiaIframe.wistiaApi;
    console.log("I got a handle to the player!", player);
  });
</script>
```

## Embed options
Embed options are attributes (https://docs.wistia.com/docs/player-attributes-and-properties) and properties (https://docs.wistia.com/docs/player-attributes-and-properties) that control the behavior of your player. fullscreen-control (https://docs.wistia.com/docs/player-attributes-and-properties#fullscreen-control), for example, is a boolean attribute which enables and disables the fullscreen button shown on the player.

For a full list of available attributes and properties, see our Attributes and Properties Documentation (https://docs.wistia.com/docs/player-attributes-and-properties).

### Using embed options
Embed options can be set on the embed in three ways:

1. As attributes on the <wistia-player> element using HTML.
2. As properties of the <wistia-player> element using JavaScript.
3. Via a window.wistiaOptions configuration object, before the player is embedded

#### 1. As HTML attributes
The embed option is added as an attribute directly on <wistia-player>.

```html
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player media-id="abc123" player-color="2949E5" fullscreen-control="false"></wistia-player>
```

```jsx React
import { WistiaPlayer } from "@wistia/wistia-player-react"; 

export default function App() {
  return (
    <WistiaPlayer mediaId="abc123" playerColor="2949E5" fullscreenControl={false} />
  );
}
```

#### 2. As JavaScript properties
Once we have a reference to the <wistia-player> HTML element, we can interact with its properties via JavaScript.

```html HTML + JavaScript
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js@latest" async></script>

<wistia-player id="my-player" media-id="abc123"></wistia-player>

<script>
  const player = document.getElementById('my-player');
  player.playerColor = "2949E5";
  player.fullscreenControl = false;
</script>
```

#### 3. Via window.wistiaOptions configuration object
We can set multiple or complex options via a window.wistiaOptions configuration object. The object's keys must match the media-id of the media on which we want the options to be applied. There is also a global '_all' key, to easily apply options to all medias embedded on a page.

Note: The window.wistiaOptions object must appear before the <wistia-player> element for its embed options to take effect.

```html
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/embed/def456.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>

<script>
  window.wistiaOptions = {
    '_all': {
      fullscreenControl: false,
    },
    'abc123': {
      playerColor: '2949E5',
      plugin: {
        'midrollLink-v1': {
          links: [
            {
              time: 3,
              duration: 5,
              text: 'Click me!',
              url: 'http://wistia.com'
            }
          ]
        }
      }
    },
    'def456': {
      playPauseControl: false,
    }
  }
</script>

<wistia-player media-id="abc123"></wistia-player>
<wistia-player media-id="def456"></wistia-player>
```

## Events
Events dispatched by <wistia-player> can be listened for using addEventListener and removeEventListener. Events can be dispatched from user interaction (e.g. play (https://docs.wistia.com/docs/player-events#play), pause (https://docs.wistia.com/docs/player-events#pause)) or from updates within the player itself (e.g. can-play (https://docs.wistia.com/docs/player-events#can-play), time-update (https://docs.wistia.com/docs/player-events#time-update)).

```html
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

## Methods
The methods we've included can be used to further customize and add functionality to the player. As long as you have a reference to your <wistia-player> element, you can use methods like play() (https://docs.wistia.com/docs/player-methods#play) by calling <wistia-player>.play().

```html
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
