import React from 'react'

class Add extends React.Component{

    //第一种方案：强制绑定this
    /*constructor(){
        super();

        //强制绑定this
        //add是添加在实例对象上面
        this.add = this.handleClick.bind(this);
    }

    //自定义的函数recat没有将this指向实例对象，而是undefine
    //自定义函数都是在原型prototype上面
    handleClick(){
        console.log(this);//如果没有在constructor中强制绑定this，这里的this是undefine
        alert(this.refs.username.value + "说" + this.refs.content.value);
        let commnet = {username:this.refs.username.value,content:this.refs.content.value};
        this.props.addComment(commnet);
    }*/


    //第二种方案：通过箭头函数，箭头函数本身没有this,它的this就是实例对象
    //箭头函数是在实例对象上面，原型上面没有箭头函数，这与普通的自定义函数不一样（普通的自定义函数都是在原型prototype上面）
    handleClick = () => {
        // console.log(this);//如果没有在constructor中强制绑定this，这里的this是undefine
        let username = this.refs.username.value;
        let content = this.refs.content.value;
        if(this.validateData(username,content)){
            alert('用户名和内容不能为空！');
            return;
        }
        let commnet = {username:username,content:content};
        this.props.addComment(commnet);

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
                            <button type="button" onClick={this.handleClick} className="btn btn-default pull-right">提交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Add;