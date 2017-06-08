import React from 'react'
import {Icon} from 'antd'
/**
* type: Icon类名 
* size?: big|lg|2x|3x
**/
export default class CIcon extends React.Component {
  render () {
   const {type} = this.props
    let customType = type
    if (type.indexOf('i-') === 0) {
      customType = 'iconfont ' + type
    }
    return <Icon type={customType} />
  }
}
