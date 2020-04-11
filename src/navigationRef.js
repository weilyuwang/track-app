import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};

// export the navigate function for everyone else to use (for navigation)
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: params,
        })
    );
};
