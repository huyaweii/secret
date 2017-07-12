import React, { Component } from 'react'

import style from './style.less'
import { Timeline } from 'antd'
export default class Home extends Component {
  componentWillMount() {}
  componentDidMount() {}
  render() {
    return (
      <Timeline className={style.timeline}>
        <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
        <Timeline.Item>
          初步排除网络异常,阿斯蒂芬爱迪生加上地方健康撒旦法加速度阿打扫房间阿斯蒂芬结案时间即可按时打卡积分加上撒大家看法接口啊斯蒂芬就卡萨丁加上地方加上地方加上阿士大夫撒旦阿斯蒂芬阿斯蒂芬地方加上地方 2015-09-01
        </Timeline.Item>
        <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
        <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>

        <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
        <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
        <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
        <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>

        <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
        <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
        <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
        <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
      </Timeline>
    )
  }
}
