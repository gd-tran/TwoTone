import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import ACircle from './shapes/circles';

// all the components wee need for the visualizer to work will live on this compnent
// base on the value of the state, it will render the value of the key of the obj
// the state gets updated every time a new key is pressed
// updates state usinh setShapes; pass the new value of state in an array

function Visualizer() {

    const [shapes, setShapes] = useState(['']);
    
    const handleKeyDown = (event) => {
//updates state usin
        if (event.code === 'KeyA') {
            setShapes(['a'])
        }
    
        if (event.code === 'KeyW') {
            setShapes(['w'])
        }

        if (event.code === 'KeyS') {
            setShapes(['s'])
        }

        if (event.code === 'KeyE') {
            setShapes(['e'])
        }

        if (event.code === 'KeyD') {
            setShapes(['d'])
        }

        if (event.code === 'KeyF') {
            setShapes(['f'])
        }

        if (event.code === 'KeyT') {
            setShapes(['t'])
        }

        if (event.code === 'KeyG') {
            setShapes(['g'])
        }

        if (event.code === 'KeyY') {
            setShapes(['y'])
        }

        if (event.code === 'KeyU') {
            setShapes(['u'])
        }

        if (event.code === 'KeyJ') {
            setShapes(['j'])
        }

        if (event.code === 'KeyK') {
            setShapes(['k'])
        }
    
    };
    
    useEffect(() => {

        window.addEventListener('keydown', handleKeyDown);
    
        // cleanup this component
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };

    }, []);
    
    return (
        <div className='container'>
        <h1>Welcome to the Keydown Listening Component</h1>
        {
            {
                'a': <ACircle/>,
            }[shapes]
        }
        </div>
    );

}

export default connect(
    null, { } //pass in actions here 
 ) (Visualizer);

