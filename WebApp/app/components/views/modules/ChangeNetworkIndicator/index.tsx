/**
 *
 * ChangeNetworkIndicator
 *
 */

import React from 'react';
import {
  Theme,
  createStyles,
  withStyles,
  WithStyles,
  Typography,
} from '@material-ui/core';
import { makeSelectNetworkValid, makeSelectNetwork } from 'domain/App/selectors';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { getNetworkName, NoNetworkIdAvailable } from 'domain/App/blockchainUtils';
import { uiConstants, appColors } from 'theme';
import BlockchainConfig from 'embarkArtifacts/config/blockchain.json';

const styles = (theme: Theme) =>
  createStyles({
    // JSS in CSS goes here
    root: {
      position: 'fixed',
      display: 'block',
      transitionDuration: `${uiConstants.global.animation.speeds.mutation}ms`,
      opacity: 0,
      visibility: 'hidden',
      right: 0,
      transform: 'translate(100%, 0)',
      bottom: '10vh',
      borderRadius: 15,
      padding: 20,
      color: appColors.general.white.base,
      '&.show': {
        opacity: 1,
        visibility: 'visible',
        right: 10,
        transform: 'translate(0, 0)',
      },
    },
    red: {
      backgroundColor: appColors.general.red.base,
    },
    blue: {
      backgroundColor: appColors.general.blue.base
    },
  });

interface OwnProps extends WithStyles<typeof styles> {}

const ChangeNetworkIndicator: React.FC<OwnProps> = ({ classes }: OwnProps) => {
  const correctNetwork = useSelector(makeSelectNetworkValid);
  const network = useSelector(makeSelectNetwork);
  const correctNetworkName = getNetworkName(BlockchainConfig.networkId);

  if(network === NoNetworkIdAvailable){
    return (
      <article
        className={classNames(classes.root, "show", classes.blue)}
      >
        <Typography>You need to connect to a web3 wallet to perform this action. Please consider downloading <a href="https://status.im/get/" target="_blank" style={{color: "#fff"}}>Status.im</a></Typography>
      </article>
    );
  }

  return (
    <article
      className={classNames(classes.root, classes.red, {
        ['show']: !correctNetwork,
      })}
    >
      <Typography>Please change network to {correctNetworkName}!</Typography>
    </article>
  );
};

export default withStyles(styles, { withTheme: true })(ChangeNetworkIndicator);
