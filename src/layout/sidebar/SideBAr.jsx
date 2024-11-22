import { Container, styled } from "@mui/material";
import { Icons } from "../../assets";
import SideBarFilter from "./GenderItem";
import { GENDER } from "../../utils/constants/gender";

export const SideBar = () => {
  const handleGender = (male) => {
    console.log(male);
  };

  return (
    <StyledAside>
      <Container>
        <StyleIcon />
      </Container>
      <div>
        {GENDER.map((item) => (
          <SideBarFilter
            key={item.id}
            {...item}
            onNavigateGender={handleGender}
          />
        ))}
      </div>
    </StyledAside>
  );
};

const StyledAside = styled("aside")({
  width: "218px",
  height: "1101px",
  margin: "0px",
  boxShadow: "3px 2px 12px 0px rgba(34, 60, 80, 0.2)",
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});

const StyleIcon = styled(Icons.Logo)({
  width: "180px",
  height: "40px",
  marginTop: "60px",
});
