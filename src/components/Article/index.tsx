import * as React from "react";

interface ArticleProps {
    location: any
}

interface ArticleState {
    text: string
}
export class Article extends React.Component<ArticleProps, ArticleState> {
    constructor (props:any) {
        super(props);
        this.state = {
            text: ''
        }
    }

    componentDidMount () {
        fetch('/api/article/' + this.props.location.search.substr(4))
        .then(response => response.json())
        .then(json => {
            if (json.code == 0) {
                this.setState({text: json.data.content});
            }
        })
    }

    render() {
        let text = this.state.text;
    return <pre style={{
        'word-wrap': 'break-word',
        'white-space': 'pre-wrap',
        'padding': '12px',
        'maxWidth': '800px',
        'margin': '0 auto',
        'line-height': '26px'
    }} dangerouslySetInnerHTML={{__html: text}}></pre>;
    }
}