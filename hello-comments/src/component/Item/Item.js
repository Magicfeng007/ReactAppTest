import React,{Component} from 'react'

class Item extends Component{

    delete = () => {
        let index = this.props.index;
        this.props.delete(index);
    }
    render(){

        /*例子：<a href="javascript:;">我的大学</a>

        javascript: 是一个伪协议

        javascript:是表示在触发<a>默认动作时，执行一段JavaScript代码，而 javascript:; 表示什么都不执行，这样点击<a>时就没有任何反应。

        href="javascript:;"就是去掉a标签的默认行为，跟href="javascript:void(0)"是一样的？

        是一样的。

        void 是JavaScript 的一个运算符，void(0)就是什么都不做的意思。

        如果<a/>标签中的href不写，则鼠标点击时鼠标会变成一个光标，但是可以删除内容
        如该有href则鼠标还是鼠标的样子，但是会导致页面刷新，从而重新加载页面，导致内容被还原（看起来就是内容又重新添加了进去，无法删除）
        所以为了鼠标看起来好看（仍然是鼠标的样子），又不导致页面重新加载，则需要用javascript:;来处理

        但是这样编译时会有警告：Script URL is a form of eval  no-script-url
        */

        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.delete}>删除</a>
                </div>
                <p className="user"><span>{this.props.comment.username}</span><span>说:</span></p>
                <p className="centence">{this.props.comment.content}</p>
            </li>
        );
    }
}

export default Item;