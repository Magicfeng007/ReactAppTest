import React from 'react'
import Add from '../Add/Add'
import List from '../List/List'

class App extends React.Component{

    constructor(props){
        super(props);
        /*this.props.comments=[
            {username:'A',content:'React有点有点难'},
            {username:'aa',content:'React有点有点难aaa'},
            {username:'B',content:'React好难'}
        ]*/

        this.state = {
            comments : [
                {username:'A',content:'React有点有点难'},
                {username:'aa',content:'React有点有点难aaa'},
                {username:'B',content:'React好难'}
            ]
        }
    }

    delete = (index) => {
        this.state.comments.splice(index,1);//第一个参数为从哪个索引开始删除，第二个参数为删除个数
        this.setState(this.state.comments );
    }

    addComment = (comment) => {
        // this.state.comments.push(comment); 追加到尾部
        this.state.comments.unshift(comment);//添加到头部
        this.setState(this.state.comments );
    }

    /*shouldComponentUpdate(){
        //当调用this.setState(this.state.comments );时，shouldComponentUpdate方法就会被调用，但是此方法不能重写，否则组件将不能重绘
        alert("call shouldComponentUpdate()");
    }*/

    /*componentDidMount(){
        alert("call componentDidMount()");
    }*/

    render(){
        console.log(this)
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <Add addComment={this.addComment}/>
                <List comments={this.state.comments} delete={this.delete}/>
            </div>
        );
    }
}

export default App;
