const COUNTRY_CODES = `AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW`.split(" ");

const displayNames = new Intl.DisplayNames(["pt-BR"], { type: "region" });
const flagFromCode = (code: string) => code.replace(/./g, (letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)));

const COUNTRIES = COUNTRY_CODES.map((code) => ({
  code,
  name: displayNames.of(code) ?? code,
  flag: flagFromCode(code),
})).sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

const countryByCode = new Map(COUNTRIES.map((country) => [country.code, country]));
const normalizedName = (value: string) => value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").trim().toLocaleLowerCase("pt-BR");
const codeByName = new Map(COUNTRIES.map((country) => [normalizedName(country.name), country.code]));
codeByName.set("brasil", "BR");
codeByName.set("brazil", "BR");
codeByName.set("japao", "JP");
codeByName.set("japan", "JP");
codeByName.set("estados unidos", "US");
codeByName.set("eua", "US");
codeByName.set("united states", "US");

function normalizeCountryCode(value: unknown) {
  const raw = String(value ?? "").trim();
  const upper = raw.toUpperCase();
  if (countryByCode.has(upper)) return upper;
  return codeByName.get(normalizedName(raw)) ?? null;
}

function getCountry(value: unknown) {
  const code = normalizeCountryCode(value);
  return code ? countryByCode.get(code) ?? null : null;
}

export { COUNTRIES, COUNTRY_CODES, getCountry, normalizeCountryCode };
