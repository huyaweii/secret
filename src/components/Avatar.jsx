import React from 'react'
export default class Avatar extends React.Component {
  render() {
    const { size, url, ...rest } = this.props
    return <img src={url} style={{ width: size, height: size }} {...rest} />
  }
}