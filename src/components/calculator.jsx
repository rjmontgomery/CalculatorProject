import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';


class Calculator extends React.Component {


    render() {
        const {
            storeValue,
            onIncrementCounter,
            onDecrementCounter,
            onAddFiveCounter,
            onLaunchAPI,
            hasFailed,
            hasSucceeded,
            isPending,
            userData,
        } = this.props
        return(
            <div>
                <div>
                    <button onClick={onIncrementCounter}>Increment</button>
                    <button onClick={onDecrementCounter}>Decrement</button>
                    <button onClick={onAddFiveCounter}>Add Five</button>
                    <button onClick={onLaunchAPI}>Launch API</button>
                    <h2> User ID: {userData.userId}</h2>
                    <h2> ID_Number: {userData.id}</h2>
                    <h2> Title: {userData.title}</h2>
                    {hasSucceeded && (
                        <div>
                            API information succeeded
                        </div>
                    )}
                    {hasFailed && (
                        <div>
                            API information failed
                        </div>
                    )}
                    
                </div>
                <div>
                <p> total: {storeValue} </p>
                </div>
                <LoadingOverlay
                    active={this.props.isPending}
                    spinner={<BounceLoader/>}>
                </LoadingOverlay>
            </div>


        )
    }
}

export default Calculator;