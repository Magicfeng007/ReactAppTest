import React from 'react'
import Add from '../Add/Add'
import List from '../List/List'

class App extends React.Component{

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
                <List/>
            </div>
        );
    }
}

export default App;
