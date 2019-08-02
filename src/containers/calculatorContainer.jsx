import React from 'react';
import Calculator from '../components/calculator';
import { connect } from 'react-redux';


class CalculatorContainer extends React.Component {
    render() {
        return (
            <div>
                <h1> Calculator App </h1>
                <Calculator 
                    storeValue={this.props.storeValue} 
                    onIncrementCounter={this.props.onIncrementCounter} 
                    onDecrementCounter={this.props.onDecrementCounter}
                    onAddFiveCounter={this.props.onAddFiveCounter}
                    onLaunchAPI={this.props.onLaunchAPI}
                    userData={this.props.payload}
                    isPending={this.props.isPending}
                    hasFailed={this.props.hasFailded}
                    hasSucceeded={this.props.hasSucceeded}
                />
            </div>
        )
    }
}
CalculatorContainer.defaultProps = {
    userData: {
        userId: null,
        id: null,
        title: ''
    },
    value: null
}

const mapStateToProps = state => {
    return {
        storeValue: state.value,
        payload: state.apiData,
        isPending: state.isPending,
        hasFailed: state.hasFailded,
        hasSucceeded: state.hasSucceeded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddFiveCounter: () => dispatch({type: 'INCREMENT_BY_FIVE'}),
        onLaunchAPI: () => dispatch({type: 'LAUNCH_API'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);