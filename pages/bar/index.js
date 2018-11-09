import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';

function initChart(canvas, width, height) {
  let  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['主词数量', '产品词数量', '地区产品词数量', '产品行业词数量', '地区产品行业词数量']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      //设置字体倾斜
      axisLabel: {
        interval: 0,
        rotate: 45,//倾斜度 -90 至 90 默认为0
        margin: 2,
        textStyle: {
          fontWeight: "none",
        }
      },
    },
    yAxis: {
      type: 'category',
      data: ['百度', '搜狗', '360', '百度移动', '搜狗移动', '360移动']
    },
    series: [
      {
        name: '主词数量',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0,
              [
                { offset: 0, color: '#83bff6' },
                { offset: 1, color: '#188df0' }
              ]
            )
          }
        },
      },
      {
        name: '产品词数量',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0,
              [
                { offset: 0, color: 'rgb(247,127,203)' },
                { offset: 1, color: 'rgb(247,127,203)' }
              ]
            )
          }
        },
      },
      {
        name: '地区产品词数量',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0,
              [
                { offset: 0, color: '#83bff6' },
                { offset: 1, color: '#188df0' }
              ]
            )
          }
        },
      },
      {
        name: '产品行业词数量',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141, 681807],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0,
              [
                { offset: 0, color: 'rgb(247,127,203)' },
                { offset: 1, color: 'rgb(247,127,203)' }
              ]
            )
          }
        },
      },
      {
        name: '地区产品行业词数量',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 630230],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 0,
              [
                { offset: 0, color: '#83bff6' },
                { offset: 1, color: '#188df0' }
              ]
            )
          }
        },
      },
    ]
  };

  chart.setOption(option);
  return chart;
}
function initChartT(canvas, width, height) {
  let chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: '#fff',
    legend: {
      orient: 'vertical',
      x: 'left',
      itemHeight: 8,
      align: 'left',
      textStyle: {
        color: '#999'
      },
      data: ['百度', '搜狗', '360', '百度移动', '360移动', '搜狗移动']
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['90', '110'],
        center: ['50%', '50%'],
        data: [
          {
            value: 10,
            name: '专科',
            label: {
              normal: {
                textStyle: {
                  color: "#3fa7dc",
                  fontSize: 18
                },
                show: false,
                position: 'center'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#589ee1'
                }, {
                  offset: 1,
                  color: '#3a567d'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                // shadowBlur: 10,

              }
            }
          },
          {
            value: 16,
            name: '百度',
            label: {
              normal: {
                textStyle: {
                  color: "#3fa7dc",
                  fontSize: 18
                },
                show: false,
                position: 'center'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#faae80'
                }, {
                  offset: 1,
                  color: '#fba672'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                // shadowBlur: 10,

              }
            }
          },
          {
            value: 11,
            name: '搜狗',
            label: {
              normal: {
                textStyle: {
                  color: "#3fa7dc",
                  fontSize: 18
                },
                show: false,
                position: 'center'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#f59353'
                }, {
                  offset: 1,
                  color: '#f9843c'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                // shadowBlur: 10,

              }
            }
          },
          {
            value: 16,
            name: '360',
            label: {
              normal: {
                textStyle: {
                  color: "#3fa7dc",
                  fontSize: 18
                },
                show: false,
                position: 'center'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#86c3fd'
                }, {
                  offset: 1,
                  color: '#5c9dd9'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                // shadowBlur: 10,

              }
            }
          },
          {
            value: 11,
            name: '百度移动',
            label: {
              normal: {
                textStyle: {
                  color: "#3fa7dc",
                  fontSize: 18
                },
                show: false,
                position: 'center'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#60cb75'
                }, {
                  offset: 1,
                  color: '#59c56f'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                // shadowBlur: 10,

              }
            }
          }, {
            value: 16,
            name: '360移动',
            label: {
              normal: {
                textStyle: {
                  color: "#3fa7dc",
                  fontSize: 18
                },
                show: false,
                position: 'center'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#86c3fd'
                }, {
                  offset: 1,
                  color: '#5c9dd9'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                // shadowBlur: 10,

              }
            }
          }, {
            value: 11,
            name: '搜狗移动',
            label: {
              normal: {
                textStyle: {
                  color: "#3fa7dc",
                  fontSize: 18
                },
                show: false,
                position: 'center'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#60cb75'
                }, {
                  offset: 1,
                  color: '#59c56f'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                // shadowBlur: 10,

              }
            }
          }]
      }
    ]

  };

  chart.setOption(option);
  return chart;
}
Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    bar: {
      onInit: initChart
    },
    barT: {
      onInit: initChartT
    }
  },
});
