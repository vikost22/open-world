import StatusRoader from "../components/StatusRoader";
import CountriesChoise from "../components/countriesChoise";

export function ChooseCountry() {
  return (
    <>
      <CountriesChoise />
      <StatusRoader statusNumber={3} statusName="Choose a country" />
    </>
  );
}