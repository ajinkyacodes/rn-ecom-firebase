import { StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButton from './src/components/buttons/AppButton';

export default function App() {
	return (
		<>
			<FlashMessage position={'top'} />
			<AppSafeView style={styles.container}>
				<AppButton
					title={'Show Message'}
					onPress={() =>
						showMessage({
							message: 'Hello World',
							color: '#ff0',
							type: 'danger',
						})
					}          
				/>
				<AppText
					onPress={() =>
						showMessage({
							message: 'Hello World',
							color: '#ff0',
							type: 'danger',
						})
					}
					variant='bold'
				>
					Hello World!
				</AppText>
			</AppSafeView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
