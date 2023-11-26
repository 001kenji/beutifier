import React, { createContext, forwardRef, useImperativeHandle, useState } from "react";


function Credentials(props,ref) {
  const [GlobaUser, setGlobalUser] = useState({
        user : false,
        owner : true,
        darkmode : 'light'
    })

    var namee = 'kenji'
    function SetUser(props) {
        if(props == 'true') {
            setGlobalUser((prev) => {
                return {
                    ...prev,
                    user : true
                }
            })
        }else if(props == 'false'){
            setGlobalUser((prev) => {
                return {
                    ...prev,
                    user : false
                }
            })

        }
    }
    function SetDarknode(props) {
        if(props == 'dark') {
            setGlobalUser((prev) => {
                return {
                    ...prev,
                    darkmode : 'light'
                }
            })
        }else if(props == 'light'){
            setGlobalUser((prev) => {
                return {
                    ...prev,
                    darkmode : 'dark'
                }
            })

        }
    }

    function SetOwner(props) {
        if(props == 'true') {
            setGlobalUser((prev) => {
                return {
                    ...prev,
                    owner : true
                }
            })
        }else if(props == 'false'){
            setGlobalUser((prev) => {
                return {
                    ...prev,
                    owner : false
                }
            })

        }
    }


useImperativeHandle(ref, () => {
    return {
        
        namee,
        GlobaUser,
        SetUser,
        SetOwner,
        SetDarknode
      
    }
})
}

export default forwardRef(Credentials)