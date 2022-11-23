export interface IBeneficiary {
  Id?: string;
  Name: string;
  Email: string;
  PhoneNumber: string;
  Percentage: number;
  PersonalRelation: string;
  BankingDetailId?: string;
  RsaIdNumber: string;
  DateOfBirth: string;
  BankingDetails?: IBankingDetail;
}
