import React, { useState } from "react";
import "../Styles/SmartContract.css";
import Select from "react-select";
import { Input, Row, Col, Switch, Space, Radio } from "antd";

const TokenTypeOptions = [
  { label: "HelloERC20", value: "HelloERC20" },
  { label: "SimpleERC20", value: "SimpleERC20" },
  { label: "StandardERC20", value: "StandardERC20" },
  { label: "BurnableERC20", value: "BurnableERC20" },
  { label: "MintableERC20", value: "MintableERC20" },
  { label: "CommonERC20", value: "CommonERC20" },
  { label: "TaxableERC20", value: "TaxableERC20" },
  { label: "AntiWhaleERC20", value: "AntiWhaleERC20" },
  { label: "LiquidERC20", value: "LiquidERC20" },
  { label: "SwappableERC20", value: "SwappableERC20" },
  { label: "DeflationaryERC20", value: "DeflationaryERC20" },
  { label: "UnlimitedERC20", value: "UnlimitedERC20" },
  { label: "AmazingERC20", value: "AmazingERC20" },
  { label: "PowerfulERC20", value: "PowerfulERC20" },
  { label: "PausableERC20", value: "PausableERC20" },
];

const NetworkOptions = [
  { label: "Goerli - Testnet", value: "ethereum_goerli" },
  { label: "Ethereum - Mainnet", value: "ethereum_mainnet" },
  { label: "Sepolia - Testnet", value: "ethereum_sepolia" },
];

