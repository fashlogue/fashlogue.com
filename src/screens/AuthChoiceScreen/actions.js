import { LOAD_AUTH } from './constants';

export const loadAuth = payload => {
    return {
      type: LOAD_AUTH,
      payload
    }
}