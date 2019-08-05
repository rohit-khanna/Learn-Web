import { configure } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";
import "babel-polyfill";

configure({ adapter: new Adaptor() });
