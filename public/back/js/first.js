$(function () {

  // 1. 发送ajax请求, 获取数据, 完成渲染
  var currentPage = 1;  // 当前页
  var pageSize = 5; // 每页多少条
  render();

  function render() {
    $.ajax({
      type: 'get',
      url: '/category/queryTopCategoryPaging',
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        var htmlStr = template('firstTpl', info);
        $('tbody').html(htmlStr);

        // 完成分页初始化
        $('#paginator').bootstrapPaginator({
          // 版本号
          bootstrapMajorVersion: 3,
          // 当前页
          currentPage: info.page,
          // 总页数
          totalPages: Math.ceil(info.total / info.size),
          // 给页码添加点击事件
          onPageClicked: function (a, b, c, page) {
            // 更新当前页, 并且重新渲染
            currentPage = page;
            render();
          }
        })
      }
    })
  }

})