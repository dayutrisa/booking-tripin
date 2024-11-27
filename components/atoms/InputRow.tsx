import { Text, View, ViewProps } from "react-native"

interface InputRowProps extends ViewProps {
    children?: React.ReactNode;
}

const InputRow: React.FC<InputRowProps> = ({ children, ...props }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', width: '100%', minHeight: 72, borderBottomWidth: 0.25, padding: 8 }}>
            {children}
        </View>
    )
}

export default InputRow