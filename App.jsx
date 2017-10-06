import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data:
            [
                {
                    "id": 1,
                    "name": "Foo"
                },
                {
                    "id": 2,
                    "name": "Bar"
                },
                {
                    "id": 3,
                    "name": "Baz"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
                    </tbody>
                </table>
            </div>
                );
    }
}

class TableRow extends React.Component {
                    render() {
                return (
            <tr>
                    <td>{this.props.data.id}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.age}</td>
                </tr>
                );
    }
}

export default App;