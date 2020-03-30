import React, { Component } from 'react';

class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const url = document.location.protocol + '//' +
                        document.location.hostname + ':8000';
            const api = '/api/';
            console.log(url + api);
            const res = await fetch(url + api);
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
