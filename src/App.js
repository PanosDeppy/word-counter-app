import { Banner } from "./Components/Banner";
import { WordCounter } from "./Components/WordCounter";

/* Create our main function-based component and inside this component we will build our app.
 */

export const App = () => {
  return (
    <div className="container">
      <Banner />
      <WordCounter />
    </div>
  );
};
