import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IBankInfo } from '@interfaces/bank-info/bank-info.interface';
import { IBeneficiariesPagePostRequest } from '@interfaces/beneficiary/beneficiaries-page-post-request.interface';
import { IBeneficiariesPagePostResponse } from '@interfaces/beneficiary/beneficiaries-page-post-response.interface';
import { IBeneficiary } from '@interfaces/beneficiary/beneficiary.interface';
import { IBenefit } from '@interfaces/benefit/benefit.interface';
import { IDisclosureGroup } from '@interfaces/disclosure-group/disclosure-group.interface';
import { IDisclosure } from '@interfaces/disclosure/disclosure.interface';
import { ITextValue } from '@interfaces/text-value/text-value.interface';
import { SharedService } from '@services/shared/shared.service';
import { BehaviorSubject, Observable } from 'rxjs';

export interface GetBeneficiariesPageResponse {
  BeneficiaryRelationshipList: ITextValue[];
  Beneficiaries: IBeneficiary[];
}

export interface PostPaymentPageRequest {
  Disclosures: IDisclosure[];
  AuthenticationType?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BeneficiariesService {
  /** @description Access environment variables */
  private readonly environment = environment;

  constructor(
    private readonly httpClient: HttpClient,
    private sharedService: SharedService
  ) {}

  public getPage(): Observable<HttpResponse<GetBeneficiariesPageResponse>> {
    return this.httpClient.get<GetBeneficiariesPageResponse>(
      `${this.environment.HOST}/sales-process/${this.sharedService.quoteSubject$.value.salesProcessId}/web/beneficiaries`,
      { observe: 'response' }
    );
  }

  public updatePage(body: IBeneficiariesPagePostRequest): Observable<void> {
    return this.httpClient.put<void>(
      `${this.environment.HOST}/sales-process/${this.sharedService.quoteSubject$.value.salesProcessId}/web/beneficiaries`,
      body
    );
  }

  public postPage(
    body: IBeneficiariesPagePostRequest
  ): Observable<IBeneficiariesPagePostResponse> {
    return this.httpClient.post<IBeneficiariesPagePostResponse>(
      `${this.environment.HOST}/sales-process/${this.sharedService.quoteSubject$.value.salesProcessId}/web/beneficiaries`,
      body
    );
  }
}
