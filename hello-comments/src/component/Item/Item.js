import React,{Component} from 'react'

class Item extends Component{
    render(){
        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;">删除</a>
                </div>
                <p className="user"><span>{this.props.comment.username}</span><span>说:</span></p>
                <p className="centence">{this.props.comment.content}</p>
            </li>
        );
    }
}

export default Item;