import { createStackNavigator } from "react-navigation-stack";

import About from "../screens/about"

//whatever is on top will be default screen
const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: "About Game Zone",
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#eee', height: 60 },
        headerTintColor: '#444'
    }
})
//this returns a component that can be rendered in the page
export default AboutStack