const SmartContract = () => {
  const [inputData, setInputData] = useState({
    tokenType: {},
    networkType: {},
    price: "",
    tokenName: "",
    tokenSysmbol: "",
    tokenDecimals: "",
    initalSupply: "",
    maxSupply: "",
    checkterms : false,
  });

  const handleOnChange = (name, value) => {
    if(name === "initalSupply") {
      setInputData({ ...inputData, [name]: value, maxSupply: value });

    } else {
      setInputData({ ...inputData, [name]: value });

    }
  };

  return (
    <div>
      {" "}
      <div id="generator">
        <h1 style={{ color: "rgb(158, 200, 185)" }}>Smart Contract Creation</h1>
        <p
          style={{ color: "rgb(158, 200, 185)", marginTop: 0 }}
          class="description"
        >
          The complete solution to create affordable and professional marketing
          content
        </p>

        <div id="generator-main" class="smartContract top-10">
          <div
            id="generator-prompt"
            class="prompt but"
            style={{ marginBottom: 20, flexDirection: "column" }}
          >
            <p
              style={{ color: "rgb(158, 200, 185)", marginTop: 0 }}
              class="description"
            >
              Token Type and Network
            </p>
            <Row style={{ gap: 10 }}>
              <Col
                xs={{
                  flex: "60%",
                }}
                sm={{
                  flex: "100%",
                }}
                md={{
                  flex: "25%",
                }}
                xl={{
                  flex: "30%",
                }}
              >
                <div style={{ color: "black", width: "100%" }}>
                  <span style={{ color: "rgb(158, 200, 185)" }}>
                    Token Type *
                  </span>
                  <Select
                    isMulti={false}
                    onChange={(e) => {
                      handleOnChange("tokenType", e);
                    }}
                    value={inputData?.tokenType}
                    options={TokenTypeOptions}
                    name="choices-publish-status-input"
                    classNamePrefix="select2-selection form-select"
                    placeholder="Please Select Token Type"
                  />
                </div>
              </Col>
              <Col
                xs={{
                  flex: "60%",
                }}
                sm={{
                  flex: "100%",
                }}
                md={{
                  flex: "25%",
                }}
                xl={{
                  flex: "30%",
                }}
              >
                <div style={{ color: "black", width: "100%" }}>
                  <span style={{ color: "rgb(158, 200, 185)" }}>Network *</span>
                  <Select
                    isMulti={false}
                    onChange={(e) => {
                      handleOnChange("networkType", e);
                    }}
                    value={inputData?.networkType}
                    options={NetworkOptions}
                    name="choices-publish-status-input"
                    classNamePrefix="select2-selection form-select"
                    placeholder={"Please Select Network"}
                  />
                </div>
              </Col>
              <Col
                xs={{
                  flex: "60%",
                }}
                sm={{
                  flex: "100%",
                }}
                md={{
                  flex: "25%",
                }}
                xl={{
                  flex: "30%",
                }}
              >
                <div
                  style={{
                    color: "black",
                    width: "100%",
                    flexDirection: "column",
                    display: "flex",
                  }}
                >
                  <span style={{ color: "rgb(158, 200, 185)" }}>Price *</span>
                  <Input
                    placeholder="Price"
                    type="text"
                    size="large"
                    style={{
                      width: 150,
                      height: 38,
                      background: "white",
                      color: "black",
                    }}
                    value={inputData?.price}
                    onChange={(e) => {
                      handleOnChange(e.target.name, e.target.value);
                    }}
                    name="price"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <Row style={{ gap: 30 }}>
          <Col
            xs={{
              flex: "60%",
            }}
            sm={{
              flex: "100%",
            }}
            md={{
              flex: "25%",
            }}
            xl={{
              flex: "20%",
            }}
          >
            <div id="generator-main" class="smartContract top-10">
              <div
                id="generator-prompt"
                class="prompt but"
                style={{
                  marginBottom: 20,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "rgb(158, 200, 185)",
                    marginTop: 0,
                    fontSize: 16,
                  }}
                  class=""
                >
                  Token details required fields
                </p>
                <div
                  style={{
                    color: "black",
                    width: "100%",
                    flexDirection: "column",
                    display: "flex",
                  }}
                >
                  <span style={{ color: "rgb(158, 200, 185)" }}>
                    Token Name *
                  </span>
                  <Input
                    placeholder="Token Name"
                    type="text"
                    size="large"
                    style={{
                      width: 150,
                      height: 38,
                      background: "white",
                      color: "black",
                      marginTop: 5,
                    }}
                    value={inputData?.tokenName}
                    onChange={(e) => {
                      handleOnChange(e.target.name, e.target.value);
                    }}
                    name="tokenName"
                  />
                </div>
                <div
                  style={{
                    color: "black",
                    width: "100%",
                    flexDirection: "column",
                    display: "flex",
                    marginTop: 15,
                  }}
                >
                  <span style={{ color: "rgb(158, 200, 185)" }}>
                    Token Symbol *
                  </span>
                  <Input
                    placeholder="Token Symbol"
                    type="text"
                    size="large"
                    style={{
                      width: 150,
                      height: 38,
                      background: "white",
                      color: "black",
                      marginTop: 5,
                    }}
                    value={inputData?.tokenSysmbol}
                    onChange={(e) => {
                      handleOnChange(e.target.name, e.target.value);
                    }}
                    name="tokenSysmbol"
                  />
                </div>
                <div
                  style={{
                    color: "black",
                    width: "100%",
                    flexDirection: "column",
                    display: "flex",
                    marginTop: 15,
                  }}
                >
                  <span style={{ color: "rgb(158, 200, 185)" }}>
                    Token Decimals *
                  </span>
                  <Input
                    placeholder="Token Decimals"
                    type="number"
                    size="large"
                    style={{
                      width: 150,
                      height: 38,
                      background: "white",
                      color: "black",
                      marginTop: 5,
                    }}
                    value={inputData?.tokenDecimals}
                    onChange={(e) => {
                      handleOnChange(e.target.name, e.target.value);
                    }}
                    name="tokenDecimals"
                  />
                </div>
              </div>
            </div>
            <div id="generator-main" class="smartContract top-10">
              <div
                id="generator-prompt"
                class="prompt but"
                style={{
                  marginBottom: 20,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "rgb(158, 200, 185)",
                    marginTop: 0,
                    fontSize: 16,
                  }}
                  class=""
                >
                  Token supply required fields{" "}
                </p>
                <div
                  style={{
                    color: "black",
                    width: "100%",
                    flexDirection: "column",
                    display: "flex",
                  }}
                >
                  <span style={{ color: "rgb(158, 200, 185)" }}>
                    Initial Supply{" "}
                  </span>
                  <Input
                    placeholder="Initial Supply"
                    type="number"
                    size="large"
                    style={{
                      width: 150,
                      height: 38,
                      background: "white",
                      color: "black",
                      marginTop: 5,
                    }}
                    value={inputData?.initalSupply}
                    onChange={(e) => {
                      handleOnChange(e.target.name, e.target.value);
                    }}
                    name="initalSupply"
                  />
                </div>
                <div
                  style={{
                    color: "black",
                    width: "100%",
                    flexDirection: "column",
                    display: "flex",
                    marginTop: 15,
                  }}
                >
                  <span style={{ color: "rgb(158, 200, 185)" }}>
                    Max Supply *{" "}
                  </span>
                  <Input
                    placeholder="Max Supply"
                    type="text"
                    size="large"
                    style={{
                      width: 150,
                      height: 38,
                      backgroundColor: "#e9ecef",
                      color: "black",
                      marginTop: 5,
                      opacity: 1,
                    }}
                    value={inputData?.maxSupply}
                    disabled
                    onChange={(e) => {
                      handleOnChange(e.target.name, e.target.value);
                    }}
                    name="maxSupply"
                  />
                </div>
                <div
                  style={{
                    color: "black",
                    width: "100%",
                    flexDirection: "column",
                    display: "flex",
                    marginTop: 15,
                  }}
                >
                  <span style={{ color: "rgb(158, 200, 185)" }}>
                    Token Decimals *
                  </span>
                  <Input
                    placeholder="Token Decimals"
                    type="number"
                    size="large"
                    style={{
                      width: 150,
                      height: 38,
                      background: "white",
                      color: "black",
                      marginTop: 5,
                    }}
                    value={inputData?.tokenDecimals}
                    onChange={(e) => {
                      handleOnChange(e.target.name, e.target.value);
                    }}
                    name="tokenDecimals"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={{
              flex: "60%",
            }}
            sm={{
              flex: "100%",
            }}
            md={{
              flex: "65%",
            }}
            xl={{
              flex: "65%",
            }}
          >
            <div id="generator-main" class="top-10">
              <div
                id="generator-prompt"
                class="prompt but"
                style={{
                  marginBottom: 20,
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    color: "rgb(158, 200, 185)",
                    marginTop: 0,
                    fontSize: 16,
                  }}
                  class=""
                >
                  Token features{" "}
                </p>
                <div style={{}}>
                  <div>
                    <Space direction="horizontal">
                      <Switch disabled={true} defaultChecked />
                      <span>Verified Source Code</span>
                    </Space>
                  </div>
                  <span>
                    Token Source Code will automatically be verified on
                    Etherscan. Only available on Mainnet.
                  </span>
                </div>
                <div style={{ marginTop: 15 }}>
                  <div>
                    <Space direction="horizontal">
                      <Switch disabled={true} defaultChecked />
                      <span>Remove Credits</span>
                    </Space>
                  </div>
                  <span>
                    Remove credits to SmartContracts Tools from Token Source
                    Code.
                  </span>
                </div>
                <div style={{ marginTop: 15 }}>
                  <div>
                    <Radio.Group disabled>
                      <Radio.Button
                        style={{
                          color: "hsla(0,0%,100%,.6)",
                          lineHeight: "none",
                          opacity: 1,
                        }}
                      >
                        Supply Type
                      </Radio.Button>
                      <Radio.Button
                        style={{
                          color: "hsla(0,0%,100%,.6)",
                          lineHeight: "none",
                          opacity: 1,
                        }}
                      >
                        Fixed
                      </Radio.Button>
                    </Radio.Group>
                  </div>

                  <span>Choose between 10k, Fixed, Unlimited or Capped.</span>
                </div>
                <div style={{ marginTop: 15 }}>
                  <div>
                    <Radio.Group disabled>
                      <Radio.Button
                        style={{
                          color: "hsla(0,0%,100%,.6)",
                          lineHeight: "none",
                          opacity: 1,
                        }}
                      >
                        Access Type{" "}
                      </Radio.Button>
                      <Radio.Button
                        style={{
                          color: "hsla(0,0%,100%,.6)",
                          lineHeight: "none",
                          opacity: 1,
                        }}
                      >
                        None
                      </Radio.Button>
                    </Radio.Group>
                  </div>

                  <span>Choose between None, Ownable or Role Based.</span>
                </div>

                <div style={{ marginTop: 15 }}>
                  <div>
                    <Space direction="horizontal">
                      <Switch
                        disabled={true}
                        value={false}
                        style={{ backgroundColor: "rgb(222 223 219 / 69%)" }}
                      />
                      <span>Burnable</span>
                    </Space>
                  </div>
                  <span>
                    The Token can be manually burned to reduce circulating
                    supply.
                  </span>
                </div>
                <div style={{ marginTop: 15 }}>
                  <div>
                    <Space direction="horizontal">
                      <Switch
                        disabled={true}
                        value={false}
                        style={{ backgroundColor: "rgb(222 223 219 / 69%)" }}
                      />
                      <span>Mintable</span>
                    </Space>
                  </div>
                  <span>
                    Owner or accounts with minting permission will be able to
                    generate new tokens, up to token max supply, by minting
                    them.
                  </span>
                </div>
                <div style={{ marginTop: 15 }}>
                  <div>
                    <Space direction="horizontal">
                      <Switch
                        disabled={true}
                        value={false}
                        style={{ backgroundColor: "rgb(222 223 219 / 69%)" }}
                      />
                      <span>Taxable</span>
                    </Space>
                  </div>
                  <span>
                    A tax fee will be added to transfers. For each transaction a
                    fee will automatically be sent to a predefined address.
                    Owner can exclude some accounts from the taxation mechanism.
                  </span>
                </div>
                <div style={{ marginTop: 15 }}>
                  <div>
                    <Space direction="horizontal">
                      <Switch
                        disabled={true}
                        value={false}
                        style={{ backgroundColor: "rgb(222 223 219 / 69%)" }}
                      />
                      <span>Anti Whale Protection</span>
                    </Space>
                  </div>
                  <span>
                    Users cannot hold more than a specific percentage of total
                    supply. Owner can change that percentage or disable it.
                    Owner can exclude some accounts from the anti whale
                    mechanism.
                  </span>
                </div>
                <div style={{ marginTop: 15 }}>
                  <div>
                    <Space direction="horizontal">
                      <Switch
                        disabled={true}
                        value={false}
                        style={{ backgroundColor: "rgb(222 223 219 / 69%)" }}
                      />
                      <span>Liquidity Pool Setup</span>
                    </Space>
                  </div>
                  <span>
                    A Liquidity Pool pair will automatically be created on
                    Uniswap. Token owner can set an initial supply amount to add
                    to the liquidity pool and can choose to lock LP tokens
                    forever in the token contract or receive them in their
                    wallet.
                  </span>
                </div>
                <div style={{ marginTop: 15 }}>
                  <div>
                    <Space direction="horizontal">
                      <Switch
                        disabled={true}
                        value={false}
                        style={{ backgroundColor: "rgb(222 223 219 / 69%)" }}
                      />
                      <span>Deflationary</span>
                    </Space>
                  </div>
                  <span>
                    Token supply will reduce over time. For each transaction a
                    fee will automatically be burned. Owner can exclude some
                    accounts from the deflation mechanism.
                  </span>
                </div>
                <div style={{ marginTop: 15 }}>
                  <div>
                    <Space direction="horizontal">
                      <Switch
                        disabled={true}
                        value={false}
                        style={{ backgroundColor: "rgb(222 223 219 / 69%)" }}
                      />
                      <span>ERC1363</span>
                    </Space>
                  </div>
                  <span>
                    ERC1363 is an extension interface for ERC20 tokens that
                    supports executing code on a recipient contract after
                    transfers, or code on a spender contract after approvals, in
                    a single transaction.
                  </span>
                </div>
                <div style={{ marginTop: 15 }}>
                  <div>
                    <Space direction="horizontal">
                      <Switch
                        disabled={true}
                        value={false}
                        style={{ backgroundColor: "rgb(222 223 219 / 69%)" }}
                      />
                      <span>Token Recover</span>
                    </Space>
                  </div>
                  <span>
                    It allows the contract owner to recover any ERC20 or NFT
                    token sent into the contract for error and send them to a
                    receiver.
                  </span>
                </div>

                <div style={{ marginTop: 15 }}>
                  <div>
                    <Radio.Group disabled>
                      <Radio.Button
                        style={{
                          color: "hsla(0,0%,100%,.6)",
                          lineHeight: "none",
                          opacity: 1,
                        }}
                      >
                        Transfer Type{" "}
                      </Radio.Button>
                      <Radio.Button
                        style={{
                          color: "hsla(0,0%,100%,.6)",
                          lineHeight: "none",
                          opacity: 1,
                        }}
                      >
                        Unstoppable
                      </Radio.Button>
                    </Radio.Group>
                  </div>

                  <span>Choose between None, Ownable or Role Based.</span>
                </div>

                <div style={{ marginTop: 15 }}>
                  <div style={{ padding: 10, backgroundColor: "lightblue", color: "black" }}>
                    <Input
                      type={"checkbox"}
                      checked={inputData?.checkterms}
                      style={{ width: "min-content" }}
                      name="checkterms"
                      onChange={(e) => {
                        handleOnChange(e.target.name, e.target.checked);
                      }}
                    />
                    &nbsp; &nbsp;
                    <span>
                      I have read, understood and agreed to Token Generator's
                      Terms of Use.
                    </span>
                  </div>
                </div>

                <button class="next-button">Next →</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SmartContract;
