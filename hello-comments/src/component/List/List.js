import React,{Component} from 'react'
import Item from '../Item/Item'

class List extends Component{
    render(){
        return(
            <div className="container">
                <div className="col-md-8">
                    <h3 className="reply">评论回复：</h3>
                    <h2 style={{display: this.props.comments.length !== 0 ? 'none' : true}}>暂无评论，点击左侧添加评论！！！</h2>
                    <ul className="list-group">
                        {
                            this.props.comments.map((comment,index) => {
                                console.log(comment);
                                console.log(index);
                            return <Item comment={comment} key={index} index={index} delete={this.props.delete}/>;
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default List;