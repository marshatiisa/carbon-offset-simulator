import { useForm, Controller } from "react-hook-form";

const countryOptions = [
  { label: "United States", value: "US" },
  { label: "United Kingdom", value: "UK" },
  { label: "Germany", value: "DE" },
  { label: "South Africa", value: "ZA" },
  { label: "India", value: "IN" },
  { label: "China", value: "CN" },
  { label: "Singapore", value: "SG" },
  { label: "Australia", value: "AU" },
];

const DataSelectionForm = () => {
  const {handleSubmit, control } = useForm();
  const onSubmit = (data) => {console.log(data)};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="country"
        control={control}
        defaultValue="US" 
        render={({ field }) => (
          <select {...field}>
            {countryOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};



export default DataSelectionForm;
