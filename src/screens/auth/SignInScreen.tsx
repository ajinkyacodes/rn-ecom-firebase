import { Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AppSafeView from '../../components/views/AppSafeView';
import { sharedPaddingHorizontal } from '../../styles/sharedStyles';
import { IMAGES } from '../../constants/images-paths';
import { s, vs } from 'react-native-size-matters';
import AppText from '../../components/texts/AppText';
import AppTextInput from '../../components/inputs/AppTextInput';
import AppButton from '../../components/buttons/AppButton';
import { AppColors } from '../../styles/colors';

const SignInScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<AppSafeView style={styles.container}>
			<Image source={IMAGES.appLogo} style={styles.logo} />
			<AppTextInput placeholder='Email' onChangeText={setEmail} />
			<AppTextInput
				placeholder='Password'
				onChangeText={setPassword}
				secureTextEntry
			/>
			<AppText style={styles.appName}>Smart E-Commerce</AppText>
			<AppButton title='Login' />
			<AppButton
				title='Sign Up'
				style={styles.registerButton}
				textColor={AppColors.primary}
			/>
		</AppSafeView>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingHorizontal: sharedPaddingHorizontal,
	},
	logo: {
		height: vs(150),
		width: s(150),
		marginBottom: vs(30),
	},
	appName: {
		fontSize: s(16),
		marginBottom: vs(15),
	},
	registerButton: {
		backgroundColor: AppColors.white,
		borderWidth: s(1),
		marginTop: vs(15),
		borderColor: AppColors.primary,
	},
});
