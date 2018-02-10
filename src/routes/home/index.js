import { h, Component } from "preact";
import { Button } from "react-toolbox/lib/button";
import style from "./style";

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <Button raised="true">Hi Mike!</Button>
      </div>
    );
  }
}
