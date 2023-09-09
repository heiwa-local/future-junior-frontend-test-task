import { Routing } from '../pages';
import { withProviders } from './providers';
import styles from "./styles.module.scss"

const App = () => {
  return (
    <div className={styles.app}>
      <Routing/>
    </div>
  );
}

export default withProviders(App);
