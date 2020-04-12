import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    // call tryLocalSignin() method only once when the app loads up
    useEffect(() => {
        tryLocalSignin();
    }, []);

    // show nothing to user
    return null;
};

export default ResolveAuthScreen;
