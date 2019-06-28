import React from 'react'
import MagicGrid from "magic-grid"

export default function withMagicContainer() {
    return class extends React.Component {
        constructor(){
            super()
            this.el = React.createRef();
            this.magicGrid = '';
            this.totalItems = 0
        }

        render(){
            return (
                <div className="hs-menu-classes" ref={this.el}>
                    {this.props.children}
                </div>
            )
        }

        mountGrid(){
            const { current } = this.el
            this.magicGrid = new MagicGrid({
                container: current,
                static: true,
                animate: true,
                useMin: '100',
                gutter: 10,
                useTransform: true,
                items: this.totalItems,
            });
            this.gridUpdate();
        }
        gridUpdate(){
            setTimeout(() => {
                this.magicGrid.listen();
                this.magicGrid.positionItems();
            }, 100);
        }
        componentDidMount() {
            this.mountGrid()
        }
    }
}

