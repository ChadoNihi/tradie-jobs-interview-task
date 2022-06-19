import { JOB_STATUS_MAP } from "$lib/constants.js";

const CLIENT_TYPE = {
  BUSINESS: "business",
  PRIVATE: "provate",
};
Object.freeze(CLIENT_TYPE);

const ADDRESS = {
  addressLine1: "42, Summer str.",
  city: "Ville",
  postCode: "4455",
};
Object.freeze(ADDRESS);
const EMAIL = "mock@email.com";
const PHONE_NUMBER = "123 4443 5554";

export const JOBS = [
  {
    id: 0,
    status: JOB_STATUS_MAP.get("SCHEDULED"),
    createdAt: "3 Jul '22 @ 1:32PM",
    client: {
      type: CLIENT_TYPE.BUSINESS,
      businessName: "XYZ ltd.",
      address: ADDRESS,
      contact: {
        firstName: "Merry",
        lastName: "Qwo",
        email: EMAIL,
        phoneNumber: PHONE_NUMBER,
      },
    },
  },
  {
    id: 6,
    status: JOB_STATUS_MAP.get("SCHEDULED"),
    createdAt: "1 Jul '22 @ 10:02AM",
    client: {
      type: CLIENT_TYPE.PRIVATE,
      address: ADDRESS,
      contact: {
        firstName: "Alex",
        lastName: "Koln",
        email: EMAIL,
        phoneNumber: PHONE_NUMBER,
      },
    },
  },
  {
    id: 2,
    status: JOB_STATUS_MAP.get("TO_PRICED"),
    createdAt: "20 May '22 @ 11:52AM",
    client: {
      type: CLIENT_TYPE.PRIVATE,
      address: ADDRESS,
      contact: {
        firstName: "Micho",
        lastName: "Vee",
        email: EMAIL,
        phoneNumber: PHONE_NUMBER,
      },
    },
    notes: ["Offer discount", "Ask about the certification scheme"],
  },
  {
    id: 1,
    status: JOB_STATUS_MAP.get("COMPLETED"),
    createdAt: "19 May '22 @ 11:01AM",
    client: {
      type: CLIENT_TYPE.PRIVATE,
      address: ADDRESS,
      contact: {
        firstName: "Juli",
        lastName: "Bern",
        email: EMAIL,
        phoneNumber: PHONE_NUMBER,
      },
    },
  },
  {
    id: 4,
    status: JOB_STATUS_MAP.get("INVOICING"),
    createdAt: "29 May '22 @ 10:01AM",
    client: {
      type: CLIENT_TYPE.PRIVATE,
      address: ADDRESS,
      contact: {
        firstName: "Unraki",
        lastName: "Dawkins",
        email: EMAIL,
        phoneNumber: PHONE_NUMBER,
      },
    },
  },
  {
    id: 8,
    status: JOB_STATUS_MAP.get("ACTIVE"),
    createdAt: "16 Jul '22 @ 4:32PM",
    client: {
      type: CLIENT_TYPE.BUSINESS,
      businessName: "ABC ltd.",
      address: ADDRESS,
      contact: {
        firstName: "Hom",
        lastName: "Erwall",
        email: EMAIL,
        phoneNumber: PHONE_NUMBER,
      },
    },
    notes: [
      "Can biotechnology abolish suffering?",
      "Sensor model: 77 FTT, 2 Gen. Further notes.",
    ],
  },
];
