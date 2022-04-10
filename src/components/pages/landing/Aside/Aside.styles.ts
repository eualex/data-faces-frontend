import { styled } from "@/styles/config";

export const Container = styled("aside", {
  width: "450px",
});

export const AsideHeader = styled("header", {
  backgroundColor: "$blue300",
  padding: "20px",
  height: "25vh",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
});

export const Wrapper = styled("section", {
  width: "100%",
  height: "75vh",
  backgroundColor: "$gray800",
});

export const HighlightInformation = styled("div", {
  position: "",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  h1: {
    color: "$white",
    marginTop: "20px",
    fontSize: "3.4rem",
  },
  p: {
    color: "#b9b9b9",
    mt: "10px",
  },
});

export const ImageContainer = styled("div", {
  width: 120,
  height: 120,
  borderRadius: "50%",
  position: "relative",
  marginTop: "-40px",
});

export const UserDetail = styled("div", {
  mt: "30px",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "repeat(1fr, 3)",

  "& div:nth-child(2), & div:nth-child(4), & div:nth-child(6)": {
    borderRight: "none",
  },

  "& div:nth-child(1), & div:nth-child(3), & div:nth-child(5)": {
    borderLeft: "none",
    borderRight: "none",
  },

  "& div:nth-child(3), & div:nth-child(4), & div:nth-child(5), & div:nth-child(6)":
    {
      borderTop: "none",
    },

  "& div": {
    padding: "26px 20px",
    border: "2px solid #2A3A52",

    "& h3": {
      fontSize: "1.7rem",
      color: "$white",
    },

    "& p": {
      marginBottom: '15px',
      fontSize: "1.2rem",
      color: "#b9b9b9",
    },
  },
});
