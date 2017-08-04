import React from 'react';
import ReactDOM from 'react-dom';
import DocView from './DocView.jsx';
import Axios from 'axios';

class App extends React.Component {
    constructor() {
        super();

        this.state = App.initialState();

        this.onSearchRequestChanged = this.onSearchRequestChanged.bind(this);
        this.onSearchDocsClicked = this.onSearchDocsClicked.bind(this);
        this.onClearDocsClicked = this.onClearDocsClicked.bind(this);
        App.initialState = App.initialState.bind(this);
    };

    static initialState() {
        return {
            counter: 0,
            request: "",
            documents: [],
        };
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.searchRequestInput).focus();
    }

    onSearchRequestChanged(event) {
        this.setState({ request: event.target.value })
    }

    onSearchDocsClicked() {
        let searchRequest = this.state.request;

        Axios.get('http://localhost:8080/documents/search/?what=' + encodeURIComponent(searchRequest))
            .then(response => {
                console.log(`response.data=${JSON.stringify(response.data)}`);

                this.setState((prevState) => {
                    return {
                        counter: prevState.counter + 1,
                        documents: response.data,
                    }
                })
            })
    };

    onClearDocsClicked() {
        this.setState(App.initialState());
    };

    render() {
        return (
            <div>
                <h1>DocSearch application</h1>
                <input ref="searchRequestInput"
                       type="search"
                       value={this.state.request}
                       onChange={this.onSearchRequestChanged}/>
                <button onClick = {this.onSearchDocsClicked}>Search</button>
                <button onClick = {this.onClearDocsClicked}>Clear</button>
                <hr/>

                {
                    this.state.documents.map((doc, index) => {
                        return (
                            <DocView
                                key={doc.Name + '-' + index}
                                name={doc.Name}
                                types={doc.Type}
                                designers={doc['Designed by']}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
