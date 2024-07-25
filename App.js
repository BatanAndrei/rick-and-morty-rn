import { ContextWrapper } from './src/Context/Context';
import Footer from './src/components/Footer/Footer';
import StackNavigation from './src/navigation/navigate';


export default function App() {

	return (
		<ContextWrapper>
			<StackNavigation/>
		</ContextWrapper>
	);
}

