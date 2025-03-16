/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters

 const spacecraft = {
 vel: 10000, // velocity (km/h)
 acc: 3, // acceleration (m/s^2)
 time: 3600, // seconds (1 hour)
 d: 0, // distance (km)
 fuel: 5000, // remaining fuel (kg)
 fbr: 0.5, // fuel burn rate (kg/s)
 };

 const calculateNewVelocity = ({ vel, acc, time }) => {

 const velocityInMetersPerSecond = vel / 3.6;

 const newVelocityInMetersPerSecond = velocityInMetersPerSecond + (acc * time);
  
 return newVelocityInMetersPerSecond * 3.6;
 };

 const calculateNewDistance = ({ vel, d, time }) => {

 return d + (vel * time) / 3600;
 };

const calculateRemainingFuel = ({ fbr, time, fuel }) => {

  const fuelConsumed = fbr * time;

  return Math.max(0, fuel - fuelConsumed);
};

const validateInputs = ({ vel, acc, fuel, fbr }) => {
  if (vel <= 0 || acc <= 0 || fuel <= 0 || fbr <= 0) {
    throw new Error('Invalid input: All values must be positive and greater than zero.');
  }
};

const calculateTrajectory = (params) => {
  try{
    validateInputs(params);

    const newVelocity = calculateNewVelocity(params);
    const newDistancen = calculateNewDistance(params);
    const remainingFuel = calculateremainingFuel(params);

    return {
      newVelocity: newVelocity.toFixed(2),
      newDistance: newDistance.toFixed(2),
      remainingFuel: remainingFuel.toFixed(2),
    };
  } catch (error) {
    console.error(error.message);

  }
};

const result = calculateTrajectory(spacecraft);

console.log (`New Velocity: ${result.newVelocity} km/h`);
console.log (`New Distance: ${result.newDistance} km`);
console.log (`Remaining Fuel: ${result.remainingFuel} kg`);











