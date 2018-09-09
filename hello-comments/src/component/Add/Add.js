import React from 'react'
import PubSub from 'pubsub-js'

class Add extends React.Component{

    pubMessages = () =>{
        let username = this.refs.username.value;
        let content = this.refs.content.value;
        if(this.validateData(username,content)){
            alert('用户名和内容不能为空！');
            return;
        }
        let commnet = {username:username,content:content};

        PubSub.publish('AddCommentsTopic',commnet);

        //添加完成后清空数据
        this.refs.username.value = "";
        this.refs.content.value = "";
    }

    validateData(username,content){
        if(!username || !content) return true;
    }

    render(){
        // console.log(this);//内置的函数this都指向实例对象
        return(
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" ref="username" className="form-control" placeholder="用户名"/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea  ref="content" className="form-control" rows="6" placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" onClick={this.pubMessages} className="btn btn-default pull-right">提交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Add;