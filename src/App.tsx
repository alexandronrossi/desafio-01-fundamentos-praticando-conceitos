import "./global.css";

import styles from "./App.module.css";
import { Header } from "./components/Header";

export function App() {
	return (
		<main>
			<Header />

			<section>
				<div className={styles.taskForm}>

				</div>

				<div className={styles.taskList}></div>
			</section>
		</main>
	);
}
