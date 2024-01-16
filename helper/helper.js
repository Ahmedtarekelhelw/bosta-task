export const Translate = (translator, data) => {
  if (Array.isArray(data)) return data.map((key) => translator(key));
  const translatedObj = {};
  Object.entries(data).forEach(([key, value]) => {
    translatedObj[key] = translator(value);
  });

  return translatedObj;
};

export const stepTitle = [
  "shipment_No",
  "last_update",
  "merchant_name",
  "delivering_at",
];

export const stepStatus = {
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
  DELIVERED_TO_SENDER: "DELIVERED_TO_SENDER",
};

export const stepsText = [
  "sh_created",
  "sh_received_from_merchant",
  "sh_on_the_way",
  "sh_delivered",
];

export const trackingData = [
  "Delivery_address",
  "shipment_problem",
  "Report_a_problem",
  "Shipment_details",
];

export const tableHeaders = ["hub", "date", "time", "state"];
