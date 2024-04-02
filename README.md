# head-js-block-dom-testing

> head标签中外连s没有加载完成之前页面会显示内容吗？

- script：`localhost:300`
  - 不会显示内容
- script defer：`localhost:300/defer.html`
    - 显示内容
- script async：`localhost:300/async.html`
    - 显示内容
