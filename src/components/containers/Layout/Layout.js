import React from 'react'
import Aux from '../../../hoc/aux';
import './Layout.css';
const layout = (props) => (
    <Aux>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className="Layout">
            {props.children}
        </main>
    </Aux>
);

export default layout;