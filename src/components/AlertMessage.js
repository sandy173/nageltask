import React from 'react'

import Alert from 'react-bootstrap/Alert'


const AlertMessage = (props) => {
    const {errorMessage, showError, setShowError} = props;


    return(
        <React.Fragment>
            {showError 
            ? 
                <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                    <Alert.Heading>Error!</Alert.Heading>
                    <p> {errorMessage}</p>
                </Alert>
            :
            []
        
            }
        </React.Fragment>
       
            
        
        
    )

}

export default AlertMessage;