import * as Form from "@radix-ui/react-form";

interface StoreFieldProps {
  text: string;
}

const StoreField = ({ text }: StoreFieldProps) => {
  const storeform = [
    {
      label: "CHOACH",
      option: ["Andrew Shrewd", "Stan Torp", "Vick Rock", "Peter Stark"],
    },
    {
      label: "SIZE",
      option: ["S", "M", "L", "XL"],
    },
    {
      label: "PRODUCT",
      option: ["Vanilla", "Chocholate", "Strawberry", "Banana"],
    },
];
  let i = 0;
  switch (text) {
    case "CHOACH":
      i = 0;
      break;
    case "SIZE":
      i = 1;
      break;
    case "PRODUCT":
      i = 2;
      break;
  }
  return (
    <Form.Field className="grid" name="gym-pass">
      <Form.Label>{storeform[i].label}</Form.Label>
      <select>
        {storeform[i].option.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </Form.Field>
  );
};

export default StoreField;
