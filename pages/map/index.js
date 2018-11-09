import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';
import geoJson from '../../utils/mapData.js';//全国坐标
const geoCoordMap = require('../../utils/map.js').default.geoCoordMap;//城市坐标

// 
var mapArr = [
  { name: "海门", value: 279 },
  { name: "鄂尔多斯", value: 29 },
  { name: "招远", value: 200 },
]; 
var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};
//
const app = getApp();
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

 echarts.registerMap('china', geoJson);

  const option = {
    backgroundColor: '#fff',
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: 'rgba(36, 37, 45,1)',
          borderColor: "rgb(101,101,102)",/**线条颜色*/
          borderWidth: 0.5,/**线条宽*/
        },
        emphasis: {
          areaColor: 'rgba(36, 37, 45,1)'
        }
      }
    },
    series: [
      {
        name: 'pm2.5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(mapArr),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        color: 'rgba(0,160,233,0.8)',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            borderColor: 'rgba(14, 145, 252, 0.26)',
            borderWidth: 10
          }
        }
      }
    ]

  };

  chart.setOption(option);

  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    }
  },

});
