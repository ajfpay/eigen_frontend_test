const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "24px",
  // backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
  textAlign: "left",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
  // backgroundColor: "#0958d9",
  // padding: "16px",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#001529",
  maxWidth: "100%",
};

const layoutStyle = {
  overflow: "hidden",
  // width: "calc(50% - 8px)",
  maxWidth: "calc(100% - 8px)",
  // padding: "8px",
};

export { headerStyle, contentStyle, siderStyle, footerStyle, layoutStyle };
