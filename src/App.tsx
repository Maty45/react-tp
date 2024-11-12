import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter";
import { MIPrimerComponent } from "./components/MiPrimerComponent/MIPrimerComponent";
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { AppProduct } from "./components/AppProduct/AppProduct";

export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
      <MIPrimerComponent
        text={"Texto de propiedades"}
        color="#F39237"
        fontSize={5}
      />
      <ComponentCounter />
      <ComponentUseEffect /> 
      {/* <FormComponent />  */}
      <AppProduct />
    </div>
  );
};
