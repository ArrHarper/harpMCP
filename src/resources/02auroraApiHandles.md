## Get started
The Aurora Wistia Player is what is commonly referred to as a [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). At its simplest, this means we've created a new HTML element that the browser can understand; `<wistia-player/>` . To interact with this element on your page, you need a "handle" to it just like when interacting with anything else on the page. When we use the term "handle", we mean a javascript variable that is associated with the `<wistia-player/>` element. Interacting with Aurora is a bit different than interacting with previous versions of the Wistia Player. However, because it is treated as a native HTML element, much of the syntax may already be familiar to you! 

## Getting a Handle
The Aurora `<wistia-player/>` element is native HTML, so you can grab it in all the same ways you might grab a `<div/>`, `<span/>` or `<p/>` tag.  

Lets look at some examples using the three most common ways of getting HTML elements with Javascript:

- `getElementById()`
- `querySelector()`
- `querySelectorAll()`

Here is a basic starting HTML where we have our Wistia embed script and 3 different videos. (Note that if you get your embed code from the Wistia App, it might look a bit different - this is a basic starting example)

```html
<script src="https://fast.wistia.com/player.js" async></script>

<wistia-player id="video-one" media-id="abc123" />
<wistia-player id="video-two" media-id="def456" />
<wistia-player id="video-three" media-id="ghi789" />
```

### `getElementById()`
We can grab each video player individually using the `id` that we assigned to each one via [`getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById):

```javascript
const videoOne = document.getElementById('video-one');
const videoTwo = document.getElementById('video-two');
const videoThree = document.getElementById('video-three');

console.log(videoOne.currentTime); // logs the current time of video-one
videoTwo.pause(); // pauses video-two
videoThree.playerColor = 'aabbcc'; // change the player color of video-three
```

### `querySelector()`
We can also grab the video player using [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector):

```
const video = document.querySelector('wistia-player');
```

**Note: `querySelector` only returns the first element it finds that matches, so in this case only "video-one" will be returned**

### `querySelectorAll()`
We can grab all the videos using [`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) :

```javascript
const allVideos = document.querySelectorAll('wistia-player'); // returns a NodeList of all matching elements

const videoOne = allVideos[0];
const videoTwo = allVideos[1];
const videoThree = allVideos[2];
```

### Additional methods
Because `<wistia-player/>` is an HTML element, other methods for getting elements also work. For example: 

- [`getElementsByClassName()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
- [`getElementsByTagName`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)