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

const simulationModes = [
    { label: "Monthly", value: "monthly"},
    { label: "Yearly", value: "yearly"}
]

const DataSelectionForm = () => {
  const {handleSubmit, control } = useForm();
  const onSubmit = (data) => {console.log(data)};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div style={{ marginBottom: '20px' }}>
    <label htmlFor="country">Country</label>
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
    </div>
    <div style={{ marginBottom: '20px' }}>
        <label htmlFor="simulationMode">Simulation Mode</label>
        <Controller
          name="simulationMode"
          control={control}
          defaultValue="monthly"
          render={({ field }) => (
            <select {...field}>
              {simulationModes.map((mode, index) => (
                <option key={index} value={mode.value}>
                  {mode.label}
                </option>
              ))}
            </select>
          )}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};



export default DataSelectionForm;
