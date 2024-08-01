import { ContextWrapper } from './src/Context/Context';
import StackNavigation from './src/navigation/navigate';


export default function App() {
	return (
		<ContextWrapper>
			<StackNavigation/>
		</ContextWrapper>
	);
}

