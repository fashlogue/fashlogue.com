import { LOAD_HOME } from "./constants";

export const loadHome = payload => {
    return {
      type: LOAD_HOME,
      payload
    }
}