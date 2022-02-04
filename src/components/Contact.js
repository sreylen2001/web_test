import React, {Component} from 'react';
import Head from "./Head";
// import { Kak_Contact } from "./Kak_Contact";
import {Hotel} from "./Hotel";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Head />
                {/*<Kak_Contact />*/}
                <Hotel />

                
            </div>
        );
    }
}

