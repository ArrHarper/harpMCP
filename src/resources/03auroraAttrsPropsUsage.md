# Aurora player api: usage guide for attributes and properties
The aurora player has many customization options that can be applied either as an HTML attribute or a JavaScript property. Every HTML attribute available on `<wistia-player>` also has a corresponding JavaScript property (e.g. attribute `player-color` equates to property `playerColor`). Note: Wistia's popover embed type has a specific set of attributes and properties with their own documentation.

## Using HTML attributes
Attributes are additional values which can be added to `<wistia-player>` to further customize its look and behavior. Multiple attributes can be set on a `<wistia-player>` element at once:
```html HTML: Initialize players with values
<script src="https://fast.wistia.com/player.js" async></script>
<!-- This player is red. -->
<wistia-player id="my-player-1" media-id="abc123" player-color="#ff0000"></wistia-player>
<!-- And this player has a bunch of different options set at once! -->
<wistia-player id="my-player-3" media-id="abc123" big-play-button="false" muted player-color="#0000ff"></wistia-player>
```

Attributes can also be set on the React component version of the player, `<WistiaPlayer>`. They're set as `props` on the component and use `camelCase` syntax rather than `snake-case` syntax.
```jsx React: Initialize players with values
import { WistiaPlayer } from "@wistia/wistia-player-react";
// This player is red.
<WistiaPlayer id="my-player-1" mediaId="abc123" playerColor="#ff0000" />
// And this player has a bunch of different options set at once!
<WistiaPlayer id="my-player-3" mediaId="abc123" bigPlayButton={false} muted={true} playerColor="#0000ff" />
```

## Using JavaScript properties
Like attributes, properties can be used to set the look and behavior of the `<wistia-player>`. Properties are set via JavaScript rather than HTML, and they can also be used to get more information than just attributes can provide, such as a player's `currentTime`, `state`, and `videoQuality`. Properties are usually better than attributes when you need to make an update to `<wistia-player>` _after_ the initial render of the element because they won't trigger a DOM change.

```html HTML + JavaScript: Update players with values
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player-1" media-id="abc123"></wistia-player>
<wistia-player id="my-player-2" media-id="abc123"></wistia-player>
<wistia-player id="my-player-3" media-id="abc123"></wistia-player>
<script>
  // This player will now be red
  const player1 = document.getElementById("my-player-1");
  player1.playerColor = "#ff0000";
  // This player will now be green
  const player2 = document.getElementById("my-player-2");
  player2.playerColor = "#00ff00";
  // And this player will now not have a big play button, will be muted, and will be blue
  const player3 = document.getElementById("my-player-3");
  player3.bigPlayButton = false;
  player3.muted = true;
  player3.playerColor = "#0000ff";
</script>
```


## Using read-only properties
Read-only JavaScript properties cannot be set, and provide useful information about the data and state of the `<wistia-player>`. Properties like `duration` and `state` can be used alongside other player attributes, properties, events, and methods to build out functionality for the `<wistia-player>`.

```html
<script src="https://fast.wistia.com/embed/abc123.js" async type="module"></script>
<script src="https://fast.wistia.com/player.js" async></script>
<wistia-player id="my-player" media-id="abc123"></wistia-player>
<button type="button" id="halfway-button">Skip to the halfway point!</button>
<script>
  const player = document.getElementById('my-player');
  const halfwayButton = document.getElementById('halfway-button');
  // When a button is clicked...
  halfwayButton.addEventListener('click', () => {
    // Use the read-only duration property to set the media to its halfway point
    player.currentTime = player.duration / 2;
  });
</script>
```