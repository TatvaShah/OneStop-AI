import React, { useState } from "react";
import "../Styles/SmartContract.css";
import Select from "react-select";
import { Input, Row, Col, Switch, Space, Radio } from "antd";
import axios from "axios";

const TokenTypeOptions = [
  { label: "Standard - ERC20 [Live]", value: "ERC20" },
  { label: "Standard - BEP20 [Live}", value: "BEP20" },
  { label: "Standard - SOL [Releasing Soon]", value: "SOL" },
];

const NetworkOptions = [
  { label: "BNB Smart Chain - Mainnet", value: "bep20Main" },
  { label: "Ethereum - Mainnet", value: "erc20Main" },
  { label: "Solana - Mainnet", value: "solMain" }
];

const SmartContract = () => {

  const [contract, setContract] = useState("");

  const [inputData, setInputData] = useState({
    tokenType: {},
    networkType: {},
    price: "",
    tokenName: "",
    tokenSysmbol: "",
    tokenDecimals: "18",
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

  const handleFormSubmission = () => {
    console.log("Submission Called");
    const OPENAI_API_KEY =
      "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"; //OpenAI API key

    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    };

    const data = {
      messages: [{role: "system", content: `make me an entire "BEP-20" smart contract with all necessary functions ready to deploy on "BNB Smart Chain Mainnet" with your best capability. In the contract header I want this line commented at the top "This contract is created using OneStop AI". The TOKEN NAME is "OneStop AI", The TOKEN SYMBOL is "OSI", TOKEN DECIMAL is ${inputData.tokenDecimals}, TOKEN MAX SUPPLY IS "10,000,000,000". Make sure all the functions are there in the contract and no additional text from your side.`}],
      model: "gpt-3.5-turbo"
    };

    axios
      .post(apiUrl, data, {
        headers: headers,
      })
      .then((response) => {
        if (response?.status === 200) {
          console.log("Response :", response.data);
          setContract(response.data?.choices[0].message.content);
        }
        console.log("Contract :: ",response.data?.choices[0].message.content);
      });
  }

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
                {/* <div
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
                      marginTop: 5
                    }}
                    value={inputData?.price}
                    onChange={(e) => {
                      handleOnChange(e.target.name, e.target.value);
                    }}
                    name="price"
                  />
                </div> */}
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
                    placeholder="OneStop AI"
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
                    placeholder="OSI"
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
                {/* <div
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
                </div> */}
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
            <div>
            <button
                      className="btn btn-secondary mt-4"
                      data-dismiss="modal"
                      aria-label="Close"
                      style={{
                        fontWeight: 700,
                        backgroundColor: "rgb(156 89 69)",
                        borderColor: "rgb(156 89 69)",
                      }}
                      onClick={() => handleFormSubmission()}
                    >
                      <span>Submit</span>
                    </button>
            </div>
            {/* <div id="generator-main" class="top-10">
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
                          lineHeight: "28px",
                          opacity: 1,
                        }}
                      >
                        Supply Type
                      </Radio.Button>
                      <Radio.Button
                        style={{
                          color: "hsla(0,0%,100%,.6)",
                          lineHeight: "28px",
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
                          lineHeight: "28px",
                          opacity: 1,
                        }}
                      >
                        Access Type{" "}
                      </Radio.Button>
                      <Radio.Button
                        style={{
                          color: "hsla(0,0%,100%,.6)",
                          lineHeight: "28px",
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
                          lineHeight: "28px",
                          opacity: 1,
                        }}
                      >
                        Transfer Type{" "}
                      </Radio.Button>
                      <Radio.Button
                        style={{
                          color: "hsla(0,0%,100%,.6)",
                          lineHeight: "28px",
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
                  <div
                    style={{
                      padding: 10,
                      backgroundColor: "lightblue",
                      color: "black",
                    }}
                  >
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
            </div> */}
          </Col>
        </Row>
        <div style={{color:"#ffffff"}}>
          <p>Smart Contract</p>
          {contract}
        </div>
      </div>
    </div>
  );
};

export default SmartContract;
