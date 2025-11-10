
import '../global.css';
import '../App.css';
import { nama2 } from '../index.js';

let nama1 = "piowarior";

function Test() {
    return(
        <div className="wadah1">
            <h2 className="judul1">hello word {nama1}</h2>
            <h2 className="judul2">hello word {nama2}</h2>
        </div>
    );
}

export default Test;