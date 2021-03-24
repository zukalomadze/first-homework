import Count from "../../components/containers/Count";
import Greeting from "../../components/containers/Greeting";
import Background from "../../components/containers/Background";
import {
  defaultBackgroundColor,
  defaultCounter,
  defaultTextColor,
} from "../../utils/constants";

function Main(props) {
  return (
    <div>
      <Greeting
        greetingText="Hello World"
        description="This is the frist homework"
      />
      <br />
      <Count defaultCounter={defaultCounter} />
      <br />
      <Background
        defaultBackgroundColor={defaultBackgroundColor}
        defaultTextColor={defaultTextColor}
      />
    </div>
  );
}

export default Main;