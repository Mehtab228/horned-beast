import React from 'react';
import HornedBeast from './HornedBeast'
import narval from './narval.jpeg'
import rhino from './rhino.jpeg'

class Main extends React.Component {
    render() {
        return(
            <>
            <div>
                <HornedBeast src={narval} alt={'a narval'} title={'Narwhal'} description={'A narwhal swimming'}/>
            </div>
            <div>
                <HornedBeast src={rhino} alt={'a rhino'} title={'Rhino'} description={'A rhino looking at the camera'}/>
            </div>
            </>
        )
    }
}

export default Main