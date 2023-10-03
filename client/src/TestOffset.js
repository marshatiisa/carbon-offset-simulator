function estimateCarbonOffset(treeAge) {

      // Calculate estimated carbon offset
      const carbonOffset = 4.75 * treeAge;
      return carbonOffset;
    } 
    const carbonOffsetEstimate = estimateCarbonOffset(species, age);
  console.log(`The estimated carbon offset of a ${species} tree at ${age} years old is ${carbonOffsetEstimate} kg of CO2 per year.`);
  
  // Estimate carbon offset 2
//   function estimateCarbonOffset2(treeAge) {
//     // Define parameters for the logistic growth model
//     const maxOffset = 500;   // Maximum carbon offset achievable (adjust as needed)
//     const growthRate = 0.1;  // Growth rate parameter (adjust as needed)
//     const carryingCapacity = 50;  // Carrying capacity parameter (adjust as needed)
  
//     // Check if the tree species is in the dictionary
//     if (treeAge <= 0 ) {
//       return "Invalid input. Please provide valid species and age.";
//     }
  
//     // Calculate the estimated carbon offset using the logistic growth model
//     const carbonOffset = (maxOffset * treeAge * growthRate) / (treeAge + carryingCapacity);
  
//     return carbonOffset;
//   }
  
//   // Example usage:
//   const species = "oak";  // Replace with the actual species of the tree
//   const age = 10;        // Replace with the actual age of the tree in years
//   const carbonOffsetEstimate2 = estimateCarbonOffset2(species, age);
//   console.log(`The estimated carbon offset of a ${species} tree at ${age} years old is approximately ${carbonOffsetEstimate.toFixed(2)} kg of CO2 per year.`);
  