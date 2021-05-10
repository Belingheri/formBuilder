import * as Alert from "./components/Alert.js";
import * as Logger from "./components/Logger.js";

async function init() {
  try {
    const data = await fetch("./data/procedure.json");
    if (!data.ok)
      throw new Error(`La chiamata ritorna con stato: ${data.status}`);
    const proceduraObj = await data.json();

    if (proceduraObj.componets.length === 0)
      throw new Error(
        `La procedura "${proceduraObj.name}" non ha nessun componente`
      );
  } catch (error) {
    Logger.error(error);
    Alert.info(error.message);
  }
}

init()
  .then()
  .catch((e) => {
    Logger.error(e);
  });
