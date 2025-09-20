import drizzleIcon from "../../assets/images/icon-drizzle.webp";
import fogIcon from "../../assets/images/icon-fog.webp";
import overcastIcon from "../../assets/images/icon-overcast.webp";
import partlyCloudIcon from "../../assets/images/icon-partly-cloudy.webp";
import rainIcon from "../../assets/images/icon-rain.webp";
import snowIcon from "../../assets/images/icon-snow.webp";
import stormIcon from "../../assets/images/icon-storm.webp";
import sunnyIcon from "../../assets/images/icon-sunny.webp";

export const weatherConditionsIcon = (description: string) => {
  const lowerDesc = description.toLowerCase();

  if (lowerDesc.includes("thunder") || lowerDesc.includes("storm"))
    return stormIcon;

  if (lowerDesc.includes("drizzle")) return drizzleIcon;

  if (
    lowerDesc.includes("fog") ||
    lowerDesc.includes("mist") ||
    lowerDesc.includes("haze")
  )
    return fogIcon;

  if (lowerDesc.includes("partly") && lowerDesc.includes("cloud"))
    return partlyCloudIcon;

  if (lowerDesc.includes("cloud") || lowerDesc.includes("overcast"))
    return overcastIcon;

  if (lowerDesc.includes("snow")) return snowIcon;

  if (lowerDesc.includes("rain")) return rainIcon;

  if (lowerDesc.includes("sun") || lowerDesc.includes("clear"))
    return sunnyIcon;

  return overcastIcon;
};
