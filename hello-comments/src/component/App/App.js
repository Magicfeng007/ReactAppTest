import React from 'react'
import Add from '../Add/Add'
import List from '../List/List'

class App extends React.Component{

    constructor(props){
        super(props);
        this.props.comments=[
            {username:'A',content:'React有点有点难'},
            {username:'B',content:'React好难'}
        ]
    }

    render(){
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
                <Add/>
                <List comments={this.props.comments}/>
            </div>
        );
    }
}

export default App;
