import React from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	ViewStyle,
	TextStyle,
	GestureResponderEvent,
	StyleProp,
} from 'react-native';
import { s, vs } from 'react-native-size-matters';
import AppText from '../texts/AppText';
import { AppColors } from '../../styles/colors';

interface AppButtonProps {
	onPress: (event: GestureResponderEvent) => void;
	title: string;
	backgroundColor?: string;
	textColor?: string;
	style?: StyleProp<ViewStyle>;
	styleTitle?: StyleProp<TextStyle>;
	disabled?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
	onPress,
	title,
	backgroundColor = AppColors.primary,
	textColor = AppColors.white,
	style,
	styleTitle,
	disabled = false,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.8}
			style={[
				styles.button,
				{ backgroundColor: disabled ? AppColors.disableGray : backgroundColor },
				style,
			]}
			disabled={disabled}
		>
			<AppText
				variant='bold'
				style={[styles.textTitle, { color: textColor }, styleTitle]}
			>
				{title}
			</AppText>
		</TouchableOpacity>
	);
};

export default AppButton;

const styles = StyleSheet.create({
	button: {
		width: '100%',
		height: vs(40),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: s(25),
		alignSelf: 'center',
	},
	textTitle: {
		fontSize: s(16),
	},
});
