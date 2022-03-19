import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

//whatever is on top will be default screen
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Game Zone",
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Details",
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#eee', height: 60 },
        headerTintColor: '#444'
    }
})

//this returns a component that can be rendered in the page
// export default createAppContainer(HomeStack)
export default HomeStack