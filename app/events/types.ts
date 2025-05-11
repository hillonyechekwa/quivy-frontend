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
  date: Date
  eventStartTime: Date
  eventEndTime: Date
  name: string
  status: string
  uniqueCode: string
  qrCodeValidityDuration: number
  clicks: number
  scans: number
  prizes: []
  winners: []
  createdAt: string
}


export type SidePanelState = "none" | "timer" | "prize-add";
