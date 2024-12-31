export type IClub = {
      name: string;
      description: string;
      image: string;
      memberShipFee: number;
      location: {
            latitude: number;
            longitude: number;
      };
      rating: number;
      ageLimit: number;
      address: string;
      openingHour: string;
      closingHour: string;
      openDay: string;
      isApproved: boolean;
      isOpen: boolean;
};
