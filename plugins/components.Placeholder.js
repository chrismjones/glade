// Given an aspect ratio, as a string of width:height (e.g. "16:9"),
// return a HTML markup that satisfies the Aspect Ratio
// padding is Height / Width

const aspectRatioPattern = /^(\d+):(\d+)$/


function round (number, places = 0) {
  return Math.round(number * (10 ** places)) / (10 ** places)
}


const styles = `
.placeholder-frame {
  border: 3px solid currentColor;
  margin-bottom: 1rem;

  /* Aspect Ratio Hack */
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.placeholder-frame .placeholder-inner {
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  text-align: center;

  /* http://projects.verou.me/css3patterns/#zig-zag */
  --stripe-color: #f5f5f5;
  background:
    linear-gradient(135deg, var(--stripe-color) 25%, transparent 25%) -25px 0,
    linear-gradient(225deg, var(--stripe-color) 25%, transparent 25%) -25px 0,
    linear-gradient(315deg, var(--stripe-color) 25%, transparent 25%),
    linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%);
  background-size: 50px 50px;
  background-clip: content-box;

  /* Aspect Ratio Hack */
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`


function makePlaceholder (aspectRatio = '4:3', text = `Placeholder ${aspectRatio}`) {
  if (typeof aspectRatio !== 'string' || !aspectRatioPattern.test(aspectRatio)) {
    throw new Error(`aspectRatio must be in format width:height ("16:9"). Instead got ${aspectRatio}`)
  }

  const [, width, height] = aspectRatio.match(aspectRatioPattern)
  const paddingTop = Number(height) / Number(width)

  return `
  <div class="placeholder-frame" style="padding-top: ${round(paddingTop * 100, 5)}%">
    <div class="placeholder-inner">${text}</div>
  </div>
  `
}


export default () => {
  Glade.insertCSS(styles)
  Glade.components.Placeholder = makePlaceholder
}
