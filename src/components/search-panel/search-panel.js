import { Component } from 'react/cjs/react.production.min';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state ={
            term:''
        }
    }

    onUpdateSearchLoc =(e) => {
        const term = e.target.value;
        this.setState({term:term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input type="text" 
            className='form-control seach-input'
            placeholder='Найти сотрудника'
            value={this.state.term}
            onChange={this.onUpdateSearchLoc}/>
        )
    }

}

export default SearchPanel;