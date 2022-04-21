import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { Context } from "../../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="d-flex flex-wrap">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
