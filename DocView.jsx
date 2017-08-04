import React from 'react';

class DocView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            types: props.types,
            designers: props.designers,
        }

    }

    render() {
        return (
            <div>
                <Name content={this.state.name}/>
                <TypeList content={this.state.types}/>
                <DesignerList content={this.state.designers}/>
            </div>
        );
    }
}

class Name extends React.Component {
    render() {
        return (<h2>{this.props.content}</h2>);
    }
}

class TypeList extends React.Component {
    render() {
        return (<p><b>Types</b>: {this.props.content}</p>);
    }
}

class DesignerList extends React.Component {
    render() {
        return (<p><b>Designers</b>: {this.props.content}</p>);
    }
}

export default DocView;
