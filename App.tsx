import { StyleSheet } from 'react-native';
import AppSafeView from './src/components/views/AppSafeView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppTextInput from './src/components/inputs/AppTextInput';
import AppButton from './src/components/buttons/AppButton';
import AppText from './src/components/texts/AppText';

export default function App() {
	return (
		<>
			<FlashMessage position={'top'} />
			<AppSafeView style={styles.container}>
				<AppTextInput placeholder={'Enter Name'} />
				<AppButton
					title='Click Here'
					onPress={() =>
						showMessage({
							message: 'Simple message',
							type: 'success',
							color: '#fff',
						})
					}
				></AppButton>
			</AppSafeView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
