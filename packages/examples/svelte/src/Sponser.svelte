<script>
  import {onMount} from 'svelte';
  import glory from './cssRenderer'
  import {
    textStyle,
    h2Style,
    codeStyle,
    anchorStyle,
    containerStyle,
    baseSize
  } from './globalStyle'
  import Code from './Code.svelte'

</script>

<div class={containerStyle}>
<h2 class={`${h2Style} ${glory.virtual({
  gridColumn: '1/-1'
})}`}>Sponser</h2>
<div>
<p class={textStyle}>This application is sponsered by <a class={anchorStyle} href="https://tecky.io/en/">Tecky Academy</a>.</p>
<a href="https://tecky.io/en/">
<img class={glory.virtual({
  maxWidth: '300px',
  width: "100%",
  display: "block"
})} src="/logo_title.png"/>
</a>
</div>
<div></div>
</div>
