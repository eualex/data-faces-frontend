import { styled } from "@/styles/config";

export const Container = styled("div", {
  maxWidth: "980px",
  width: "90%",
  mx: "auto",
});

export const Header = styled("header", {
  height: "16vh",
  width: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  h1: {
    color: "$white",
    fontSize: "3.5rem",
  },

  hr: {
    marginTop: "2rem",
    opacity: "0.3",
  },
});

export const Wrapper = styled("div", {
  width: "33.3%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& + div": {
    borderLeft: "1px solid #b5b5b5",
  },
});

export const Title = styled("h1", {
  fontSize: "6rem",
  textAlign: "center",
});

export const Description = styled("p", {
  color: "#b5b5b5",
  width: "120px",
  textAlign: "center",
  mt: "20px",
});

export const ImageContainer = styled("div", {
  position: "relative",
});

export const WrapperGraphicContent = styled("div", {
  height: '200px',

  '& div': {
    '& + div': {
      mt: '20px'
    },

    '& p': {
      color: '#b5b5b5'
    },

    '& h3': {
      color: '$white',
      fontSize: '2.5rem',
      marginTop: '5px'
    }
  }
});
