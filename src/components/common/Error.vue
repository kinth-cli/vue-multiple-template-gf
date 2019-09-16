<template>
  <div class="admin-content">

    <div class="am-cf am-padding">
      <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">ERROR</strong> / <small>That’s an error</small></div>
    </div>

    <div class="am-g">
      <div class="am-u-sm-12 am-text-center">
        <h2 class="am-text-center am-text-xxxl am-margin-top-lg">500. {{errorType}}</h2>
        <p class="am-text-center">{{errorMessage}}</p>
        <pre class="page-404">
          .----.
       _.'__    `.
   .--($)($$)---/#\
 .' @          /###\
 :         ,   #####
  `-..__.-' _.-\###/
        `;_:    `"'
      .'"""""`.
     /,  ya ,\\
    //  500!  \\
    `-._______.-'
    ___`. | .'___
   (______|______)
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      errorType: '页面错误',
      errorMessage: '发生了某些错误！'
    }
  },
  mounted () {
    if(this.$route.params.errorType){
      this.errorType = this.$route.params.errorType
    }
    if(this.$route.params.errorMessage){
      this.errorMessage = this.$route.params.errorMessage
    }
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
  }
  .am-padding {
    padding: 20.5px;
  }
  .am-fl {
    float: left;
  }
    .am-text-lg {
      font-size: 15px;
  }
  .am-text-primary {
      color: #0e90d2;
  }
  b, strong {
      font-weight: 700;
  }
  small {
    font-size: 80%;
  }
  .am-g {
    margin: 0 auto;
    width: 100%;
  }
  .am-text-center {
    text-align: center!important;
  }
  .am-u-sm-12 {
      width: 100%;
  }
  [class*=am-u-] {
      width: 100%;
      padding-left: 8.5px;
      padding-right: 8.5px;
      float: left;
      position: relative;
  }
  .am-text-xxxl {
    font-size: 36px;
  }
  .am-margin-top-lg {
      margin-top: 20.5px;
  }
  h2 {
      font-size: 1.25em;
  }
  h1, h2, h3, h4, h5, h6 {
      margin: 0 0 13.5px 0;
      font-weight: 600;
      font-size: 100%;
  }
  *+p{
    margin-top: 13.5px;
  }
  address, blockquote, dl, fieldset, figure, hr, ol, p, pre, ul {
      margin: 0 0 13.5px 0;
  }
  pre {
    display: block;
    padding: 8.5px;
    margin: 8.5px 0;
    font-size: 11px;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
    color: #555;
    background-color: #f8f8f8;
    border: 1px solid #dedede;
    border-radius: 0;
    font-family: Monaco,Menlo,Consolas,"Courier New",FontAwesome,monospace;
  }
</style>