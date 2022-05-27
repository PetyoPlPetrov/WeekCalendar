const mockData = {
  error: false,
  holidays: {
    "2022-05-23": [
      {
        name: "Lunch",
        type: "folk"
      },
      {
        name: "Lunch2",
        type: "folk"
      },
      {
        name: "Lunch3",
        type: "folk"
      },
      {
        name: "Tenis",
        type: "folk"
      }
    ],
    "2022-05-29": [
      {
        name: "Forest",
        type: "public"
      }
    ]
  }
};

export const loadEvents = (data) => {
  const body =  JSON.stringify({
    apiKey: "e9ad14235ea5843d34716ad5a39c784f",
    ...data
  });
  // return new Promise((res) => res(mockData));
  return fetch(
    "https://wozmx9dh26.execute-api.eu-west-1.amazonaws.com/api/holidays",
    {
       method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body
    }
  );
};
