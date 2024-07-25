import { ContextWrapper } from './src/Context/Context';
import MainPage from './src/pages/MainPage/MainPage';


export default function App() {

	return (
		<ContextWrapper>
			<MainPage/>
		</ContextWrapper>
	);
}

