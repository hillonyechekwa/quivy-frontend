export interface Prize {
  name: string;
  description: string;
  quantity: number;
  imageUrl?: string;
  image: Blob | File | null;  
}

export interface EventFormData {
  name: string;
  description: string;
  date: Date;
  timeValue: Date;
  hours: number;
  minutes: number;
  status?: string;  
//   timer: {
//     hours: string;
//     minutes: string;
//     seconds: string;
//   };
}


export interface EventData {
  name: string;
  description: string;
  date: Date;
  eventStartTime: Date;
  eventEndTime: Date;
  status: string | null;
  // qrCodeValidityDuration:
}


export type EventType = {
  id: string
  description: string
  date: string
  eventStartTime: string
  eventEndTime: string
  name: string
  status: string
  uniqueCode: string
  qrCodeUrl: string
  qrCodeValidityDuration: number
  clicks: number
  scans: number
  prizes: PrizeType[]
  winners: WinnerType []
  createdAt: string
}


export type PrizeType = {
  id: string
  name: string
  description: string
  imageUrl: string
  quantity: number
  status: string
  winners?: string
}


export type WinnerType = {
  id: string
  eventId: string
  selectedAt: string
  name: string
  email: string
  phoneNumber: number
  address: string
  // prize: PrizeType
  prizeId: string
  uniqueCode: string
}

export type SidePanelState = "none" | "timer" | "prize-add";
