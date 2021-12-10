import React from "react";
import { fetchDog } from "./reducer";

class App extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.dispatch(fetchDog())}>Show Dog</button>
                {this.props.loading
                    ? <p>Loading...</p>
                    : this.props.error
                        ? <p>Error, try again</p>
                        : <p><img src={this.props.url} /></p>}
            </div>
        )
    }
}

export default App;