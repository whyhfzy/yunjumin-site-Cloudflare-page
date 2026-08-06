/* ============================================================
   访客统计配置（Google Analytics 4）
   全站每个页面的 <head> 都引用了这一个文件，
   以后只需要改下面这一行的 ID，全站统计立刻生效，不用逐页改。

   怎么拿到自己的ID：
   1. 打开 https://analytics.google.com 用你的Google账号登录
   2. 新建一个"媒体资源"（Property），选"网站"，填 yunjumin.de
   3. 建好后会看到一个形如 G-XXXXXXXXXX 的"衡量ID"
   4. 把下面这一行的 G-XXXXXXXXXX 替换成你自己的ID，保存即可
   ============================================================ */
window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

(function () {
  // 还没换成真实ID之前，不加载统计脚本，避免报错或产生无效数据
  if (!window.GA_MEASUREMENT_ID || window.GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return;
  }
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + window.GA_MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', window.GA_MEASUREMENT_ID);
})();
