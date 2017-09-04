import React from 'react'
import classnames from 'classnames'
import classes from './style.less'

class View extends React.Component {
  render() {
    const {
      className,
      children,
      align,
      justify,
      column = false,
      wrap = false,
      row = false,
      height = undefined,
      flex,
      width,
      style,
      ...rest
    } = this.props
    let customStyle = {}

    if (row) {
      customStyle.flexDirection = 'row'
    }

    if (column) {
      customStyle.flexDirection = 'column'
    }

    if (customStyle.flexDirection && customStyle.flexDirection === 'row') {
      customStyle.alignItems = 'flex-start'
    }

    if (align) {
      customStyle.alignItems = align
    }

    if (justify) {
      customStyle.justifyContent = justify
    }

    if (wrap) {
      customStyle.flexWrap = 'wrap'
    }

    if (flex) {
      customStyle.flex = flex
    }
    if (width !== undefined) {
      customStyle.width = width
    }
    if (height) {
      customStyle.height = height
    }
    if (style) {
      customStyle = { ...customStyle, ...style }
    }
    return (
      <div
        className={classnames(classes.v, className)}
        style={Object.keys(customStyle) ? customStyle : null}
        ref={ele => (this.ele = ele)}
        {...rest}
      >
        {children}
      </div>
    )
  }
}
View.displayName = 'View'
export default View
