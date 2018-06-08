import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { react } from "@nosplatform/api-functions";
import {
  str2hexstring,
  int2hex,
  hexstring2str,
  str2ab,
  readVarInt
} from "@cityofzion/neon-js/src/utils";

const { injectNOS, nosProps } = react.default;

const styles = {
  button: {
    margin: "16px",
    padding:"6px",
    fontSize: "16px",
    borderRadius: "3px",
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
  }
};

class NOSActions extends React.Component {
  handleAlert = async func => alert(await func);

  // handleGetAddress = async () => alert(await this.props.nos.getAddress());

  handleClaimGas = () =>
    this.props.nos
      .claimGas()
      .then(alert)
      .catch(alert);

  render() {
    var { classes, nos } = this.props;
    var nos = window.NOS.V1;

    const neo = "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
    // const rpx = "ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9";
    // const ont = "ceab719b8baa2310f232ee0d277c061704541cfb";
    const nad = "daa8f8c84bc1220647f857e6ae37576d4f65fd9f";

    // Add your smart contract's scriptHash here
    const scriptHash = "daa8f8c84bc1220647f857e6ae37576d4f65fd9f";

    // The operation of your smart contract you want to (test)invoke
    const operation = "getBoardList";

    // The necessary arguments for you (test)invoke
    const args = ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y'];

    // The storagekey you want to query
    const key = "NeonAD\x02.content";

    const balanceOf_args = ['AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y'];

    // The amount and recipient of your send function
    const recipient = "";
    const amount = "";

    const invoke = { scriptHash, operation, args }; // and testInvoke
    const getStorage = { scriptHash, key };
    const send = { amount, asset: gas, recipient };

    return (
      <React.Fragment>
        <button className={classes.button} onClick={() => nos.getAddress()
          .then((address) => alert(`Address: ${address}`))
          .catch((err) => alert(`Error: ${err.message}`))}>
          Get Address
        </button>

        <button
          className={classes.button}
          onClick={() => nos.getBalance({ asset: neo})
            .then((balance) => alert(`Balance: ${balance}`))
            .catch((err) => alert(`Error: ${err.message}`))}
        >
          Get NEO Balance
        </button>

        <button
          className={classes.button}
          onClick={() => this.handleAlert(nos.getBalance({ asset: gas }))}
        >
          Get GAS Balance
        </button>

        <button
          className={classes.button}
          onClick={() => this.handleAlert(nos.getBalance({ asset: nad }))}
        >
          Get NAD Balance
        </button>

        <button
          className={classes.button}
          onClick={() => this.handleAlert(nos.testInvoke())}
        >
          Get NAD Balance
        </button>



        <button className={classes.button} onClick={this.handleClaimGas}>
          Claim Gas
        </button>
        <button className={classes.button} onClick={() => this.handleAlert(nos.send(send))}>
          Send GAS to...
        </button>

        <button className={classes.button} onClick={() => nos.testInvoke(invoke)
          .then((script) => console.log(`Test invoke script: ${hexstring2str(script)} `))
          .catch((err) => alert(`Error: ${err.message}`))}>
          TestInvoke
        </button>
        {/*
          <button
            className={classes.button}
            onClick={() => this.handleAlert(nos.invoke(invoke))}
          >
            Invoke
          </button>
        */}
        <button
          className={classes.button}
          onClick={() => nos.getStorage(getStorage)
            .then((content)=>console.log(str2hexstring(content)))
            .catch((err)=>alert(`Error: ${err.message}`))
          }
        >
          GetStorage
        </button>
      </React.Fragment>
    );
  }
}

NOSActions.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  nos: nosProps.isRequired
};

export default injectNOS(injectSheet(styles)(NOSActions));
