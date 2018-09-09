import React,{Component} from 'react'
import Item from '../Item/Item'
import PubSub from 'pubsub-js'

class List extends Component{

    constructor(props){
        super(props);
        this.state = {
            comments : [
                {username:'A',content:'React有点有点难'},
                {username:'aa',content:'React有点有点难aaa'},
                {username:'B',content:'React好难'}
            ]
        }

    }

    componentDidMount(){
        // create a function to subscribe to topics
        var mySubscriber = (msg, data) => {
            this.state.comments.unshift(data);
            this.setState(this.state.comments);
        };

        // add the function to the list of subscribers for a particular topic
        // we're keeping the returned token, in order to be able to unsubscribe
        // from the topic later on
        var token = PubSub.subscribe('AddCommentsTopic', mySubscriber);
    }

    delete=(index)=>{
        this.state.comments.splice(index,1);
        this.setState(this.state.comments);
    }

    render(){
        return(
            <div className="container">
                <div className="col-md-8">
                    <h3 className="reply">评论回复：</h3>
                    <h2 style={{display: this.state.comments.length !== 0 ? 'none' : true}}>暂无评论，点击左侧添加评论！！！</h2>
                    <ul className="list-group">
                        {
                            this.state.comments.map((comment,index) => {
                            return <Item comment={comment} key={index} index={index} delete={this.delete}/>;
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default List;