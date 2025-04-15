export interface Prize {
  name: string;
  description: string;
  quantity: number;
  imageUrl: string;
  imageFile: Blob | string;  
}

export interface EventFormData {
  title: string;
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
  title: string;
  description: string;
  date: Date;
  eventStartTime: Date;
  eventEndTime: Date;
  status: string | null;
  // qrCodeValidityDuration:
}

export type SidePanelState = "none" | "timer" | "prize-add";
