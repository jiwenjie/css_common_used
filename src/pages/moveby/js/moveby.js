import $ from 'jquery'

export default {
  data() {
    return {}
  },

  mounted() {
    //hover某处显示悬浮框
    $(document).mousemove((e) => {

      // //获取鼠标位置函数
      var mousePos = this.mousePosition(e);
      var xOffset = 20;
      var yOffset = 25;

      // console.log('curX = ' + mousePos.x + " " + 'curY = ' + mousePos.y)

      var curXValue;
      var curYValue;

      // if (mousePos.y < $(".tip").height() / 2) {
      //   curYValue =
      // }

      var curXValue = mousePos.y - yOffset;
      var curYValue = mousePos.x + xOffset;

      $("#tooltip")
        .css("display", "block")
        .css("position", "absolute")
        .css("top", curXValue + "px")
        .css("left", curYValue + "px");
      $("#tooltip").text("悬浮窗内容");
    });
  },

  methods: {
    //获取鼠标坐标
    mousePosition(ev) {
      ev = ev || window.event;

      if (ev.pageX || ev.pageY) {
        console.log('curPageX = ' + ev.pageX + ' curPageY = ' + ev.pageY);
        return {
          x: ev.pageX,
          y: ev.pageY
        };
      } else {
        console.log('curClientX = ' + ev.clientX + ' curScrollLeft = ' + document.body.scrollLeft + ' curClientLeft = ' + document.body.clientLeft);
        console.log('curClientY = ' + ev.clientY + ' curScrollTop = ' + document.body.scrollTop + ' curClientTop = ' + document.body.clientTop);

        return {
          x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
          y: ev.clientY + document.body.scrollTop - document.body.clientTop
        };
      }
    }
  },
}
