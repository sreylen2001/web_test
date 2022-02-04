import React, {Component} from 'react';
import SliderOne from "./SliderOne";
import GridPri from "./GridPri";
import "../styles/Home.css";
import SliderHome from "./SliderHome";
import View from "./view";


export default class Home extends Component {

    render() {

        return (
            <div>
                <SliderOne/>
                <GridPri />
                <SliderHome />
                <View />


            </div>
        );
    }
}

