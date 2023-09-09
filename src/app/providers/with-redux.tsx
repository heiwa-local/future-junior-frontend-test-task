import { Provider } from "react-redux";
import { makeStore } from "../store/store";

const store = makeStore()

export const withRedux = (component: () => React.ReactNode) => () => (
    <Provider store={store}>
        {component()}
    </Provider>
)