import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 



export interface DeviceBrand {
  id: number;
  name: string;
}

export interface DeviceLocation {
  id: number;
  name: string;
}

export interface Device {
  id: string;
  code: string;
  name: string;
  ipAddress: string; 
  isElectric: boolean;
  isOnline: boolean;
  isMaintenance: boolean;
  isRunning: boolean;
  updatedAt: string;
  latitude: number;
  longitude: number;
  '__deviceBrand__': DeviceBrand;
  '__deviceLocation__': DeviceLocation;
}

export interface Thresholds {
  color: string;
  level: number;
  message: string;
  min_value: number;
  max_value: number;
}

export interface ReadingVariable {
  device_id: string;
  variable_id: number;
  created_date: string;
  created_time: string;
  variable_name: string;
  unit_name: string;
  latest_value: number;
  min_value: number;
  max_value: number;
  thresholds: Thresholds;
}

export interface DeviceDetails extends Device {
  reading: ReadingVariable[];
}

export interface MonitoringPageData {
  deviceDetails: DeviceDetails;
  allPumps: Device[];
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private baseUrl = 'https://cisea.bukitasam.co.id/api-dewatering-dev/api/v1';
  private baseUrl = 'http://localhost:8015/api/v1';
  private token = ''; 

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
  }

  public get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`, { headers: this.getAuthHeaders() });
  }

  public post<T>(endpoint: string, payload: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, payload, { headers: this.getAuthHeaders() });
  }
}
