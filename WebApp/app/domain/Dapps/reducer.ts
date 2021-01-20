/*
 *
 * Dapps reducer
 *
 */

import { DomainState, DomainActions, IDapp } from './types';
import { getType } from 'typesafe-actions';
import {
  setDappsLoadingAction,
  createDappAction,
  updateDappDataAction,
  fetchDappsAction,
  updateDappAction,
} from './actions';
import { FEATURED_DAPP_IDS } from './Featured';
import BlockchainConfig from 'embarkArtifacts/config/blockchain.json';


export const initialState: DomainState = {
  featuredDapps: FEATURED_DAPP_IDS[BlockchainConfig.networkId],
  loading: false,
  dapps: [],
  lastUpdate: 0,
};

function dappsReducer(
  state: DomainState = initialState,
  action: DomainActions,
) {
  switch (action.type) {
    case getType(updateDappAction.success):
      return {
        ...state,
        dapps: [
          ...state.dapps.map((dapp: IDapp) =>
            dapp.id == action.payload.id ? action.payload : dapp,
          ),
        ],
      };
    case getType(updateDappDataAction.success):
      return {
        ...state,
        dapps: [
          ...state.dapps.map((dapp: IDapp) =>
            dapp.id == action.payload.id ? action.payload : dapp,
          ),
        ],
      };
    case getType(createDappAction.success):
      return {
        ...state,
        dapps: [...state.dapps, action.payload],
      };
    case getType(fetchDappsAction.success):
      return {
        ...state,
        dapps: action.payload,
        lastUpdate: Date.now(),
      };
    case getType(setDappsLoadingAction):
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}

export default dappsReducer;


