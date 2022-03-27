import { Dimensions } from 'react-native'

export default Constant = {
    baseURL: 'https://provinces.open-api.vn/api',
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    screenName: {
        TabBarNavigation: 'TabBarNavigation',
        Home: 'Home',
        Search: 'Search',
        CreatPost: 'CreatPost',
        Message: 'Message',
        Profile: 'Profile',
        DetailPost: 'DetailPost',
        ViewMore: 'ViewMore',
        ChoiceDistrict: 'ChoiceDistrict',
        ChoiceWards: 'ChoiceWards',
        Login: 'Login',
        Registration: 'Registration',
        MessageDetail: 'MessageDetail',
        UpdateProfile: 'UpdateProfile',
        UpdateAddress: 'UpdateAddress',
        Setting: 'Setting',
        ProfileUser: 'ProfileUser',
        ListReview: 'ListReview'
    },
    color: {
        green: '#3FC44E',
        blue: '#00CEFF',
        link: '#3168FF',
        grayText: '#92929D',
        separator: '#d1d1d1',
        text: '#373737',
        border: '#e6e6e6'
    },
    key: {},
    icons: {
        tabBarHome: require('../assets/images/tabBar/ic_home.png'),
        tabBarSearch: require('../assets/images/tabBar/ic_search.png'),
        tabBarPost: require('../assets/images/tabBar/ic_plus.png'),
        tabBarMessage: require('../assets/images/tabBar/ic_messenger.png'),
        tabBarProfile: require('../assets/images/tabBar/ic_user.png'),
        backgroundHotel: require('../assets/images/img_hotel.png')
    },
    fonts: {
        poppinsBold: 'Poppins-Bold',
        poppinsMedium: 'Poppins-Medium',
        poppinsRegular: 'Poppins-Regular',
        poppinsThin: 'Poppins-Thin',
        poppinsLight: 'Poppins-Light',
        poppinsSemiBold: 'Poppins-SemiBold',
        RobotoSlabBlack: 'RobotoSlab-Black',
        RobotoSlabSemiBold: 'RobotoSlab-SemiBold',
        RobotoSlabRegular: 'RobotoSlab-Regular'
    }
}
