import React, {PropsWithChildren, ReactNode} from 'react'
import {View, StyleSheet} from "react-native"

interface vstack {
    spacing: number;
}
const VStack = ({
    spacing,
    children
}: PropsWithChildren<vstack>) => {
    const style = [styles.stackWrapper,{
        padding: spacing
    }]

    return(
        <View style={style}>
            {children}
        </View>
    )
}

export default VStack

const styles = StyleSheet.create({
    stackWrapper: {
        flexDirection: 'column'
    }
})