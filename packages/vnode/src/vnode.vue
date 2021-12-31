<script>
export default {
  name: 'CbVnode',

  functional: true,

  render(h, ctx) {
    return ctx.props.vnodes;
  }
}
</script>
