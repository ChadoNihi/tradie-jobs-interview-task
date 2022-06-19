import { MISSING_VALUE } from "$lib/constants.js";

// FIXME: unit test
export function renderAddress(address = {}) {
  if (Object.keys(address).length) {
    const {
      addressLine1 = MISSING_VALUE,
      addressLine2,
      city = MISSING_VALUE,
      postCode = MISSING_VALUE,
    } = address;
    const addressLine =
      addressLine1 + (addressLine2 ? ` (${addressLine2})` : "");
    return `${addressLine}, ${city} ${postCode}`;
  }
  return MISSING_VALUE;
}
