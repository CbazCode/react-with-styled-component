import React from 'react'
import { SignIn } from '../components/Signin'
import { ScrollToTop } from '../components/Signin/ScrollToTop'

export const SigninPage = () => {
    return (
        <>
            //ScrolTop hace que cuando se cambie de ruta vaya inmediato a la parte superior
            <ScrollToTop />
            <SignIn/>
        </>
    )
}
