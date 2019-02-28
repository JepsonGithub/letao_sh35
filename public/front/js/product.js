$(function () {

  // 获取地址栏的商品 id
  var productId = getSearch('productId');

  // 一进入页面, 发送 ajax 请求, 根据 id 请求商品详情的数据
  $.ajax({
    type: 'get',
    url: '/product/queryProductDetail',
    data: {
      id: productId
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      var htmlStr = template('productTpl', info);
      $('.lt_main .mui-scroll').html(htmlStr);


      // 初始化轮播图, 获得slider插件对象
      var gallery = mui('.mui-slider');
      gallery.slider({
        interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
      });

      // 初始化数字框
      mui('.mui-numbox').numbox();
    }
  })


})