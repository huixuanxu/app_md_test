import React from "react";
import {
    Box,
    Pressable,
    Text,
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetDragIndicator,
    ActionsheetDragIndicatorWrapper,
    ActionsheetItem,
    ActionsheetItemText,
    ActionsheetContent,
} from "@gluestack-ui/themed";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
    const [showActionsheet, setShowActionsheet] = React.useState(false);
    const handleClose = () => setShowActionsheet(!showActionsheet);
    return (
        <Box>
            <Pressable
                onPress={handleClose}
                bg="#6200EE"
                width="$20"
                height="$20"
                borderRadius="$full"
                justifyContent="center"
                alignItems="center"
                style={{
                    position: 'relative',
                    bottom: 25,  // 距離底部的距離
                }}
            >
                <MaterialCommunityIcons name="cart" color={'white'} size={36}/>
            </Pressable>
            <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
                <ActionsheetBackdrop />
                <ActionsheetContent h="$72" zIndex={999}>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Delete</ActionsheetItemText>
                    </ActionsheetItem>
                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Share</ActionsheetItemText>
                    </ActionsheetItem>
                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Play</ActionsheetItemText>
                    </ActionsheetItem>
                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Favourite</ActionsheetItemText>
                    </ActionsheetItem>
                    <ActionsheetItem onPress={handleClose}>
                        <ActionsheetItemText>Cancel</ActionsheetItemText>
                    </ActionsheetItem>
                </ActionsheetContent>
            </Actionsheet>
        </Box>
    );
};