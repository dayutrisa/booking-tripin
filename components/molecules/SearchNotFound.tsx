import { View, Image, Text } from "react-native"

const SearchNotFound = () => {
    return (
        <View style={{ flex: 1, padding: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: '75%', aspectRatio: 1/1, height: '75%' }} source={require('@/assets/images/searchnotfound.png')}/>
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 18, textAlign: 'center' }}>Location Not Found</Text>
        </View>
    )
}

export default SearchNotFound