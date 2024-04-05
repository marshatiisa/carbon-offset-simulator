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

const countryConsumption = {
  country: "US", consumption: 15.52 * 1000,
}

const simulationModes = [
    { label: "Monthly", value: "monthly"},
    { label: "Yearly", value: "yearly"}
]

const DataSelectionForm = ({setCountry}) => {
  const country = "US"
  const {handleSubmit, control } = useForm();
  const onSubmit = (data) => {console.log(data)};

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyles}>
      <div style={formGroupStyles}>
        <label htmlFor="country" style={labelStyles}>Country</label>
        <Controller
          name="country"
          control={control}
          defaultValue="US" 
          render={({ field }) => (
            <select {...field} style={selectStyles}>
              {countryOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        />
      </div>
      <div style={formGroupStyles}>
        <label htmlFor="simulationMode" style={labelStyles}>Simulation Mode</label>
        <Controller
          name="simulationMode"
          control={control}
          defaultValue="monthly"
          render={({ field }) => (
            <select {...field} style={selectStyles}>
              {simulationModes.map((mode, index) => (
                <option key={index} value={mode.value}>
                  {mode.label}
                </option>
              ))}
            </select>
          )}
        />
      </div>
      <button type="submit" style={submitButtonStyles}>Submit</button>
    </form>
  );
};



export default DataSelectionForm;
