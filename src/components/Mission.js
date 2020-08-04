import React, { Component } from 'react'
import Title from './Title';
import mission from "../images/mission.jpg";

export default class Mission extends Component {
    render() {
        return (
            <div>
                <Title title="OUR MISSION"/>
                <div>
                    <p className="flotte">
                        <img src={mission} alt="Mission !" className="imgflotte"/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        )
    }
}
