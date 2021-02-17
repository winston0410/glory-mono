<script>
  import {onMount} from 'svelte';
  import glory from './cssRenderer'
  import {
    textStyle,
    h2Style,
    anchorStyle,
    codeStyle,
    containerStyle
  } from './globalStyle'
  import Code from './Code.svelte'
</script>

<div class={containerStyle}>
<h2 class={`${h2Style} ${glory.virtual({
  gridColumn: '1/-1'
})}`}>Download</h2>
<section>
  <p class={textStyle}>To install Glory, use the following command:</p>
  <Code class={codeStyle}>npm install glory</Code>
  <p class={textStyle}>If you are using Yarn:</p>
  <Code class={codeStyle}>yarn add glory</Code>
</section>
<section>
  <div>
  <div class={textStyle}>
  This section uses <Code class={codeStyle}>glory.virtual()</Code> for styling.
  </div>
  <p class={textStyle}>
  Open devtool and inspect the generated class name and styling to experience the power of Glory.
  </p>
  </div>
</section>
</div>
