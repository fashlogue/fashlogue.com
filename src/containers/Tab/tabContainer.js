import React from 'react';
import { connect } from 'react-redux';
import { Flex } from 'rebass';
import {Tab} from '../../components/Tab';
import {switchTab} from './actions';

/**
 * @class TabContainer - create a tab that connects to the redux store.
 * 
 * @return {React.ReactNode}
 */

class TabContainer extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            activeTab: this.props.children[0].props.label
        }
    }

    /**
     * @method onClickTabItem - the method invoked when a tab is clicked to set the clicked tab to the active tab.
     * 
     * @param {React.ReactNode} tab - tab to be clicked
     */
    onClickTabItem = (tab)=> {
        this.setState({
            activeTab: tab
        })
    } 

    

    render() {
        
        const {children} = this.props;
        const {activeTab} = this.state;
        return(
            <Flex width={1} flexDirection="column">
            <Flex justifyContent="flex-start">
                {children.map((child=> {
                    
                    const {label} = child.props
                    
                    return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            onClick={this.onClickTabItem}
                        />
                    )
                }))

                }
            </Flex>
            <Flex px={3} py={4}>
                { children.map(child => {
                    if(child.props.label !== activeTab) return undefined;
                    return child.props.children
                })

                }
            </Flex>
        </Flex>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        tab: state.tab
    }
}

const mapDispatchToProps = dispatch => ({
    switchTab: (label) => dispatch(switchTab({label})),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer)