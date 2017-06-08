import React, {Component} from 'react'
import WangEditor from 'wangeditor'
// import $ from 'jquery'
import style from './style.less'
let editor
export default class Editor extends Component {
  componentDidMount () {
    editor = new WangEditor('editor');
    editor.create()
  }
  get = () => {
    console.log(editor.$txt.html())
  }
  render () {
    return (
      <div className={style.editor}>
        <div id='editor' />
        <div onClick={this.get}>确定</div>
      </div>
    );
  }
}
