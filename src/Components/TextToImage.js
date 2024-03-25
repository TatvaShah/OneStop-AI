import { Input } from "antd";
import React, { useState } from "react";
import "../Styles/TextToImage.css";
import axios from "axios";
const TextToImage = () => {
  const [promptText, setPromptText] = useState("");
  const [projectName, setProjectName] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [industries, setIndustries] = useState("");
  const [textBelowImage, setTextBelowImage] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");
  const [step, setStep] = useState("step1");
  // eslint-disable-next-line
  const [model, setModel] = useState("dall-e-3");
  // eslint-disable-next-line
  const [numberOfImages, setNumberOfImages] = useState(1);
  // eslint-disable-next-line
  const [size, setSize] = useState("1024x1024");

  const handleGenerateBtn = (e) => {
    e.preventDefault();

    const OPENAI_API_KEY =
      "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"; //OpenAI API key

    const apiUrl = "https://api.openai.com/v1/images/generations";

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    };

    const data = {
      model: model,
      prompt: promptText,
      n: numberOfImages,
      size: size,
    };

    axios
      .post(apiUrl, data, {
        headers: headers,
      })
      .then((response) => {
        if (response?.status === 200) {
          setGeneratedImage(response?.data?.data?.[0]?.url);
        }
        console.log(response);
      });
  };

  const handleDownload = async (imageUrl) => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const OPENAI_API_KEY =
        "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"; //OpenAI API key

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      };

      // Fetch the image data
      const response = await fetch(proxyUrl + imageUrl, {
        method: "GET",
        headers: headers,
      });
      const blob = await response.blob();

      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob);

      // Create a link element
      const aTag = document.createElement("a");
      aTag.href = blobUrl;
      aTag.setAttribute("download", "Image.png");

      // Append the link to the body and click it
      document.body.appendChild(aTag);
      aTag.click();

      // Clean up by removing the link and revoking the blob URL
      document.body.removeChild(aTag);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div
            className={` custom-menu-col mx-5 ${
              step === "step1" ? "active-step" : ""
            }`}
          >
            <button onClick={() => setStep("step1")}>Logo</button>
          </div>
          <div
            className={` custom-menu-col  ${
              step === "step2" ? "active-step" : ""
            }`}
          >
            <button onClick={() => setStep("step2")}>Banner</button>
          </div>
          <div
            className={` custom-menu-col mx-5  ${
              step === "step3" ? "active-step" : ""
            }`}
          >
            <button onClick={() => setStep("step3")}>Text Image </button>
          </div>
        </div>
      </div>

      {step === "step1" && (
        <div id="generator" className="mt-2">
          <h1 style={{ color: "rgb(158, 200, 185)" }}>Logo Generator</h1>

          <div id="generator-main" className="top-10">
            <div
              id="generator-prompt"
              className="prompt but"
              style={{ marginBottom: 20, gap: 20, padding: 10 }}
            >
              <div id="generator-prompt-image"></div>
              <div id="generator-prompt-text" className="but">
                <label>Project Name</label>
                <Input
                  id=""
                  className="but"
                  type="text"
                  placeholder="Project Name"
                  rows="1"
                  value={projectName}
                  onChange={(e) => {
                    setProjectName(e?.target?.value);
                  }}
                  style={{ marginTop: 5 }}
                />
              </div>
              <div id="generator-prompt-text" className="but">
                <label>Colour</label>
                <Input
                  id=""
                  className="but"
                  type="text"
                  placeholder="Colour"
                  rows="1"
                  value={colorCode}
                  onChange={(e) => {
                    setColorCode(e?.target?.value);
                  }}
                  style={{ marginTop: 5 }}
                />
              </div>
            </div>
          </div>

          <div id="generator-main" className="top-10">
            <div
              id="generator-prompt"
              className="prompt but"
              style={{ marginBottom: 20 }}
            >
              <div id="generator-prompt-image"></div>
              <div id="generator-prompt-text" className="but">
                <label>Description prompt</label>
                <textarea
                  id="generator-positive"
                  className="but"
                  type="text"
                  placeholder="What do you want to see?"
                  rows="1"
                  value={promptText}
                  onChange={(e) => {
                    setPromptText(e?.target?.value);
                  }}
                  style={{ height: "30px", border: "none", outline: "none" }}
                ></textarea>
              </div>
            </div>

            <h3 style={{ color: "rgb(158, 200, 185)" }}>Select Industry</h3>

            <section>
              <div class="main-container">
                <ul class="grid-wrapper">
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-travel tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Travel
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    <i class="iconfont icon-bike tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Sports Fitness
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-shopping-cart-black-shape tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Retail
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-church tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Religious
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-noun_building_ tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Real Estate
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-mace tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Legal
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-it tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Internet
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-noun_Robot_ tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Technology
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-sofa tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Home Family
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-qiqiu tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Events
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    <i class="iconfont icon-yiliao tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Medical Dental
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-icon_food tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Restaurant
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-caiwu tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Finance
                    </span>{" "}
                  </li>

                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-game tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Entertainment
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-zhuangxiu tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Construction
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-open-book1 tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-om7hqv"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-om7hqv">
                      Education
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-meirong tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Beauty Spa
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-car tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Automotive
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-chongwu tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Animals Pets
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-qita tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Others
                    </span>{" "}
                  </li>
                </ul>
              </div>
            </section>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 20,
              }}
            >
              <button
                onClick={(e) => {
                  handleGenerateBtn(e);
                }}
                className="text-to-image-btn"
              >
                <svg
                  height="24"
                  width="24"
                  fill="#FFFFFF"
                  viewBox="0 0 24 24"
                  data-name="Layer 1"
                  id="Layer_1"
                  className="sparkle"
                >
                  <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                </svg>

                <span className="text">Generate</span>
              </button>
            </div>
          </div>
          {generatedImage ? (
            <div>
              <img src={generatedImage} alt="generate-img" />
              <div>
                <button
                  type="button"
                  onClick={() => {
                    handleDownload(generatedImage);
                  }}
                  className="button-dn"
                >
                  <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Download Now</span>
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div id="generator-feed" className="top-30">
              <ul id="generator-feed-type" className="tab-list"></ul>

              <div
                id="generator-feed-mansory"
                className="top-30 mansorary medium"
                style={{ alignItems: "stretch" }}
              ></div>
              <div id="can-you-see-me"></div>
            </div>
          )}
        </div>
      )}
      {step === "step2" && (
        <div id="generator" className="mt-2">
          <h1 style={{ color: "rgb(158, 200, 185)" }}>Banner Generator</h1>

          <div id="generator-main" className="top-10">
            <div
              id="generator-prompt"
              className="prompt but"
              style={{ marginBottom: 20, gap: 20, padding: 10 }}
            >
              <div id="generator-prompt-image"></div>
              <div id="generator-prompt-text" className="but">
                <label>Project Name</label>
                <Input
                  id=""
                  className="but"
                  type="text"
                  placeholder="Project Name"
                  rows="1"
                  value={projectName}
                  onChange={(e) => {
                    setProjectName(e?.target?.value);
                  }}
                  style={{ marginTop: 5 }}
                />
              </div>
              <div id="generator-prompt-text" className="but">
                <label>Colour</label>
                <Input
                  id=""
                  className="but"
                  type="text"
                  placeholder="Colour"
                  rows="1"
                  value={colorCode}
                  onChange={(e) => {
                    setColorCode(e?.target?.value);
                  }}
                  style={{ marginTop: 5 }}
                />
              </div>
            </div>
          </div>

          <div id="generator-main" className="top-10">
            <div
              id="generator-prompt"
              className="prompt but"
              style={{ marginBottom: 20 }}
            >
              <div id="generator-prompt-image"></div>
              <div id="generator-prompt-text" className="but">
                <label>Description prompt</label>
                <textarea
                  id="generator-positive"
                  className="but"
                  type="text"
                  placeholder="What do you want to see?"
                  rows="1"
                  value={promptText}
                  onChange={(e) => {
                    setPromptText(e?.target?.value);
                  }}
                  style={{ height: "30px", border: "none", outline: "none" }}
                ></textarea>
              </div>
            </div>

            <h3 style={{ color: "rgb(158, 200, 185)" }}>Select Industry</h3>

            <section>
              <div class="main-container">
                <ul class="grid-wrapper">
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-travel tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Travel
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    <i class="iconfont icon-bike tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Sports Fitness
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-shopping-cart-black-shape tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Retail
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-church tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Religious
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-noun_building_ tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Real Estate
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-mace tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Legal
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-it tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Internet
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-noun_Robot_ tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Technology
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-sofa tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Home Family
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-qiqiu tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Events
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    <i class="iconfont icon-yiliao tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Medical Dental
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-icon_food tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Restaurant
                    </span>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-caiwu tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Finance
                    </span>{" "}
                  </li>

                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-game tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Entertainment
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-zhuangxiu tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Construction
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-open-book1 tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-om7hqv"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-om7hqv">
                      Education
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-meirong tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Beauty Spa
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-car tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Automotive
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-chongwu tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Animals Pets
                    </span>{" "}
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    {" "}
                    <i class="iconfont icon-qita tw-19wxcu7 tw-113xw0w tw-t83gnr tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-kdr9j5"></i>
                    <span class="tw-1oqjqw3 tw-16x996c tw-z1n6pf tw-1w94yo8 tw-16wrqmo tw-98tp3t tw-1586f5y">
                      Others
                    </span>{" "}
                  </li>
                </ul>
              </div>
            </section>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 20,
              }}
            >
              <button
                onClick={(e) => {
                  handleGenerateBtn(e);
                }}
                className="text-to-image-btn"
              >
                <svg
                  height="24"
                  width="24"
                  fill="#FFFFFF"
                  viewBox="0 0 24 24"
                  data-name="Layer 1"
                  id="Layer_1"
                  className="sparkle"
                >
                  <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                </svg>

                <span className="text">Generate</span>
              </button>
            </div>
          </div>
          {generatedImage ? (
            <div>
              <img src={generatedImage} alt="generate-img" />
              <div>
                <button
                  type="button"
                  onClick={() => {
                    handleDownload(generatedImage);
                  }}
                  className="button-dn"
                >
                  <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Download Now</span>
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div id="generator-feed" className="top-30">
              <ul id="generator-feed-type" className="tab-list"></ul>

              <div
                id="generator-feed-mansory"
                className="top-30 mansorary medium"
                style={{ alignItems: "stretch" }}
              ></div>
              <div id="can-you-see-me"></div>
            </div>
          )}
        </div>
      )}
      {step === "step3" && (
        <div id="generator" className="mt-2">
          <h1 style={{ color: "rgb(158, 200, 185)" }}>
            Text To Image Generator
          </h1>
          <p style={{ color: "rgb(158, 200, 185)" }} className="description">
            Generate an image using Generative AI by describing what you want to
            see, all images are published publicly by default.{" "}
          </p>

          <div id="generator-main" className="top-10">
            <div
              id="generator-prompt"
              className="prompt but"
              style={{ marginBottom: 20, gap: 20, padding: 10 }}
            >
              <div id="generator-prompt-image"></div>
              <div id="generator-prompt-text" className="but">
                <label>Project Name</label>
                <Input
                  id=""
                  className="but"
                  type="text"
                  placeholder="Project Name"
                  rows="1"
                  value={projectName}
                  onChange={(e) => {
                    setProjectName(e?.target?.value);
                  }}
                  style={{ marginTop: 5 }}
                />
              </div>
              <div id="generator-prompt-text" className="but">
                <label>Colour</label>
                <Input
                  id=""
                  className="but"
                  type="text"
                  placeholder="Colour"
                  rows="1"
                  value={colorCode}
                  onChange={(e) => {
                    setColorCode(e?.target?.value);
                  }}
                  style={{ marginTop: 5 }}
                />
              </div>
              <div id="generator-prompt-text" className="but">
                <label>Industries</label>
                <Input
                  id=""
                  className="but"
                  type="text"
                  placeholder="Industries"
                  rows="1"
                  value={industries}
                  onChange={(e) => {
                    setIndustries(e?.target?.value);
                  }}
                  style={{ marginTop: 5 }}
                />
              </div>
              <div
                id="generator-prompt-text"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                className="but"
              >
                <label style={{ width: "50%" }}>Text Below Image</label>
                <Input
                  id=""
                  className=""
                  type="checkbox"
                  checked={textBelowImage}
                  onChange={(e) => {
                    setTextBelowImage(e?.target?.checked);
                  }}
                  style={{
                    marginTop: 5,
                    height: "max-content",
                    width: "max-content",
                    borderStyle: "hidden",
                  }}
                />
              </div>
            </div>
          </div>
          <div id="generator-main" className="top-10">
            <div
              id="generator-prompt"
              className="prompt but"
              style={{ marginBottom: 20 }}
            >
              <div id="generator-prompt-image"></div>
              <div id="generator-prompt-text" className="but">
                <label>Description prompt</label>
                <textarea
                  id="generator-positive"
                  className="but"
                  type="text"
                  placeholder="What do you want to see?"
                  rows="1"
                  value={promptText}
                  onChange={(e) => {
                    setPromptText(e?.target?.value);
                  }}
                  style={{ height: "30px", border: "none", outline: "none" }}
                ></textarea>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 20,
              }}
            >
              <button
                onClick={(e) => {
                  handleGenerateBtn(e);
                }}
                className="text-to-image-btn"
              >
                <svg
                  height="24"
                  width="24"
                  fill="#FFFFFF"
                  viewBox="0 0 24 24"
                  data-name="Layer 1"
                  id="Layer_1"
                  className="sparkle"
                >
                  <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                </svg>

                <span className="text">Generate</span>
              </button>
            </div>
          </div>

          {generatedImage ? (
            <div>
              <img src={generatedImage} alt="generate-img" />
              <div>
                <button
                  type="button"
                  onClick={() => {
                    handleDownload(generatedImage);
                  }}
                  className="button-dn"
                >
                  <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">Download Now</span>
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div id="generator-feed" className="top-30">
              {/* <div id="generator-feed-login" className="top-30">
              <div id="generator-feed-login-examples">
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/65ba5701b4f4f4419f746bc3/806ecb58-167c-4d20-b658-a6a6b2f221e9/medium.webp"
                  width="500"
                  height="500"
                  alt="Steampunk boy with medium length strawberry blond hair with a pink and orange over coat with goggles on the top of his head"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                  width="500"
                  height="500"
                  alt="chiness day cat"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp"
                  width="500"
                  height="500"
                  alt="Scary"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/6565c8dff9ef18d69df3e3a2/fe1887b5-015e-4421-8c6a-1364d2f5b1e9/medium.webp"
                  width="500"
                  height="500"
                  alt="img-3"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/65bb541e67330b7e1e5eb3b5/8928eb7d-033d-4469-be54-d743ddfc006b/medium.webp"
                  width="500"
                  height="500"
                  alt="DJ Hillbilly hitch hiker hanging in the back of carnival truck with a  bindle and a dj set on his lap facing towards the camera while the truck drives off into the sunset  (vibrant colors) (golden hour) (blurry background)"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/65820e33b3f11817959a58f8/65820e33b3f11817959a58f4/medium.webp"
                  width="500"
                  height="500"
                  alt="img-2"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/65661ff66061274d12af3e59/1b1b22a1-56ad-4002-9705-b95bf8c5bc4e/medium.webp"
                  width="500"
                  height="500"
                  alt="Lord of the Rings book cover, 4k, HD, high quality, Far point-of-view, walking down multiple terrain"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/65bb7fcaf767921f4a1b7e94/38c75dee-754b-4367-b322-d519bf143ed3/medium.webp"
                  width="500"
                  height="500"
                  alt="A 14 year old boy chilling to music and looking at neon lights"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/656ef6496fea01fc6cb4c2af/c51d3726-7ac4-44f9-9ee5-b7d32aa80d47/medium.webp"
                  width="500"
                  height="500"
                  alt="funny dinosaur"
                />

                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/656d2fa5d29f123a6e10b107/1571bdb0-eb5c-4faf-ae7d-2749f630a3c8/medium.webp"
                  alt="a man in a space suit playing a guitar, inspired by Cyril Rolando, shutterstock, highly detailed illustration, full color illustration, very detailed illustration, dan mumford and alex grey style"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/656635ad7a7d8d13253a78e6/4861c333-5a74-4aae-860b-630bbd7be288/medium.webp"
                  width="500"
                  height="500"
                  alt="rubi fortnite sexy (warm tone) (backlight)"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/65a338829ae52c0103d5f82d/b68f55ec-bc9c-4deb-a6d7-0e0ae8b9ebd5/medium.webp"
                  width="500"
                  height="500"
                  alt="furry dragon in sunglasses, digital art"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/65bbf83126511f7736e19688/a258579b-e6c6-4f27-86bf-584e76e1ca8d/medium.webp"
                  width="500"
                  height="500"
                  alt="I want pictures with RJCULTISMMINI word"
                />
                <img
                  loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/65bbf8275f52b7981c3007cd/0b779336-a300-4dd5-85ee-8e1ae76ab720/medium.webp"
                  width="500"
                  height="500"
                  alt="CA DEV"
                />
                <img
                  // loading="lazy"
                  src="https://img-cdn.pixlr.com/image-generator/history/65bbf7f95750626a42ba7a2b/ba0bb2cc-7a80-4911-9a35-a607bd1fcbc3/medium.webp"
                  width="500"
                  height="500"
                  alt="img-123"
                />
              </div>
              <div id="generator-feed-login-overlay">
                <h2 style={{ color: "rgb(158, 200, 185)" }}>
                  Get inspiration, text to image prompts and trending image
                  generations; just need to login first!
                </h2>
                <div
                  id="generator-feed-login-button"
                  className="button large positive"
                >
                  Sign up / Log in
                </div>
              </div>
            </div> */}

              <ul id="generator-feed-type" className="tab-list"></ul>

              <div
                id="generator-feed-mansory"
                className="top-30 mansorary medium"
                style={{ alignItems: "stretch" }}
              ></div>
              <div id="can-you-see-me"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TextToImage;
