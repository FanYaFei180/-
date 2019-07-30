<template>
  <div class="hello">
    <el-container>
      <el-aside width="auto" class="aside_fi">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#304156"
              text-color="rgb(191,203,217)"
              active-text-color="#ffd04b"
              :collapse="isCollapse"
            >
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">文档</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">引导页</span>
              </el-menu-item>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>权限测试页</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">页面权限</el-menu-item>
                  <el-menu-item index="1-2">指令权限</el-menu-item>
                  <el-menu-item index="1-3">角色权限</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="5">
                <i class="el-icon-document"></i>
                <span slot="title">图标</span>
              </el-menu-item>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>组件</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">富文本编辑器</el-menu-item>
                  <el-menu-item index="1-2">Markdown</el-menu-item>
                  <el-menu-item index="1-3">JSON编辑器</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>图表</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">富文本编辑器</el-menu-item>
                  <el-menu-item index="1-2">Markdown</el-menu-item>
                  <el-menu-item index="1-3">JSON编辑器</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>路由嵌套</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">富文本编辑器</el-menu-item>
                  <el-menu-item index="1-2">Markdown</el-menu-item>
                  <el-menu-item index="1-3">JSON编辑器</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>Table</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">富文本编辑器</el-menu-item>
                  <el-menu-item index="1-2">Markdown</el-menu-item>
                  <el-menu-item index="1-3">JSON编辑器</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>综合实例</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">富文本编辑器</el-menu-item>
                  <el-menu-item index="1-2">Markdown</el-menu-item>
                  <el-menu-item index="1-3">JSON编辑器</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="11">
                <i class="el-icon-document"></i>
                <span slot="title">Tab</span>
              </el-menu-item>
              <el-submenu index="12">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>错误页面</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">富文本编辑器</el-menu-item>
                  <el-menu-item index="1-2">Markdown</el-menu-item>
                  <el-menu-item index="1-3">JSON编辑器</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="13">
                <i class="el-icon-document"></i>
                <span slot="title">错误日志</span>
              </el-menu-item>
              <el-submenu index="14">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>Excel</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">富文本编辑器</el-menu-item>
                  <el-menu-item index="1-2">Markdown</el-menu-item>
                  <el-menu-item index="1-3">JSON编辑器</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="15">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>zip</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">富文本编辑器</el-menu-item>
                  <el-menu-item index="1-2">Markdown</el-menu-item>
                  <el-menu-item index="1-3">JSON编辑器</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header class="header_fi">
          <el-row :gutter="20">
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                  <el-radio-button :label="false">
                    <i class="el-icon-s-unfold" :label="true"></i>
                  </el-radio-button>
                  <el-radio-button :label="true">
                    <i class="el-icon-s-fold" :label="false"></i>
                  </el-radio-button>
                </el-radio-group>
              </div>
            </el-col>
            <el-col :span="6" :offset="14">
              <div class="grid-content bg-purple">
                <i class="el-icon-zoom-in"></i>&nbsp;&nbsp;&nbsp;
                <i class="el-icon-share"></i>&nbsp;&nbsp;&nbsp;
                <i class="el-icon-share"></i>&nbsp;&nbsp;&nbsp;
                <i class="el-icon-delete"></i>&nbsp;&nbsp;&nbsp;
                <el-button icon="el-icon-search">搜索</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="el_main">
          <el-row :gutter="40" class="information">
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="1">
              <div class="grid-content bg-purple inf_bg">
                <div class="el_icons">
                  <div class="bg">
                    <i class="el-icon-user-solid"></i>
                  </div>
                </div>
                <div class="el_char">
                  <span>New Visits</span>
                  <br />
                  <span>102,204</span>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="11">
              <div class="grid-content bg-purple-light inf_bg">
                <div class="el_icons">
                  <div class="bg">
                    <i class="el-icon-user-solid"></i>
                  </div>
                </div>
                <div class="el_char">
                  <span>New Visits</span>
                  <br />
                  <span>102,204</span>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="11">
              <div class="grid-content bg-purple inf_bg">
                <div class="el_icons">
                  <div class="bg">
                    <i class="el-icon-user-solid"></i>
                  </div>
                </div>
                <div class="el_char">
                  <span>New Visits</span>
                  <br />
                  <span>102,204</span>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="1">
              <div class="grid-content bg-purple-light inf_bg">
                <div class="el_icons">
                  <div class="bg">
                    <i class="el-icon-user-solid"></i>
                  </div>
                </div>
                <div class="el_char">
                  <span>New Visits</span>
                  <br />
                  <span>102,204</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <!-- 折线图 -->
          <el-row class="line_chart">
            <el-col :span="24">
              <div class="grid-content bg-purple" id="zhe"></div>
            </el-col>
          </el-row>
          <!-- 三个图 -->
          <el-row :gutter="40" class="three_zhe">
            <el-col :span="8">
              <div class="grid-content bg-purple three_zhe_bai" id="three_zhe_one"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple three_zhe_bai" id="three_zhe_two"></div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple three_zhe_bai" id="three_zhe_three"></div>
            </el-col>
          </el-row>
          <!-- 最后三个 -->
          <el-row :gutter="20" class="last_cen">
            <el-col :span="12">
              <div class="grid-content bg-purple last_h">
                <el-table :data="tableData" stripe style="width: 100%">
                  <el-table-column prop="date" label="日期" width="180"></el-table-column>
                  <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                  <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple last_h last_h_cen">
                <el-collapse accordion>
                  <el-collapse-item>
                    <template slot="title">一致性 Consistency</template>
                    <el-divider></el-divider>
                    <el-checkbox v-model="checked" text-color="#ccc" fill="green" true-label="#ccc"></el-checkbox>
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <el-divider></el-divider>
                    <el-checkbox v-model="checked" text-color="#ccc" fill="green" true-label="#ccc"></el-checkbox>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    <el-divider></el-divider>
                    <el-checkbox v-model="checked" text-color="#ccc" fill="green" true-label="#ccc"></el-checkbox>
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <el-divider></el-divider>
                    <el-checkbox v-model="checked" text-color="#ccc" fill="green" true-label="#ccc"></el-checkbox>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    <el-divider></el-divider>
                    <el-checkbox v-model="checked" text-color="#ccc" fill="green" true-label="#ccc"></el-checkbox>
                    <div>简化流程：设计简洁直观的操作流程；</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple last_h">
                <img
                  src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png "
                  style="width:100%"/>
                <div class="items">
                   <span>vue</span>
                <el-progress :percentage="70"></el-progress>
                 <span>javaScript</span>
                <el-progress :percentage="18" :format="format"></el-progress>
                <span>css</span>
                <el-progress :percentage="12" ></el-progress>
                <span>ESlint</span>
                <el-progress :percentage="100" status="success"></el-progress>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      isCollapse: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      checked: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    }
  },
  mounted() {
    var echarts = require("echarts");

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("zhe"));
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["最高气温", "最低气温"]
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          },
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} °C"
        }
      },
      series: [
        {
          name: "最高气温",
          type: "line",
          data: [11, 11, 15, 13, 12, 13, 10],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        },
        {
          name: "最低气温",
          type: "line",
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
          },
          markLine: {
            data: [
              { type: "average", name: "平均值" },
              [
                {
                  symbol: "none",
                  x: "90%",
                  yAxis: "max"
                },
                {
                  symbol: "circle",
                  label: {
                    normal: {
                      position: "start",
                      formatter: "最大值"
                    }
                  },
                  type: "max",
                  name: "最高点"
                }
              ]
            ]
          }
        }
      ]
    });
    // 三个钟的第一个
    var myChartOne = echarts.init(document.getElementById("three_zhe_one"));
    myChartOne.setOption({
      title: {
        text: "某站点用户访问来源",
        subtext: "纯属虚构",
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
    // 三个钟的第二个
    var myChartTwo = echarts.init(document.getElementById("three_zhe_two"));
    myChartTwo.setOption({
      backgroundColor: "#2c343c",

      title: {
        text: "Customized Pie",
        left: "center",
        top: 20,
        textStyle: {
          color: "#ccc"
        }
      },

      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 274, name: "联盟广告" },
            { value: 235, name: "视频广告" },
            { value: 400, name: "搜索引擎" }
          ].sort(function(a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            normal: {
              textStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },

          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function(idx) {
            return Math.random() * 200;
          }
        }
      ]
    });
    // 三个中 的第三个
    var myChartThree = echarts.init(document.getElementById("three_zhe_three"));
    myChartThree.setOption({
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ["product", "2015", "2016", "2017"],
        source: [
          { product: "Matcha Latte", "2015": 43.3, "2016": 85.8, "2017": 93.7 },
          { product: "Milk Tea", "2015": 83.1, "2016": 73.4, "2017": 55.1 },
          { product: "Cheese Cocoa", "2015": 86.4, "2016": 65.2, "2017": 82.5 },
          {
            product: "Walnut Brownie",
            "2015": 72.4,
            "2016": 53.9,
            "2017": 39.1
          }
        ]
      },
      xAxis: { type: "category" },
      yAxis: {},
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
.el-col-4 {
  overflow: hidden;
}
.is-active {
  color: #409eff !important;
}
.grid-content {
  font-size: 20px;
}
.el-menu {
  background-color: #1f2d3d !important;
}
.el-menu-item {
  color: rgb(191, 203, 217) !important;
  padding-right: 80px;
}
.is-active {
  background: #131b24;
}
/* 主体四个框 */
.information {
  margin-bottom: 32px;
  div {
    height: 108px;
    box-sizing: border-box;
  }
}
.inf_bg {
  background: #fff;
  display: flex;
  overflow: hidden;

  .el_icons {
    flex: 1;
    font-size: 40px;
    color: #40c9c6;

    .bg {
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      margin: 14px 10px;
    }
  }
  .el_char {
    flex: 1;
    padding-top: 20px;
  }
}
.inf_bg:hover {
  .el_icons {
    color: #fff;
  }
  .bg {
    background: #40c9c6;
    border-radius: 5px;
  }
}
.el_main {
  background: #eff1f4;
  overflow: hidden;
}
//折线图
.line_chart {
  height: 366px;
  background: #fff;
}
#zhe {
  height: 366px;
  padding-top: 20px;
}
// 3个图
.three_zhe {
  margin: 30px 0;
}
.three_zhe_bai {
  background: #fff;
  height: 316px;
}
//最后
.last_h {
  // height: 500px;
  background: #fff;
  overflow: hidden;
}
.last_h_cen {
  text-indent: 10px;
}
.el-divider--horizontal {
  margin: 10px 0;
}
.el-collapse-item__content {
  padding-bottom: 0;
}
.items{
  padding:20px;
  font-size: 15px;
  line-height: 40px;
}
</style>
