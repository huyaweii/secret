import React from 'react'
import { Icon } from 'antd'
/**
* type: Icon类名 
* size?: big|lg|2x|3x
**/
export default class CIcon extends React.Component {
  render() {
    const { type, ...rest } = this.props
    let customType = type
    if (type.indexOf('icon-') === 0) {
      return <i className={'iconfont ' + type} {...rest} />
    }
    return <Icon type={customType} {...rest} />
  }
}
