# Aurora player api: working with multiple embeds
The Aurora `<wistia-player/>` element does not utilize `window._wq` like [our previous embed](https://docs.wistia.com/docs/javascript-player-api#use-window_wq-to-get-a-video-handle). For setting base configuration options, we recommend using our new `window.wistiaOptions`[ configuration object](https://docs.wistia.com/docs/player-embed-api#3-via-windowwistiaoptions-configuration-object).  

However, that configuration object does not give you a reference to each video element. So, what if you want to add event listeners or interact with the `<wistia-player/>`? You'll need to get it via Javascript. But, what if you don't know how many embeds are going to end up on the page, what their `mediaId` is going to be, or when they're going to be added to the page? And similarly, what if you need to do something when they are removed?

We can use native browser APIs and JavaScript to solve all these problems. The example code below uses the browser's[`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) API to watch the DOM for the addition and removal of elements. We check if those elements meet our criteria and then we act on them.

## Example Code

Here we set up a new `MutationObserver` that checks to see if any newly added HTML elements are our `<wistia-player/>` element. If so, we log a message to the console and then also attach an event listener. Similarly, when a `<wistia-player/>` is removed from the DOM, we log another message and remove the event listener that we previously added.

```html
<script src="https://fast.wistia.com/player.js" async></script>

<button id="btn-add">Add new Wistia Video!</button>
<button id="btn-remove">Remove Wistia Video</button>

<br />

<script>
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        const playEventCallback = (event) => {
          console.log(`Wistia player with media-id ${event.target.mediaId} started playing`);
        };
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'WISTIA-PLAYER') {
            node.addEventListener('play', playEventCallback);

            console.log('Wistia player added');
          }
        });

        mutation.removedNodes.forEach((node) => {
          if (node.nodeName === 'WISTIA-PLAYER') {
            node.removeEventListener('play', playEventCallback);

            console.log('Wistia player removed');
          }
        });
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
</script>

<script>
  const btnAdd = document.getElementById('btn-add');

  btnAdd.addEventListener('click', () => {
    const wistiaPlayer = document.createElement('wistia-player');
    wistiaPlayer.mediaId = 'rbsg3da4jd';

    document.body.appendChild(wistiaPlayer);
  });

  const btnRemove = document.getElementById('btn-remove');
  btnRemove.addEventListener('click', () => {
    const wistiaPlayer = document.querySelector('wistia-player[media-id="rbsg3da4jd"]');
    if (wistiaPlayer) {
      wistiaPlayer.remove();
    }
  });
</script>

```

## Live Example

[block:embed]
{
  "html": false,
  "url": "https://codepen.io/wistia/embed/ZYzKOjj?default-tab=html%2Cresult",
  "title": "iframe",
  "provider": "codepen.io",
  "href": "https://codepen.io/wistia/embed/ZYzKOjj?default-tab=html%2Cresult",
  "typeOfEmbed": "iframe",
  "height": "600px",
  "width": "100%",
  "iframe": true
}
[/block]