import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

class Dictionary extends React.Component {
    constructor() {
        super()
        this.state = {
            words: [],
            searching: ''
        }
    }

    onSearch = (event) => {
        this.setState({searching: event.target.value})
    }

    componentDidMount(){
        fetch('https://hokumi.github.io/aaith-dictionary/words.json')
        .then(response => response.json())
        .then(words => this.setState({words: words}))        
    }

    render(){
        const filterWord = this.state.words.filter(words => {
            const eng = words.meaning.toLowerCase() + words.word.toLowerCase();
            return (eng.includes(this.state.searching.toLowerCase())
            );            
        });
        return (
            <div className='portDic'>
             <Scroll>
                <SearchBox searching={this.onSearch}/>
                    <CardList words={filterWord} />
                </Scroll>
            </div>
            );
    }
}

export default Dictionary;