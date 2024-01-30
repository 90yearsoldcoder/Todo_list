import "./styles/outline.css";
import StorageAPI from "../src/modules/storage";
import Thing from "../src/modules/thing";

let t = new Thing("ProjectA", "No title", "For test", "2024/1/30", "High");
StorageAPI.saveThing(t);
