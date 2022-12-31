import Navbar from './Navbar';
import List from './List';
// import ListClass from './ListClass';
import Text from './Text';
import Counter from './Counter';
import CounterClass from './CounterClass';
import AddItem from "./AddItem";


import {useState} from "react";

const navbarTitle = 'Getting started with state';
const friendsList = ['Oleg', 'Kolya', 'Rustam'];
const friends = List({ title: 'Friends', items: friendsList });


function App() {

    const [guitars, setGuitars] = useState(['Strat', 'Les Paul', 'Explorer']);
    function updateGuitars(newGuitar) {
        console.log(newGuitar)
        setGuitars([...guitars, newGuitar]);
    }

    return (
        <>
            <Navbar title={navbarTitle} />
            <div className="container">Hello, World!</div>

            <div className="container">
                {/*<Counter startAt={0} countBy={1} />*/}
                {/*<CounterClass startAt={0} countBy={1} />*/}
            </div>
            <AddItem addGuitarText="Add Guitar" onSubmit={updateGuitars}/>
             <List
                title="List of guitars"
                items={guitars}
            />
            {/*<Text text="My lovely Teresa" title="Terezina" />*/}
            {/*<Text title={textValues.title} text={textValues.text} />*/}
        </>
    );
}

export default App;
