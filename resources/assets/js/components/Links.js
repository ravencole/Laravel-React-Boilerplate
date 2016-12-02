import React from 'react';

export default class Links extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="links--container">
                { this.props.links.map((l,i) => <div key={`linkItem${i}`} className={`link--item`}><a className={`link--item__${l[0]}`}href={l[1]}>{l[0]}</a></div>) }
            </div>
        );
    }
}