export interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  admissionNumber: string;
  phoneNumber: string;
}

export interface EventProps {
  id: string;
  eventPhoto: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  keyTheme: string;
  date: string;
  location: string;
}
