import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import RentalView from './pages/rental/rentalView'

export const navigationRef: any = React.createRef()
export const Router = () => {
    navigationRef.current = {
        navigate: useNavigate(),
    }

    return (
        <Routes>
            <Route index element={<RentalView />} />            
        </Routes>
    )
}
