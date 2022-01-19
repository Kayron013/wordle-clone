<script>
  import Key from './Key.svelte';
</script>

<div class="keyboard">
  <div class="row">
    <Key key="q" />
    <Key key="w" />
    <Key key="e" />
    <Key key="r" />
    <Key key="t" />
    <Key key="y" />
    <Key key="u" />
    <Key key="i" />
    <Key key="o" />
    <Key key="p" />
  </div>
  <div class="row">
    <Key key="a" />
    <Key key="s" />
    <Key key="d" />
    <Key key="f" />
    <Key key="g" />
    <Key key="h" />
    <Key key="j" />
    <Key key="k" />
    <Key key="l" />
  </div>
  <div class="row">
    <Key key="enter" />
    <Key key="z" />
    <Key key="x" />
    <Key key="c" />
    <Key key="v" />
    <Key key="b" />
    <Key key="n" />
    <Key key="m" />
    <Key key="backspace" />
  </div>
</div>

<style>
  .keyboard {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
    margin-top: 10px;
  }
  .row {
    display: grid;
    grid-template-rows: 60px;
    gap: 6px;
    justify-content: center;
  }
  .row:nth-of-type(1) {
    grid-template-columns: repeat(10, 45px);
  }
  .row:nth-of-type(2) {
    grid-template-columns: repeat(9, 45px);
  }
  .row:nth-of-type(3) {
    grid-template-columns: 70px repeat(7, 45px) 70px;
  }
</style>
