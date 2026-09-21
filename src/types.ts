export type Language = 'ar' | 'en' | 'zh' | 'ru' | 'ur';

export type NavigationPage = 'home' | 'about' | 'services' | 'management' | 'contact';

export interface ContactSubmission {
  fullName: string;
  email: string;
  phone: string;
  subjectType: 'sales' | 'management' | 'partnership' | 'general';
  message: string;
  preferredCity?: string;
}

export interface ManagementSubmission {
  ownerName: string;
  email: string;
  phone: string;
  propertyType: string;
  city: string;
  unitsOrArea: string;
  currentStatus: 'vacant' | 'rented' | 'under_construction';
  notes?: string;
}
