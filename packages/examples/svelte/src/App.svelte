<script>
  import {onMount} from 'svelte';
  import glory from './cssRenderer'
  import {
    textStyle,
    h1Style,
    anchorStyle
  } from './globalStyle'

  import Download from './Download.svelte'

  import Sponser from './Sponser.svelte'

  const shellStyle = glory.virtual({
    backgroundColor: 'hsl(220, 13%, 18%)',
    '@media screen and (min-width: 910px)': {
      maxWidth: '910px',
      margin: 'auto'
    }
  })
</script>

<style>
  :global(body){
    background-color: hsl(220, 13%, 18%);
  }
</style>

<main class={shellStyle}>
<section class={glory.virtual({
  padding: '0px 20px'
})}>
<h1 class={h1Style}>Example application styled with Glory</h1>
<img class={glory.virtual({
  maxWidth: '300px',
  margin: '0 auto 40px',
  width: "100%",
  display: "block"
})} src="/logo.svg"/>
<p class={textStyle}>
  This application demonstrated how Glory can be used. The source code of this example page can be found <a class={anchorStyle} href="https://github.com/winston0410/glory">here</a>.
</p>
</section>
  <Download />
  <Sponser />
</main>
