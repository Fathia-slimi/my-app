import React from 'react';
import {useAuthValue} from '.contexte/AuthContext'
import {useHistory, useEffect} from 'react';

function VerifyEmail(props) {
    const {currentUser} = useAuthValue();
    const history = useHistory()
    useEffect(() => {
        const interval = setInterval(() => {
          currentUser?.reload()
          .then(() => {
            if(currentUser?.emailVerified){
              clearInterval(interval)
              history.push('/')
            }
          })
          .catch((err) => {
            alert(err.message)
          })
        }, 1000)
      }, [history, currentUser])
    return (
        <div>
            
        </div>
    );
}

export default VerifyEmail;