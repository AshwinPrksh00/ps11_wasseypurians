import React from 'react'
import { auth } from '../fire.js'
import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'flex-end', position: 'fixed', width: '10%', backgroundColor: '#FAFAFA', top: 50,  borderBottom: 'solid 1px lightgray', zIndex: '20'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</Button>
        </div>
    )
}

export default SignOut